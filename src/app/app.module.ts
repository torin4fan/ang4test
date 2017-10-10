import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { simpleReducer } from './_reducers/simple.reduser';
import { postReducer } from './_reducers/post.reducer';

import { AppComponent } from './app.component';

import { CoursesModule } from './modules/courses/courses.module';
import { AuthModule } from './modules/auth/auth.module';
import { AppRoutingModule } from './app.routing.module';
import { ErrorShowComponent } from './core/components/error-show/error-show.component';
import { FormControlComponent } from './core/components/form-control/form-control.component';



@NgModule({
  declarations: [
    AppComponent,
    ErrorShowComponent,
    FormControlComponent,
  ],
  imports: [
    AuthModule,
    CoursesModule,
    BrowserModule,
    StoreModule.forRoot({
      post: postReducer,
      message: simpleReducer
    }),
    StoreDevtoolsModule.instrument(),
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
