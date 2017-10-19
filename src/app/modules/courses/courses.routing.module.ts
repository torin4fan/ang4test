import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesListComponent } from './courses-list/courses-list.component';
import { AddEditCourseComponent } from './add-edit-course/add-edit-course.component';
import { CoursesLayoutComponent } from './courses-layout/courses-layout.component';
import { AuthGuard } from '../../core/services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: CoursesLayoutComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '',
        component: CoursesListComponent
      },
      {
        path: 'new',
        component: AddEditCourseComponent
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class CoursesRoutingModule {
}
