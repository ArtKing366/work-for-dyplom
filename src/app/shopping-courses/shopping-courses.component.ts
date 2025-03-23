import { Component } from '@angular/core';
import {  Section } from '../shared/section.model';

@Component({
  selector: 'app-shopping-courses',
  templateUrl: './shopping-courses.component.html',
  styleUrls: ['./shopping-courses.component.css'] 
})
export class ShoppingCoursesComponent {

  courses: Section [] = [
    new Section(1,  'Section about array of tasks', 45),
    new Section(2,  'DOM structure', 13),
  ];

  onSectionAdded(course: Section){
    this.courses.push(course);
  }


}
