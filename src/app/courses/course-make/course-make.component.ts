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
  sectionFiles: File[] = [];

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

  onSectionFileChange(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.sectionFiles[index] = input.files[0];
    }
  }

  async onSubmit() {
    const formValue = this.courseForm.value;

    // Преобразуем секции
    for (let i = 0; i < formValue.sections.length; i++) {
      if (this.sectionFiles[i]) {
        formValue.sections[i].fileName = this.sectionFiles[i].name;
        formValue.sections[i].fileData = await this.fileToBase64(this.sectionFiles[i]);
      }
      // Исправление: копируем number -> numberOfSection
      formValue.sections[i].numberOfSection = formValue.sections[i].number;
    }

    if (this.editMode) {
      this.courseService.updateCourse(this.id, formValue);
    } else {
      this.courseService.addCourse(formValue);
    }
    this.onCancel();
  }

  fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  }

  onAddSection() {
    (<FormArray>this.courseForm.get('sections')).push(
      new FormGroup({
        number: new FormControl(null, Validators.required),
        descriptions: new FormControl(null, Validators.required), // <-- исправлено
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
              descriptions: new FormControl(section.descriptions, Validators.required), // <-- исправлено
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
