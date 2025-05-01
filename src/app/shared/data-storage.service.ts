import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CourseService } from '../courses/course.service';
import { Course } from '../courses/course.model';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private courseService: CourseService,
    private authService: AuthService
  ) {}

  storeCourses() {
    const courses = this.courseService.getCourses();
    this.http
      .put(
        'https://ng-dyplom-work-artem-4ae31-default-rtdb.firebaseio.com/course.json',
        courses
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchCourses() {
    return this.authService.user.pipe(
      take(1),
      exhaustMap((user) => {
        return this.http.get<Course[]>(
          'https://ng-dyplom-work-artem-4ae31-default-rtdb.firebaseio.com/course.json',{
            params: new HttpParams().set('auth', user.token)
          }
        );
      }),
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
}
