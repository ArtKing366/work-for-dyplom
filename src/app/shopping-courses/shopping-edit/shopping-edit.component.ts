import { Component, OnDestroy, ViewChild } from '@angular/core';
import { Section } from '../../shared/section.model';
import { ShoppingCoursesService } from '../shopping-courses.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent implements OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Section;

  constructor(private shoppingCoursesService: ShoppingCoursesService) {}

  ngOnInit() {
    this.subscription = this.shoppingCoursesService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingCoursesService.getSection(index);
        this.slForm.setValue({
          number: this.editedItem.numberOfSection, 
          desc: this.editedItem.descriptions, 
          time: this.editedItem.time
        });
      }
    );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newSection = new Section(value.number, value.desc, value.time);

    this.shoppingCoursesService.addtoShoppingCourses(newSection);

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); 
  }
}
