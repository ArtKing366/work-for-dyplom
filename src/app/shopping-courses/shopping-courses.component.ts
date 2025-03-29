import { Component } from '@angular/core';
import { Section } from '../shared/section.model';
import { ShoppingCoursesService } from './shopping-courses.service';

@Component({
  selector: 'app-shopping-courses',
  templateUrl: './shopping-courses.component.html',
  styleUrls: ['./shopping-courses.component.css'],
})
export class ShoppingCoursesComponent {
  sections: Section[];

  constructor(private shoppingCoursesService: ShoppingCoursesService) {}

  ngOnInit() {
    this.sections = this.shoppingCoursesService.getShoppingCourses();
    this.shoppingCoursesService.sectionChanged.subscribe(
      (sections: Section[]) => {
        this.sections = sections;
      }
    );
  }
}
