import * as CoursesActions from '../actions/courses.action';
import { CoursesModel } from '../../core/models/courses.model';

const defaultState: CoursesModel = {
    data: [],
    filter: []
};


const newState = (state, newData) => {
    return Object.assign({}, state, newData);
};

export function coursesReducer(state = defaultState, action) {
    switch (action.type) {
        case CoursesActions.GET_COURSES:
            return {
                ...state,
                data: action.courses
            };

        case CoursesActions.DELETE_COURSE:
            return {
                ...state,
                data: state.data.filter(item => item._id !== action.idCourse),
                filter: state.filter.filter(item => item._id !== action.idCourse)
            };

        case CoursesActions.FILTER_COURSE:
            return newState(state, {filter: action.filteredCourses});

        /*case CoursesAction.FILTER_COURSE:
		  return newState(state, {filter: action.filterCourses});

		case CoursesAction.DELETE_COURSE:
		  return newState(state, {courses: action.courses});

		case CoursesAction.ADD_COURSE:
		  return {
			...state,
			courses: state.courses.concat(action.course)
		  };
	*/
        /*case CoursesAction.EDIT_COURSE:
		  return {
			...state,
			courses: state.courses.map(todo => todo.id === action.course.id ?
			  action.course :
			  todo
			)
		  };*/

        default:
            return state;
    }
}


