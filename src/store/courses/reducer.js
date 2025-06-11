import { ADD_COURSE, GET_COURSES } from "./types";
import { DELETE_COURSE } from "./types";
import { UPDATE_COURSE } from "./types";

const initialState = [];

export default function coursesFetchReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COURSES:
            return action.payload
        case DELETE_COURSE:
            return state.filter(course => course.id !== action.payload);
        case ADD_COURSE:
            return [...state, action.payload]
        case UPDATE_COURSE:
            return state.map(course => 
                course.id === action.payload.id ? action.payload : course
            );
        default:
            return state;
    }
}
