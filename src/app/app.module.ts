import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CoursesModule } from './modules/courses/courses.module';
import { AuthModule } from './modules/auth/auth.module';
import { AppRoutingModule } from './app.routing.module';
import { coursesReducer } from './redux/reducers/courses.reducer';
import { CoursesEffects } from './redux/effects/courses.effects';
import { AppComponent } from './app.component';

const reducersConfig = {
    courses: coursesReducer
};

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        HttpClientModule,
        BrowserModule,
        FormsModule,
        StoreModule.forRoot(reducersConfig),
        EffectsModule.forRoot([CoursesEffects]),
        StoreDevtoolsModule.instrument(),
        AppRoutingModule,
        AuthModule,
        CoursesModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
