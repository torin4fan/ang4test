import { Component, OnInit, OnDestroy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { CoursesListService } from './courses-list.service';
import { LoadCourses, RemoveCourse } from '../../../redux/actions/courses.action';
import { CoursesModel } from '../../../core/models/courses.model';


@Component({
    selector: 'tr-courses-list',
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit, OnDestroy {
    courses$: Observable<CoursesModel>;
    private ngUnsubscribe: Subject<void> = new Subject<void>();

    constructor(
        private coursesListService: CoursesListService,
        private store: Store<any>
    ) {
        this.courses$ = this.store.select('courses')
            .map(items => (items.filter.length) ? items.filter : items.data);
    }

    ngOnInit(): void {
        this.store.dispatch(new LoadCourses());
    }

    removeCourse(courseId: string): void {
        const confirmRemove = confirm('This item will be deleted, agree?');

        if (confirmRemove) {
            this.store.dispatch(new RemoveCourse(courseId));
        }
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
