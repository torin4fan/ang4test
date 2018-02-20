import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './modules/auth/login-page/login-page.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';


const routes: Routes = [
    {
        path: 'courses',
        component: AppComponent,
        children: [
            {
                path: '',
                loadChildren: './modules/courses/courses.module#CoursesModule'
            },
        ]
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
    {path: '', redirectTo: '/courses', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
