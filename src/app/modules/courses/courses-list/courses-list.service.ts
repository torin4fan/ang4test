import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { HttpService } from '../../../core/services/http.service';

@Injectable()
export class CoursesListService {

  constructor(private httpService: HttpService) {
  }

  getCourses(): Observable<any> {
    return this.httpService.get('http://localhost:3000/courses');
  }

}
