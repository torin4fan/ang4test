import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorShowComponent } from './components/error-show/error-show.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { AuthGuard } from './services/auth-guard.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StorageService } from './services/storage.service';



@NgModule({
  imports: [
    CommonModule,
  ],

  providers: [
    AuthGuard,
    StorageService
  ],

  declarations: [
    ErrorShowComponent,
    FormControlComponent,
    PageNotFoundComponent
  ],
  exports: [
    ErrorShowComponent,
    FormControlComponent
  ]
})
export class CoreModule {
}
