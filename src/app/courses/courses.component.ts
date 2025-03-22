import { Component, Input } from '@angular/core';
import { Course } from './course.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  @Input() selectedCourse: Course;




}
