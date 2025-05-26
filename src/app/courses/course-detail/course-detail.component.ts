import { Component, Input } from '@angular/core';
import { Course } from '../course.model';
import { CourseService } from '../course.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataStorageService } from '../../shared/data-storage.service'; 

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent {
  course: Course;
  id: number;

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router,
    private dataStorageService: DataStorageService
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
    this.courseService.addCourseToMyCourses(this.course); 
    this.dataStorageService.storeMyCourses();
    this.router.navigate(['/my-courses']);
  }

  onCnacelCourses(){}

  onDeleteCourse(){
    this.courseService.deleteCourse(this.id);
    this.router.navigate(['/courses']);
  }
}