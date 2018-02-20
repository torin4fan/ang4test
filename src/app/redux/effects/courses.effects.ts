import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

import * as coursesActions from '../actions/courses.action';
import { CoursesListService } from '../../modules/courses/courses-list/courses-list.service';


export type coursesAction = coursesActions.All;

@Injectable()
export class CoursesEffects {
    constructor(
        private actions$: Actions,
        private coursesListService: CoursesListService
    ) {}

    @Effect()
    getCourses$: Observable<coursesAction> = this.actions$
        .ofType(coursesActions.LOAD_COURSES)
        .switchMap(() => this.coursesListService.getCourses())
        .map(allCoursesData => new coursesActions.GetCourses(allCoursesData));

    @Effect()
    removeCourse$: Observable<coursesAction> = this.actions$
        .ofType(coursesActions.REMOVE_COURSE)
        .map((action: coursesActions.RemoveCourse) => action.courseId)
        .switchMap((courseId) => this.coursesListService.removeCourse(courseId))
        .map((removedId) => new coursesActions.DeleteCourse(removedId.value._id));
}

