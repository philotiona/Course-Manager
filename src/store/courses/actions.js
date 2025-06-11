import { GET_COURSES } from "./types";
import { DELETE_COURSE } from "./types";
import { ADD_COURSE } from "./types";
import { fetchDataGetCourses } from "../../services";

export const getCourses = () => {
    return async (dispatch) => {
        try {
            const courses = await fetchDataGetCourses();
            console.log("Data: ", courses)
            dispatch({
                type: GET_COURSES,
                payload: courses
            });
        } catch(error) {
            console.error(`Failed to fetch: ${error}`)
        }
    }
}
export const deleteCourse = (courseId) => ({
    type: DELETE_COURSE,
    payload: courseId

})
export const addCourse = (course) => ({
    type: ADD_COURSE,
    payload: course
})