import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Course } from "./course.model";
import { DataStorageService } from "../shared/data-storage.service";
import { CourseService } from "./course.service";



@Injectable({providedIn:'root'})
export class CourseResolverService implements Resolve<Course[]>{ 

  constructor(private dataStorageService: DataStorageService, private courseService: CourseService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const courses = this.courseService.getCourses();
    if (courses.length === 0) {
      return this.dataStorageService.fetchCourses(); 
    }else{
      return courses;
    }
  }

}

