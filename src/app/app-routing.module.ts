import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoursesComponent } from "./courses/courses.component";
import { ShoppingCoursesComponent } from "./shopping-courses/shopping-courses.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { MyProfileComponent } from "./my-profile/my-profile.component";
import { CourseStartComponent } from "./courses/course-start/course-start.component";
import { CourseDetailComponent } from "./courses/course-detail/course-detail.component";
import { CourseMakeComponent } from "./courses/course-make/course-make.component";
import { CourseResolverService } from "./courses/course-resolver.service";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";
import { MyProfileEditComponent } from "./my-profile/my-profile-edit/my-profile-edit.component";
import { TeacherGuard } from './auth/teacher.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', component: CoursesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: CourseStartComponent },
      { path: 'new', component: CourseMakeComponent, canActivate: [TeacherGuard] }, 
      { path: ':id', component: CourseDetailComponent, resolve: [CourseResolverService] },
      { path: ':id/edit', component: CourseMakeComponent, resolve: [CourseResolverService], canActivate: [TeacherGuard] },
    ]
  },
  { path: 'my-courses', component: ShoppingCoursesComponent, canActivate: [AuthGuard] },
  { path: 'about-us', component: AboutUsComponent },
  { 
    path: 'my-profile', 
    canActivate: [AuthGuard],
    children: [
      { path: '', component: MyProfileComponent },
      { path: 'edit', component: MyProfileEditComponent }
    ]
  },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}