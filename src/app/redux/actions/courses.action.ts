import { Action } from '@ngrx/store';
import { CoursesModel } from '../../core/models/courses.model';


export const LOAD_COURSES = '[SERVER] Load courses';
export const REMOVE_COURSE = '[SERVER] Remove course';

export const GET_COURSES = 'Get courses';
export const EDIT_COURSE = 'Edit course';
export const DELETE_COURSE = 'Delete course';
export const ADD_COURSE = 'Add course';
export const FILTER_COURSE = 'Filter course';


export class LoadCourses implements Action {
    readonly type = LOAD_COURSES;
}

export class RemoveCourse implements Action {
    readonly type = REMOVE_COURSE;
    constructor(public courseId?: string) {}
}


export class GetCourses implements Action {
    readonly type = GET_COURSES;
    constructor(public courses?: any) {}
}

export class EditCourse implements Action {
    readonly type = EDIT_COURSE;

    constructor(public course: CoursesModel) {
    }
}

export class DeleteCourse implements Action {
    readonly type = DELETE_COURSE;
    constructor(public idCourse: string) {}
}

export class FilterCourse implements Action {
    readonly type = FILTER_COURSE;

    constructor(public filterCourses: CoursesModel) {
    }
}

export class AddCourse implements Action {
    readonly type = ADD_COURSE;

    constructor(public course: CoursesModel) {
    }
}

export type All
    = GetCourses
    | RemoveCourse
    | LoadCourses
    | EditCourse
    | DeleteCourse
    | FilterCourse
    | AddCourse;
