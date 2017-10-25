import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CoursesListComponent } from './courses-list/courses-list.component';
import { AddEditCourseComponent } from './add-edit-course/add-edit-course.component';
import { CoursesRoutingModule } from './courses.routing.module';
import { CoursesLayoutComponent } from './courses-layout/courses-layout.component';
import { CoursesListService } from './courses-list/courses-list.service';
import { CoursesLayoutService } from './courses-layout/courses-layout.service';

import { FilterPipe } from '../../core/pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoursesRoutingModule
  ],

  providers: [
    CoursesListService,
    CoursesLayoutService
  ],

  declarations: [
    CoursesLayoutComponent,
    CoursesListComponent,
    AddEditCourseComponent,
    FilterPipe
  ],
})
export class CoursesModule {
}
