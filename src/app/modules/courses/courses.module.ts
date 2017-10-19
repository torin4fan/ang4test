import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoursesListComponent } from './courses-list/courses-list.component';
import { AddEditCourseComponent } from './add-edit-course/add-edit-course.component';
import { CoursesRoutingModule } from './courses.routing.module';
import { CoursesLayoutComponent } from './courses-layout/courses-layout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoursesRoutingModule
  ],

  providers: [],

  declarations: [
    CoursesLayoutComponent,
    CoursesListComponent,
    AddEditCourseComponent
  ],
})
export class CoursesModule {
}
