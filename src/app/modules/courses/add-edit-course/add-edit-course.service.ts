import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { CourseModel } from '../../../models/course.model';
import { AppModel } from '../../../models/app.model';

@Injectable()
export class AddEditCourseService {
  courses$: Observable<AppModel | any>;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private store: Store<AppModel>
  ) {
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

  getCourse(id: number): Observable<any> {
    return this.http.get('http://localhost:3000/courses?id=' + id);
  }

  addEditCourse(courseValue: CourseModel): any {
    this.courses$.subscribe(response => {
      // let replacedCourse = this.courses$.indexOf(courseValue);
      response.courses.forEach((respCourse, i, arr) => {
        console.log(respCourse.id, courseValue);
        if (respCourse.id === courseValue.id) {
          console.log('ss');
          response[i] = courseValue;
        }
      });

      console.log(response.courses);

    });

  }
}
