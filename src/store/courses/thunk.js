import { ADD_COURSE, DELETE_COURSE, UPDATE_COURSE } from "./types";
import { ADD_AUTHORS } from "../authors/types";

export const deleteCourseThunk = (courseId) => async (dispatch, getState) => {
    const token = getState().user.token;
    try {
        const response = await fetch(`http://localhost:4000/courses/${courseId}`, {
            method: "DELETE",
            headers: {
                "Authorization": token,
                "Accept": "*/*"
            }
        });
        if (response.ok) {
            dispatch({ type: DELETE_COURSE, payload: courseId });
            return true;
        }
        throw new Error("Failed to delete course");
    } catch (error) {
        console.error("Failed to delete course:", error);
        return false;
    }
};

export const addCourseThunk = (courseData) => async (dispatch, getState) => {
    const token = getState().user.token;
    try {
        const response = await fetch("http://localhost:4000/courses/add", {
            method: "POST",
            headers: {
                "Authorization": token,
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify(courseData)
        });
        const data = await response.json();
        if (response.ok && data.result) {
            dispatch({ type: ADD_COURSE, payload: data.result });
        }
    } catch (error) {
        console.error("Failed to add course:", error);
    }
};

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

export const updateCourseThunk = (courseId, courseData) => async (dispatch, getState) => {
    const token = getState().user.token;
    try {
        const response = await fetch(`http://localhost:4000/courses/${courseId}`, {
            method: "PUT",
            headers: {
                "Authorization": token,
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify(courseData)
        });
        const data = await response.json();
        if (response.ok && data.result) {
            dispatch({ type: UPDATE_COURSE, payload: data.result });
        }
    } catch (error) {
        console.error("Failed to update course:", error);
    }
};