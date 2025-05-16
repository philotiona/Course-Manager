import GET_AUTHORS from "./types";
import { ADD_AUTHORS } from "./types";
import { fetchDataGetAuthors } from "../../services";

export const getAuthors = () => {
    return async (dispatch) => {
        try {
            const authors = await fetchDataGetAuthors();
            dispatch({
                type: GET_AUTHORS,
                payload: authors
            });
        } catch(error) {
            console.error(`Failed to fecth: ${error}`);
        }
    }
}

export const addAuthors = (author) => ({
    type: ADD_AUTHORS,
    payload: author
});