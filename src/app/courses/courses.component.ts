import { Component, Input } from '@angular/core';
import { Course } from './course.model';
import { CourseService } from './course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
  providers: [CourseService],
})
export class CoursesComponent {
  @Input() selectedCourse: Course;

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.courseSelected.subscribe((course: Course) => {
      this.selectedCourse = course;
    });
  }
}
