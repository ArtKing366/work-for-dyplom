import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CourseService } from '../courses/course.service';
import { Course } from '../courses/course.model';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { ShoppingCoursesService } from '../shopping-courses/shopping-courses.service';
import { User } from '../auth/user.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private courseService: CourseService,
    private shoppingCoursesService: ShoppingCoursesService,
    private authService: AuthService
  ) {}

  storeCourses() {
    const courses = this.courseService.getCourses();
    this.http
      .put(
        'https://project-dyplom-cyber-security-default-rtdb.firebaseio.com/course.json',
        courses
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchCourses() {
    return this.http
      .get<Course[]>(
        'https://project-dyplom-cyber-security-default-rtdb.firebaseio.com/course.json'
      )
      .pipe(
        map((courses) => {
          return courses.map((course) => {
            return {
              ...course,
              sections: course.sections ? course.sections : [],
            };
          });
        }),
        tap((courses) => {
          this.courseService.setCourses(courses);
        })
      );
  }

  // --- NEW: My Courses (ShoppingCourses) per user ---
  storeMyCourses() {
    this.authService.user.pipe(take(1)).subscribe((user: User) => {
      if (!user) return;
      const myCourses = this.shoppingCoursesService.getCourses();
      this.http
        .put(
          `https://project-dyplom-cyber-security-default-rtdb.firebaseio.com/my-courses/${user.id}.json?auth=${user.token}`,
          myCourses
        )
        .subscribe();
    });
  }

  fetchMyCourses() {
    this.authService.user.pipe(take(1)).subscribe((user: User) => {
      if (!user) return;
      this.http
        .get<any>(
          `https://project-dyplom-cyber-security-default-rtdb.firebaseio.com/my-courses/${user.id}.json?auth=${user.token}`
        )
        .pipe(
          map((courses) => (courses ? courses : [])),
          tap((courses) => {
            this.shoppingCoursesService.setCourses(courses);
          })
        )
        .subscribe();
    });
  }

  // --- NEW: Profile per user ---
  storeProfile(profile: any) {
    this.authService.user.pipe(take(1)).subscribe((user: User) => {
      if (!user) return;
      this.http
        .put(
          `https://project-dyplom-cyber-security-default-rtdb.firebaseio.com/profiles/${user.id}.json?auth=${user.token}`,
          profile
        )
        .subscribe();
    });
  }

  fetchProfile(callback: (profile: any) => void) {
    this.authService.user.pipe(take(1)).subscribe((user: User) => {
      if (!user) return callback(null);
      this.http
        .get<any>(
          `https://project-dyplom-cyber-security-default-rtdb.firebaseio.com/profiles/${user.id}.json?auth=${user.token}`
        )
        .subscribe((profile) => callback(profile));
    });
  }
}
