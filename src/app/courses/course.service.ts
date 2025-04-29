import { EventEmitter, Injectable } from "@angular/core";
import { Course } from "./course.model";
import { Section } from "../shared/section.model";
import { ShoppingCoursesService } from "../shopping-courses/shopping-courses.service";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CourseService {

  coursesChanged = new Subject<Course[]>(); 

  constructor(private shoppingCoursesService: ShoppingCoursesService) {}

  private courses: Course[] = [
    new Course(
      "Cybersecurity",
      "Our new free course",
      "https://content.kaspersky-labs.com/fm/press-releases/2c/2cc4b249c97217b0eb5b803320febb80/processed/cyber-security-article-q75.jpg",
      [
        new Section(1, "Introduction to Cybersecurity", 10),
        new Section(2, "Basic Security Principles", 20),
      ]
    ),
    new Course(
      "Debugging",
      "Free course for the best",
      "https://ichef.bbci.co.uk/images/ic/976xn/p0cgdvxh.png",
      [
        new Section(1, "Introduction to Debugging", 15),
        new Section(2, "Debugging Techniques", 25),
      ]
    ),
  ];

  setCourses(courses: Course[]){
    this.courses = courses;
    this.coursesChanged.next(this.courses.slice());
  }

  getCourses() {
    return this.courses.slice();
  }

  getCourse(index: number) {
    return this.courses[index];
  }

  addCourseToMyCourses(course: Course) {
    this.shoppingCoursesService.addCourse(course); 
    console.log('Course added to My Courses:', course);
  }

  addCourse(course: Course) {
    this.courses.push(course);
    this.coursesChanged.next(this.courses.slice());
  }
  
  updateCourse(index: number, newCourse: Course) {
    this.courses[index] = newCourse;
    this.coursesChanged.next(this.courses.slice());
  }
}