import { Component, OnInit } from '@angular/core';
import { Course } from '../courses/course.model';
import { Section } from '../shared/section.model';
import { ShoppingCoursesService } from './shopping-courses.service';

@Component({
  selector: 'app-shopping-courses',
  templateUrl: './shopping-courses.component.html',
  styleUrls: ['./shopping-courses.component.css'],
})
export class ShoppingCoursesComponent implements OnInit {
  courses: Course[] = [];
  sections: Section[] = []; 
  selectedCourse: Course | null = null;

  constructor(private shoppingCoursesService: ShoppingCoursesService) {}

  ngOnInit() {
    this.courses = this.shoppingCoursesService.getCourses(); 
    this.sections = this.shoppingCoursesService.getShoppingCourses(); 

    this.shoppingCoursesService.sectionChanged.subscribe((sections: Section[]) => {
      this.sections = sections;
    });
  }

  onSelectCourse(course: Course) {
    this.selectedCourse = course; 
    this.sections = course.sections;
  }
}