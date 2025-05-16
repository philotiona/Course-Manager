import { combineReducers } from "@reduxjs/toolkit";
import coursesFetchReducer from "./courses/reducer";
import authorsFetchReducer from "./authors/reducer";
import userReducer from "./user/reducer";

const rootReducer = combineReducers({
    courses: coursesFetchReducer,
    authors: authorsFetchReducer,
    user: userReducer
})
export default rootReducer