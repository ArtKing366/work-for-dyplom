import { EventEmitter } from "@angular/core";
import { Course } from "../courses/course.model";
import { Section } from "../shared/section.model";

export class ShoppingCoursesService{

  sectionChanged = new EventEmitter<Section[]>();

   private sections: Section [] = [
      new Section(1,  'Section about array of tasks', 45),
      new Section(2,  'DOM structure', 13),
    ];


    getShoppingCourses(){
      return this.sections.slice();
    }

    addtoShoppingCourses(section: Section){
      this.sections.push(section);
      this.sectionChanged.emit(this.sections.slice());
    }

}

