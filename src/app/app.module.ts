import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { coursesReducer } from './reducers/courses.reducer';

import { AppComponent } from './app.component';

import { CoursesModule } from './modules/courses/courses.module';
import { AuthModule } from './modules/auth/auth.module';
import { AppRoutingModule } from './app.routing.module';





@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AuthModule,
    CoursesModule,
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({
      courses: coursesReducer
    }),
    StoreDevtoolsModule.instrument(),
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
