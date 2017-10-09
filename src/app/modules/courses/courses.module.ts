import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { CoursesListComponent } from './courses-list/courses-list.component';
import { AddEditCourseComponent } from './add-edit-course/add-edit-course.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],

  providers: [
  ],


  declarations: [
    CoursesListComponent,
    AddEditCourseComponent
  ],
  exports: [
    CoursesListComponent,
    AddEditCourseComponent
  ]
})
export class CoursesModule {
}
