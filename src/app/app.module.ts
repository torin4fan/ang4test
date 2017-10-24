import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { simpleReducer } from './_reducers/simple.reduser';
import { postReducer } from './_reducers/post.reducer';

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
    StoreModule.forRoot({
      post: postReducer,
      message: simpleReducer
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
