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

const appRoutes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', component: CoursesComponent,
    canActivate:[ AuthGuard],
    children: [
    { path: '', component: CourseStartComponent },
    { path: 'new', component: CourseMakeComponent },
    { path: ':id', component: CourseDetailComponent, resolve:[CourseResolverService]  },
    { path: ':id/edit', component: CourseMakeComponent, resolve:[CourseResolverService]   },
  ]},
  { path: 'my-courses', component: ShoppingCoursesComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{


}

