import { LOGIN_USER, LOGOUT_USER } from "./types";
import { logoutUserService } from "../../services";

export const fetchCurrentUser = () => async (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) return;
    try {
        const response = await fetch("http://localhost:4000/users/me", {
            headers: {
                "Authorization": token,
                "Accept": "*/*"
            }
        });
        const data = await response.json();
        console.log("Raw /users/me data:", data); 
        if (response.ok && data.result) {
            dispatch({
                type: LOGIN_USER,
                payload: {
                    name: data.result.name,
                    email: data.result.email,
                    token: token,
                    role: data.result.role
                }
            });
        }
    } catch (error) {
        console.error("Failed to fetch current user:", error);
    }
};

export const logoutUserThunk = () => async (dispatch, getState) => {
    const token = getState().user.token;
    await logoutUserService(token);
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    dispatch({ type: LOGOUT_USER });
};