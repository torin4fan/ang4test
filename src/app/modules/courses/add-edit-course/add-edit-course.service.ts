import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { CourseModel } from '../../../models/course.model';
import { AppModel } from '../../../models/app.model';
import * as CoursesActions from '../../../actions/courses.action';

@Injectable()
export class AddEditCourseService {
  courses$: Observable<AppModel | any>;

  private static idGenerator() {
    const d = new Date();
    return d.getTime();
  }

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private store: Store<AppModel>,
    private router: Router,
  ) {
    this.courses$ = this.store.select('courses');
  }

  createForm(): FormGroup {
    return this.fb.group({
      id: [''],
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

  addEditCourse(courseValue: CourseModel, pageId: number): any {
    if (isNaN(pageId)) {
      courseValue.id = AddEditCourseService.idGenerator();
      this.store.dispatch(new CoursesActions.AddCourse(courseValue));
    } else {
      this.store.dispatch(new CoursesActions.EditCourse(courseValue));
    }

    this.router.navigate(['/']);
  }
}
