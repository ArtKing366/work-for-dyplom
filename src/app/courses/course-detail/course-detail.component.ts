import { Component, Input } from '@angular/core';
import { Course } from '../course.model';
import { CourseService } from '../course.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent {
  course: Course;
  id: number;


  constructor(private courseService: CourseService,
    private route: ActivatedRoute,
  ) {}
  
  ngOnInit(){
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.course = this.courseService.getCourse(this.id);
      }
    );
  }

  onAddToMyCourses() {
    console.log('Adding course to My Courses:', this.course);
    this.courseService.addCourseToMyCourses(this.course);
  }
}