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

        default:
            return state;
    }
}


