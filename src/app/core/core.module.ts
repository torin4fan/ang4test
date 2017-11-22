import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { ErrorShowComponent } from './components/error-show/error-show.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { StorageService } from './services/storage.service';
import { AuthGuard } from './services/auth-guard.service';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { RtHttpClient } from './services/rt-http-client.service';



@NgModule({
  imports: [
    CommonModule,
  ],

  providers: [
    AuthGuard,
    StorageService,
    { provide: HttpClient, useClass: RtHttpClient },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    },
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
