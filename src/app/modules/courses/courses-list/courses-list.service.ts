import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store } from '@ngrx/store';

import * as CoursesActions from '../../../redux/actions/courses.action';
import { AppModel } from '../../../core/models/app.model';
import { CourseModel } from '../../../core/models/course.model';
import { RoutingConstant } from '../../../core/constants/routing.constant';


@Injectable()
export class CoursesListService {

  constructor(private http: HttpClient,
              private store: Store<AppModel>) {
  }

  getCourses(): void {
    this.http.get(RoutingConstant.courses).subscribe(
      (response) => {
        this.store.dispatch(new CoursesActions.GetCourses(response));
      }
    );
  }

  removeCourse(courseId: number, courses: CourseModel[]): void {
    const truncatedCourses: CourseModel[] = courses.filter(response => response.id !== courseId);
    this.store.dispatch(new CoursesActions.DeleteCourse(truncatedCourses));

      this.http.delete(RoutingConstant.courses + '/' + courseId).subscribe(
          (response) => {
              if (response.ok) {
                  location.reload();
              }
          }
      );
  }

}
