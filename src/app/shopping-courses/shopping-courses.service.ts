import { Injectable, EventEmitter } from '@angular/core';
import { Course } from '../courses/course.model';
import { Section } from '../shared/section.model';

@Injectable({ providedIn: 'root' })
export class ShoppingCoursesService {
  private courses: Course[] = [];
  private sections: Section[] = [];
  sectionChanged = new EventEmitter<Section[]>(); 
  private selectedCourse: Course | null = null; 

  getCourses() {
    return this.courses.slice();
  }

  getShoppingCourses() {
    return this.sections.slice();
  }

  addCourse(course: Course) {
    this.courses.push(course);
    this.sections.push(...course.sections); 
    this.sectionChanged.emit(this.sections.slice());
    console.log('Courses after adding:', this.courses);
  }

  addtoShoppingCourses(section: Section) {
    this.sections.push(section);
  }

  setSelectedCourse(course: Course) {
    this.selectedCourse = course;
  }

  getSelectedCourse() {
    return this.selectedCourse; 
  }
}