import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CourseService } from '../course.service';
import { Course } from '../course.model';

@Component({
  selector: 'app-course-make',
  templateUrl: './course-make.component.html',
  styleUrls: ['./course-make.component.css'],
})
export class CourseMakeComponent {
  id: number;
  editMode = false;
  courseForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  get controls() {
    return (<FormArray>this.courseForm.get('sections')).controls;
  }

  onSubmit() {
  

    if (this.editMode) {
      this.courseService.updateCourse(this.id, this.courseForm.value);
    }else {
      this.courseService.addCourse(this.courseForm.value);
    }

    this.onCancel();
  }

  onAddSection() {
    (<FormArray>this.courseForm.get('sections')).push(
      new FormGroup({
        number: new FormControl(null, Validators.required),
        desc: new FormControl(null, Validators.required),
        time: new FormControl(null, Validators.required),
      })
    );
  }

  onDeleteSection(index: number) {
    (<FormArray>this.courseForm.get('sections')).removeAt(index);
  }

  private initForm() {
    let courseName = '';
    let courseImagePath = '';
    let courseDescription = '';
    let courseSections = new FormArray([]);

    if (this.editMode) {
      const course = this.courseService.getCourse(this.id);
      courseName = course.name;
      courseImagePath = course.imagePath;
      courseDescription = course.description;

      if (course['sections']) {
        for (let section of course.sections) {
          courseSections.push(
            new FormGroup({
              number: new FormControl(
                section.numberOfSection,
                Validators.required
              ),
              desc: new FormControl(section.descriptions, Validators.required),
              time: new FormControl(section.time, Validators.required),
            })
          );
        }
      }
    }

    this.courseForm = new FormGroup({
      name: new FormControl(courseName, Validators.required),
      imagePath: new FormControl(courseImagePath, Validators.required),
      description: new FormControl(courseDescription, Validators.required),
      sections: courseSections,
    });
  }

  onCancel(){
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
