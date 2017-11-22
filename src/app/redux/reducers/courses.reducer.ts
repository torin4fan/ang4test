import * as CoursesAction from '../actions/courses.action';
import { AppModel } from '../../core/models/app.model';

export type Action = CoursesAction.All;

// Default app state
const defaultState: AppModel = {
  courses: [],
  filter: []
};

// Helper function to create new state object
const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

export function coursesReducer(state: AppModel = defaultState, action: Action) {
  switch (action.type) {
    case CoursesAction.GET_COURSES:
      return newState(state, {courses: action.courses});

    case CoursesAction.FILTER_COURSE:
      return newState(state, {filter: action.filterCourses});

    case CoursesAction.DELETE_COURSE:
      return newState(state, {courses: action.courses});

    case CoursesAction.ADD_COURSE:
      return {
        ...state,
        courses: state.courses.concat(action.course)
      };

    case CoursesAction.EDIT_COURSE:
      return {
        ...state,
        courses: state.courses.map(todo => todo.id === action.course.id ?
          action.course :
          todo
        )
      };

    default:
      return state;
  }
}


