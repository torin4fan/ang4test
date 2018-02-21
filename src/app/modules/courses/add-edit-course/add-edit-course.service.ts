import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { RoutingConstant } from '../../../core/constants/routing.constant';

@Injectable()
export class AddEditCourseService {

    constructor(
        private fb: FormBuilder,
        private http: HttpClient,
    ) {}

    createForm(): FormGroup {
        return this.fb.group({
            title: ['', Validators.required],
            description: ['', Validators.required],
            date: ['', Validators.required],
            duration: ['', Validators.required],
            authors: ''
        });
    }

    getCourse(id: string): Observable<any> {
        return this.http.get(RoutingConstant.courses + '/' + id);
    }

    addCourse(newCourse): Observable<any> {
        return this.http.post(RoutingConstant.courses, newCourse);
    }

    updateCourse(courseInfo: any): any {
        return this.http.put(RoutingConstant.courses + '/' + courseInfo.id, courseInfo.course);
    }
}
