import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CourseService } from '../courses/course.service';
import { Course } from '../courses/course.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private courseService: CourseService) {}

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
    this.http.get<Course[]>(
      'https://ng-dyplom-work-artem-4ae31-default-rtdb.firebaseio.com/course.json'
    ).subscribe(courses => {
      this.courseService.setCourses(courses);
    })
  }
}
