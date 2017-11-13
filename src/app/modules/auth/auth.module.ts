import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginPageComponent } from './login-page/login-page.component';

import { LoginPageService } from './login-page/login-page.service';
import { CoreModule } from '../../core/core.module';



@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
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
