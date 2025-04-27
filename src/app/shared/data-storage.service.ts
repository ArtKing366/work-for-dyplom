import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Course } from '../courses/course.model';
import { CourseService } from '../courses/course.service';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private courseService: CourseService,
    private authService: AuthService
  ) {}

  storeCourses() {
    const courses = this.courseService.getCourses();
    return this.http
      .put(
        'https://dyplom-cc5ef-default-rtdb.firebaseio.com/courses.json',
        courses
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchCourses() {
    return this.http
      .get<Course[]>(
        'https://dyplom-cc5ef-default-rtdb.firebaseio.com/courses.json',
      
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
}
