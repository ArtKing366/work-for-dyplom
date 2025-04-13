import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CourseItemComponent } from './courses/course-list/course-item/course-item.component';
import { ShoppingCoursesComponent } from './shopping-courses/shopping-courses.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyProfileEditComponent } from './my-profile/my-profile-edit/my-profile-edit.component';
import { ShoppingEditComponent } from './shopping-courses/shopping-edit/shopping-edit.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AboutUsModalComponent } from './about-us/about-us-modal/about-us-modal.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { CourseService } from './courses/course.service';
import { ShoppingCoursesService } from './shopping-courses/shopping-courses.service';
import { MarqueeBannerComponent } from './courses/marquee-banner/marquee-banner.component';
import { AppRoutingModule } from './app-routing.module';
import { CourseStartComponent } from './courses/course-start/course-start.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesComponent,
    CourseListComponent,
    CourseDetailComponent,
    CourseItemComponent,
    ShoppingCoursesComponent,
    MyProfileComponent,
    MyProfileEditComponent,
    ShoppingEditComponent,
    AboutUsComponent,
    AboutUsModalComponent,
    DropdownDirective,
    MarqueeBannerComponent,
    CourseStartComponent,

    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatDialogModule, 
    MatButtonModule, 
    MatInputModule,  
    MatFormFieldModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync(),
    CourseService,
    ShoppingCoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
