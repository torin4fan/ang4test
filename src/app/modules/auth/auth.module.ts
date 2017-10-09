import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],

  providers: [],

  declarations: [
    LoginPageComponent
  ],
  exports: [
    LoginPageComponent
  ]
})
export class AuthModule {
}
