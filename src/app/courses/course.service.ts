import { EventEmitter } from "@angular/core";
import { Course } from "./course.model";
import { Section } from "../shared/section.model";

export class CourseService {
  courseSelected = new EventEmitter<Course>();

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

  getCourses() {
    return this.courses.slice();
  }
}
