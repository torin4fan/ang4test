import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as CoursesActions from '../../../redux/actions/courses.action';
import { RoutingConstant } from '../../../core/constants/routing.constant';

@Injectable()
export class AddEditCourseService {
    courses$: Observable<any>;

    constructor(private fb: FormBuilder,
                private http: HttpClient,
                private store: Store<any>,
                private router: Router) {
        this.courses$ = this.store.select('data');
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

    addEditCourse(courseValue: any, pageId: string): any {
        const headers = new HttpHeaders()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');

        if (pageId) {
            this.store.dispatch(new CoursesActions.AddCourse(courseValue));
            this.http.put(RoutingConstant.courses + '/' + pageId, JSON.stringify(courseValue), {headers: headers}).subscribe(resp => {
                console.log(resp);
            });
        } else {
            this.store.dispatch(new CoursesActions.EditCourse(courseValue));

            this.http.post(RoutingConstant.courses, JSON.stringify(courseValue), {headers: headers}).subscribe(resp => {
                console.log(resp);
            });
        }

        // this.router.navigate(['/']);
    }
}
