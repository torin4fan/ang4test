import { Action } from '@ngrx/store';
import { CourseModel } from '../models/course.model';


export const GET_COURSES = 'Get courses';
export const EDIT_COURSE = 'Edit course';
export const DELETE_COURSE = 'Delete course';
export const ADD_COURSE = 'Add course';
export const FILTER_COURSE = 'Filter course';


export class GetCourses implements Action {
  readonly type = GET_COURSES;

  constructor(public courses: any) {
  }
}

export class EditCourse implements Action {
  readonly type = EDIT_COURSE;

  constructor(public course: CourseModel) {
  }
}

export class DeleteCourse implements Action {
  readonly type = DELETE_COURSE;

  constructor(public courses: CourseModel[]) {
  }
}

export class FilterCourse implements Action {
  readonly type = FILTER_COURSE;

  constructor(public filterCourses: CourseModel) {
  }
}

export class AddCourse implements Action {
  readonly type = ADD_COURSE;

  constructor(public course: CourseModel) {
  }
}

export type All
  = GetCourses
  | EditCourse
  | DeleteCourse
  | FilterCourse
  | AddCourse;
