import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RoutingConstant } from '../../../core/constants/routing.constant';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CoursesListService {

  constructor(
      private http: HttpClient,
    ) {}

  getCourses(): Observable<any> {
      return this.http.get(RoutingConstant.courses);
  }

  removeCourse(courseId: string): Observable<any> {
      return this.http.delete(RoutingConstant.courses + '/' + courseId);
  }

}
