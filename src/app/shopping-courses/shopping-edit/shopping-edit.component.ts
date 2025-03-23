import { Component, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Section } from '../../shared/section.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {

  @ViewChild('descInput') descInputRef: ElementRef;
  @ViewChild('timeInput') timeInputRef: ElementRef;
  @ViewChild('numberInput') numberInputRef: ElementRef;

  @Output() sectionAdded = new EventEmitter<Section>();

  onAddItem() {
    const secDesc = this.descInputRef.nativeElement.value;
    const secTime = this.timeInputRef.nativeElement.value;
    const secNumber = this.numberInputRef.nativeElement.value;

    const newSection = new Section(secNumber, secDesc, secTime);
    this.sectionAdded.emit(newSection);
  }
}
