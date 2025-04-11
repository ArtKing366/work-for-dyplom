import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoursesComponent } from "./courses/courses.component";
import { ShoppingCoursesComponent } from "./shopping-courses/shopping-courses.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { MyProfileComponent } from "./my-profile/my-profile.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', component: CoursesComponent },
  { path: 'my-courses', component: ShoppingCoursesComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'my-profile', component: MyProfileComponent },
];

@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{


}

