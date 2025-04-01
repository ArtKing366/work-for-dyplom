import { EventEmitter, Injectable } from "@angular/core";
import { Course } from "../courses/course.model";
import { Section } from "../shared/section.model";

@Injectable({ providedIn: 'root' })
export class ShoppingCoursesService {
  coursesChanged = new EventEmitter<Course[]>();
  sectionChanged = new EventEmitter<Section[]>();

  private courses: Course[] = [];
  private sections: Section[] = [
    new Section(1, 'Section about array of tasks', 45),
    new Section(2, 'DOM structure', 13),
  ];

  getCourses() {
    return this.courses.slice();
  }

  getShoppingCourses() {
    return this.sections.slice();
  }

  addCourse(course: Course) {
    this.courses.push(course);
    this.coursesChanged.emit(this.courses.slice());
    console.log('Courses after adding:', this.courses);
  }

  addtoShoppingCourses(section: Section) {
    this.sections.push(section);
    this.sectionChanged.emit(this.sections.slice());
  }
}