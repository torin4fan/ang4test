import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {CoursesListComponent} from './modules/courses/courses-list/courses-list.component';
import { LoginPageComponent } from './modules/auth/login-page/login-page.component';
import { AddEditCourseComponent } from './modules/courses/add-edit-course/add-edit-course.component';



const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: CoursesListComponent
      },
      {
        path: 'login',
        component: LoginPageComponent
      },
      {
        path: 'new',
        component: AddEditCourseComponent
      },
      {
        path: 'edit:id',
        component: AddEditCourseComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
