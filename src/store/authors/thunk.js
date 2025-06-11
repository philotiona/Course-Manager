import { ADD_AUTHORS } from "./types";

export const addAuthorThunk = (authorData) => async (dispatch, getState) => {
    const token = getState().user.token;
    try {
        const response = await fetch("http://localhost:4000/authors/add", {
            method: "POST",
            headers: {
                "Authorization": token,
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify(authorData)
        });
        const data = await response.json();
        if (response.ok && data.result) {
            dispatch({ type: ADD_AUTHORS, payload: data.result });
        }
    } catch (error) {
        console.error("Failed to add author:", error);
    }
};