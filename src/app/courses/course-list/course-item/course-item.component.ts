import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../course.model';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.css'
})
export class CourseItemComponent {

  @Input() course: Course;
  @Output() courseSelected = new EventEmitter<void>();

  onSelected(){
    this.courseSelected.emit();
  }


}
