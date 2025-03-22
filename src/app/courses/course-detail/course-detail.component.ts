import { Component, Input } from '@angular/core';
import { Course } from '../course.model';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent {
  @Input() course: Course;

  


}
