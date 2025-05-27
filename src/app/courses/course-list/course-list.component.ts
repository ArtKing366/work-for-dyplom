import { Component } from '@angular/core';
import { Course } from '../course.model';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css',
})
export class CourseListComponent {
  courses: Course[];
  isTeacher = false;

  constructor(
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.courseService.coursesChanged.subscribe(
      (courses: Course[]) => {
        this.courses = courses;
      }
    );
    this.courses = this.courseService.getCourses();

    this.authService.userRole.subscribe(role => {
      this.isTeacher = role === 'teacher';
    });
  }

  onNewCourse() {
    this.router.navigate(['new'], { relativeTo: this.route });   
  }
}
