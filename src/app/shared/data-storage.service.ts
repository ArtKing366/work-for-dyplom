import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../courses/course.model';
import { CourseService } from '../courses/course.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient, private courseService: CourseService) {}

  storeCourses() {
    const courses = this.courseService.getCourses();
    return this.http
      .put(
        'https://dyplom-project-2399a-default-rtdb.firebaseio.com/courses.json',
        courses
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchCourses(): Observable<Course[]> {
    return this.http
      .get<Course[]>(
        'https://dyplom-project-2399a-default-rtdb.firebaseio.com/courses.json'
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
