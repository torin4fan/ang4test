import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginPageComponent } from './login-page/login-page.component';

import { LoginPageService } from './login-page/login-page.service';



@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  providers: [LoginPageService],

  declarations: [
    LoginPageComponent
  ],
  exports: [
    LoginPageComponent
  ]
})
export class AuthModule {
}
