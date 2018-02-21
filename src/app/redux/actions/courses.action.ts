import { Action } from '@ngrx/store';
import { CoursesModel } from '../../core/models/courses.model';


export const LOAD_COURSES = '[SERVER] Load courses';
export const REMOVE_COURSE = '[SERVER] Remove course';
export const CREATE_COURSE = '[SERVER] Create course';

export const GET_COURSES = 'Get courses';
export const UPDATE_COURSE = 'Update course';
export const DELETE_COURSE = 'Delete course';
export const FILTER_COURSE = 'Filter course';


export class LoadCourses implements Action {
    readonly type = LOAD_COURSES;
}

export class RemoveCourse implements Action {
    readonly type = REMOVE_COURSE;
    constructor(public courseId?: string) {}
}

export class CreateCourse implements Action {
    readonly type = CREATE_COURSE;
    constructor(public newCourse?: CoursesModel) {}
}

export class GetCourses implements Action {
    readonly type = GET_COURSES;
    constructor(public courses?: any) {}
}

export class UpdateCourse implements Action {
    readonly type = UPDATE_COURSE;
    constructor(
        public course: CoursesModel,
        public id: string
    ) {}
}

export class DeleteCourse implements Action {
    readonly type = DELETE_COURSE;
    constructor(public idCourse: string) {}
}

export class FilterCourse implements Action {
    readonly type = FILTER_COURSE;
    constructor(public filteredCourses?: any) {}
}


export type All
    = GetCourses
    | RemoveCourse
    | FilterCourse
    | CreateCourse
    | LoadCourses
    | UpdateCourse
    | DeleteCourse;
