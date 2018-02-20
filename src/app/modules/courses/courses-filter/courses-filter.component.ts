import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/Subject';

import * as CoursesActions from '../../../redux/actions/courses.action';


@Component({
  selector: 'tr-courses-filter',
  templateUrl: './courses-filter.component.html',
  styleUrls: ['./courses-filter.component.scss']
})
export class CoursesFilterComponent implements OnInit, OnDestroy {
  searchInput: string;
  courses$: Store<any>;
  filterResult: any;
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  filterCourses(): void {
    this.courses$ = this.store.select('data');
    this.courses$
      .takeUntil(this.ngUnsubscribe)
      .subscribe(
      response => {
        this.filterResult = response.courses.filter(item => {
          return !!this.searchInput
             ? item.title.indexOf(this.searchInput) !== -1
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
