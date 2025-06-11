import { LOGIN_USER, LOGOUT_USER } from "./types";
const initialState = {
    isAuth: false,
    name: "",
    email:"",
    token: localStorage.getItem("token"),
    role: "",
}
export default function userReducer(state=initialState, action) {
    switch(action.type){
        case LOGIN_USER:
            return {
            ...state,
            isAuth: true,
            name: action.payload.name,
            email: action.payload.email,
            token: action.payload.token,
            role: action.payload.role, 
        };
        case LOGOUT_USER:
            return {
        ...state,
        isAuth: false,
        name: "",
        email: "",
        token: "",
      };
      default:
        return state
    }
}