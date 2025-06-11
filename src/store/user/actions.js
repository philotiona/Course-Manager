import { LOGIN_USER, LOGOUT_USER } from "./types";
import { loginFetchUser } from "../../services";

export const loginUser = (userData) => {
    return async(dispatch) => {
        try {
            const data = await loginFetchUser(userData);
            localStorage.setItem("token", data.token);
            localStorage.setItem("userName", data.name); 
            dispatch({
                type: LOGIN_USER,
                payload: {
                    name: data.name, 
                    email: data.email,
                    token: data.token,
                },
            })
        } catch(error) {
            console.error("Error:", error)
        }
    }
}

export const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    return { type: LOGOUT_USER };
};