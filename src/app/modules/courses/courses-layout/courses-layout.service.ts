import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CoursesLayoutService {

  public _data: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {
  }

  filterCoursesData(data: string) {
    this._data.next(data);
  }

}
