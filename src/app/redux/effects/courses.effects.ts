import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

import * as coursesActions from '../actions/courses.action';
import { CoursesListService } from '../../modules/courses/courses-list/courses-list.service';
import { AddEditCourseService } from '../../modules/courses/add-edit-course/add-edit-course.service';


export type coursesAction = coursesActions.All;

@Injectable()
export class CoursesEffects {
    constructor(
        private actions$: Actions,
        private router: Router,
        private coursesListService: CoursesListService,
        private addEditCourseService: AddEditCourseService,
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

    @Effect({dispatch: false})
    createCourse$: Observable<coursesAction> = this.actions$
        .ofType(coursesActions.CREATE_COURSE)
        .map((action: coursesActions.CreateCourse) => action.newCourse)
        .switchMap((newCourse) => this.addEditCourseService.addCourse(newCourse))
        .do(() => this.router.navigate(['/']));

    @Effect({dispatch: false})
    updateCourses$: Observable<any> = this.actions$
        .ofType(coursesActions.UPDATE_COURSE)
        .switchMap((course) => this.addEditCourseService.updateCourse(course))
        .do(() => this.router.navigate(['/']));
}

