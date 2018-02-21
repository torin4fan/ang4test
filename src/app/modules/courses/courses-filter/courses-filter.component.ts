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
    private ngUnsubscribe: Subject<void> = new Subject<void>();

    constructor(
        private store: Store<any>
    ) {}

    ngOnInit() {
    }

    filterCourses(): void {
        let filterResult = [];

        this.store.select('courses')
            .takeUntil(this.ngUnsubscribe)
            .subscribe(
                response => {
                    filterResult = response.data.filter(item => {
                        return !!this.searchInput
                            ? item.title.indexOf(this.searchInput) !== -1
                            : '';
                    });
                }
            );
        this.store.dispatch(new CoursesActions.FilterCourse(filterResult));
    }

    ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

}
