import { Component, Input } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
  // providers: [CourseService],
})
export class CoursesComponent {

  constructor() {}

  ngOnInit() {
    
  }
}
