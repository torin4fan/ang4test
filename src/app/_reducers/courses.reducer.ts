import * as CoursesAction from '../actions/courses.action';

import { StorageModel } from '../models/storage.model';
import { AppModel } from '../models/app.model';

export type Action = CoursesAction.All;

// Default app state
const defaultState: AppModel = {
  courses: []
};

// Helper function to create new state object
const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

export function coursesReducer(state: AppModel = defaultState, action: Action) {
  console.log(action.type, state, 'courses');

  switch (action.type) {
    case CoursesAction.GET_COURSES:
      return newState(state, {courses: action.courses});
    /*case PostActions.EDIT_TEXT:
      return newState(state, {text: action.payload});

    case PostActions.UPVOTE:
      return newState(state, {likes: state.likes + 1});

    case PostActions.DOWNVOTE:
      return newState(state, {likes: state.likes - 1});

    case PostActions.RESET:
      return defaultState;
*/
    default:
      return state;
  }
}


