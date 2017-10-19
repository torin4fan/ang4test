import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/services/auth-guard.service';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './modules/auth/login-page/login-page.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { AddEditCourseComponent } from './modules/courses/add-edit-course/add-edit-course.component';
import { CoursesListComponent } from './modules/courses/courses-list/courses-list.component';



const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: './modules/courses/courses.module#CoursesModule'
      },
      {
        path: 'login',
        component: LoginPageComponent
      },
      {
        path: '**',
        component: PageNotFoundComponent,
        pathMatch: 'full'
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
