import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorShowComponent } from './components/error-show/error-show.component';
import { FormControlComponent } from './components/form-control/form-control.component';



@NgModule({
  imports: [
    CommonModule,
  ],

  providers: [],

  declarations: [
    ErrorShowComponent,
    FormControlComponent
  ],
  exports: [
    ErrorShowComponent,
    FormControlComponent
  ]
})
export class CoreModule {
}
