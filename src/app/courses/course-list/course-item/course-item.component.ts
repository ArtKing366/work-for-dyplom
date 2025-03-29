import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../course.model';
import { CourseService } from '../../course.service';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.css'
})
export class CourseItemComponent {

  @Input() course: Course;


  constructor(private courseService: CourseService){}

  ngOnInit(){}


  onSelected(){
    this.courseService.courseSelected.emit(this.course);
  }


}
