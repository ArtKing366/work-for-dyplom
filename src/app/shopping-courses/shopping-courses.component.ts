import { Component } from '@angular/core';
import { Course } from '../courses/course.model';
import { Section } from '../shared/section.model';
import { ShoppingCoursesService } from './shopping-courses.service';
import { CourseService } from '../courses/course.service';

@Component({
  selector: 'app-shopping-courses',
  templateUrl: './shopping-courses.component.html',
  styleUrls: ['./shopping-courses.component.css'],
})
export class ShoppingCoursesComponent {
  courses: Course[] = [];
  sections: Section[] = [];
  selectedCourse: Course | null = null;

  constructor(
    private shoppingCoursesService: ShoppingCoursesService,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    this.courses = this.shoppingCoursesService.getCourses();
    this.sections = this.shoppingCoursesService.getShoppingCourses();
    
    this.shoppingCoursesService.coursesChanged.subscribe(
      (courses: Course[]) => {
        this.courses = courses;
      }
    );
  }

  onSelectCourse(course: Course) {
    this.selectedCourse = course;
    this.courseService.courseSelected.emit(course);
  }
}