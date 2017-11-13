import { Injectable } from '@angular/core';

import * as CoursesActions from '../../../actions/courses.action';
import { HttpService } from '../../../core/services/http.service';
import { Store } from '@ngrx/store';
import { AppModel } from '../../../models/app.model';
import { CourseModel } from '../../../models/course.model';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
export class CoursesListService {

  constructor(private http: HttpClient,
              private store: Store<AppModel>) {
  }

  getCourses(): void {
    this.http.get('http://localhost:3000/courses').subscribe(
      (response) => {
        this.store.dispatch(new CoursesActions.GetCourses(response));
      }
    );
  }

  removeCourse(courseId: number, courses: CourseModel[]): void {
    const truncatedCourses: CourseModel[] = courses.filter(response => response.id !== courseId);
    this.store.dispatch(new CoursesActions.DeleteCourse(truncatedCourses));
  }

}
