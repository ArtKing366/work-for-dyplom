import { Component, Input } from '@angular/core';
import { Course } from '../course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent {
  @Input() course: Course;
  
  constructor(private courseService: CourseService) {}
  
  onAddToMyCourses() {
    console.log('Adding course to My Courses:', this.course);
    this.courseService.addCourseToMyCourses(this.course);
  }
}