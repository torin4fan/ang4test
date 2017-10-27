import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';

import { AppModel } from '../../../models/app.model';
import * as CoursesActions from '../../../actions/courses.action';
import { CourseModel } from '../../../models/course.model';

@Component({
  selector: 'tr-courses-filter',
  templateUrl: './courses-filter.component.html',
  styleUrls: ['./courses-filter.component.scss']
})
export class CoursesFilterComponent implements OnInit, OnDestroy {
  searchInput: string;
  courses$: Store<any>;
  filterResult: CourseModel[] | any;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private store: Store<AppModel>) { }

  ngOnInit() {
  }

  filterCourses(): void {
    this.courses$ = this.store.select('courses');
    this.courses$
      .takeUntil(this.ngUnsubscribe)
      .subscribe(
      response => {
         this.filterResult = response.courses.filter(item => {
           return !!this.searchInput
             ? item.name.indexOf(this.searchInput) !== -1
             : '';
         });
      }
    );

    this.store.dispatch(new CoursesActions.FilterCourse(this.filterResult));
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
