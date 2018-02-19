import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { CourseModel } from '../../../core/models/course.model';
import { AppModel } from '../../../core/models/app.model';
import * as CoursesActions from '../../../redux/actions/courses.action';
import { RoutingConstant } from '../../../core/constants/routing.constant';

@Injectable()
export class AddEditCourseService {
    courses$: Observable<AppModel | any>;

    constructor(private fb: FormBuilder,
                private http: HttpClient,
                private store: Store<AppModel>,
                private router: Router) {
        this.courses$ = this.store.select('courses');
    }

    createForm(): FormGroup {
        return this.fb.group({
            title: ['', Validators.required],
            description: ['', Validators.required],
            date: ['', Validators.required],
            duration: ['', Validators.required],
            authors: ['', Validators.required]
        });
    }

    getCourse(id: string): Observable<any> {
        return this.http.get(RoutingConstant.courses + '/' + id);
    }

    addEditCourse(courseValue: CourseModel, pageId: string): any {
        const headers = new HttpHeaders()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');

        if (pageId) {
            this.store.dispatch(new CoursesActions.AddCourse(courseValue));
        } else {
            this.store.dispatch(new CoursesActions.EditCourse(courseValue));

            this.http.post(RoutingConstant.courses, JSON.stringify(courseValue), {headers: headers}).subscribe(resp => {
                console.log(resp);
            });
        }

        // this.router.navigate(['/']);
    }
}
