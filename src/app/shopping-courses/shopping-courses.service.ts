import { Injectable } from '@angular/core';
import { Course } from '../courses/course.model';
import { Section } from '../shared/section.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShoppingCoursesService {
  private courses: Course[] = [];
  private sections: Section[] = [];
  sectionChanged = new Subject<Section[]>();
  private selectedCourse: Course | null = null;
  startedEditing = new Subject<number>();

  getCourses() {
    return this.courses.slice();
  }

  setCourses(courses: Course[]) {
    this.courses = courses || [];
    this.sections = [];
    for (const course of this.courses) {
      this.sections.push(...(course.sections || []));
    }
    this.sectionChanged.next(this.sections.slice());
  }

  getSection(index: number) {
    return this.sections[index];
  }

  getShoppingCourses() {
    return this.sections.slice();
  }

  addCourse(course: Course) {
    this.courses.push(course);
    this.sections.push(...course.sections);
    this.sectionChanged.next(this.sections.slice());
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