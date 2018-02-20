import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoursesListComponent } from './courses-list/courses-list.component';
import { AddEditCourseComponent } from './add-edit-course/add-edit-course.component';
import { CoursesRoutingModule } from './courses.routing.module';
import { CoursesLayoutComponent } from './courses-layout/courses-layout.component';
import { CoursesListService } from './courses-list/courses-list.service';

import { FilterPipe } from '../../core/pipes/filter.pipe';
import { CoursesFilterComponent } from './courses-filter/courses-filter.component';
import { CoreModule } from '../../core/core.module';
import { AddEditCourseService } from './add-edit-course/add-edit-course.service';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule,
        CoursesRoutingModule
    ],

    providers: [
        CoursesListService,
        AddEditCourseService
    ],

    declarations: [
        CoursesLayoutComponent,
        CoursesListComponent,
        AddEditCourseComponent,
        CoursesFilterComponent,
        BreadcrumbComponent,
        FilterPipe
    ],
})
export class CoursesModule {
}
