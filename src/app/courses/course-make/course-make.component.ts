import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-course-make',
  templateUrl: './course-make.component.html',
  styleUrl: './course-make.component.css'
})
export class CourseMakeComponent {


  id: number;
  editMode = false;
  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
      }
    );
  }

}
