import { GET_AUTHORS, ADD_AUTHORS } from "./types";

const initialState = [];

export default function authorsFetchReducer(state = initialState, action) {
    switch(action.type) {
        case GET_AUTHORS:
            return action.payload; 
        case ADD_AUTHORS:
            return [...state, action.payload];
        default:
            return state;
    }
}