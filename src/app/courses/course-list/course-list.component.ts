import { Component } from '@angular/core';
import { Course } from '../course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css',
})
export class CourseListComponent {

  courses: Course[];


  
  constructor(private courseService: CourseService){}

  ngOnInit(){
    this.courses = this.courseService.getCourses();
  }


 
}
