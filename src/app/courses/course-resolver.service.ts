import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Course } from "./course.model";
import { DataStorageService } from "../shared/data-storage.service";


@Injectable({ providedIn: 'root' })
export class CoursesResolverService implements Resolve<Course[]>{
  

  constructor(private coursestorageService: DataStorageService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.coursestorageService.fetchCourses();
  }

}
