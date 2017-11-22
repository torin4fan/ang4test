import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { CoursesListService } from './courses-list.service';
import { AppModel } from '../../../core/models/app.model';
import { CourseModel } from '../../../core/models/course.model';


@Component({
  selector: 'tr-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit, OnDestroy {
  courses$: Observable<AppModel | any>;
  courses: CourseModel[];
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private coursesListService: CoursesListService,
    private store: Store<AppModel>
  ) {

  }

  ngOnInit(): void {
    this.courses$ = this.store.select('courses');
    this.getData();
  }

  private getData(): void {
    this.courses$
      .takeUntil(this.ngUnsubscribe)
      .subscribe(
        response => {
          this.courses = (response.filter.length) ? response.filter : response.courses;
        }
      );
  }

  removeCourse(courseId: number): void {
    const confirmRemove = confirm('This item will be deleted, agree?');

    if (confirmRemove) {
      this.coursesListService.removeCourse(courseId, this.courses);
    }
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
