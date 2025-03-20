import { Component } from '@angular/core';
import { Course } from '../course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  courses: Course[] = [
    new Course('Cybersecurity', 'Our new free course', 'https://content.kaspersky-labs.com/fm/press-releases/2c/2cc4b249c97217b0eb5b803320febb80/processed/cyber-security-article-q75.jpg'),
    new Course('Debbuging', 'free course for the best', 'https://ichef.bbci.co.uk/images/ic/976xn/p0cgdvxh.png')
];




}
