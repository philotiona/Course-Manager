import CourseCard from "./components/CourseCard/CourseCard";
import style from "./Courses.module.css";
import Button from "../../common/Button/Button";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCourses } from "../../store/courses/actions";
import EmptyCourseList from "../EmptyCourseList/EmptyCourseList";

export default function Courses({ onCourseClick }) {
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses);

  useEffect(() => {
    if (!courses || courses.length === 0) {
      dispatch(getCourses());
    }
  }, [dispatch, courses]);

  console.log('Current courses:', courses); 

  const handleAddCourse = () => {
    navigate("/courses/add");
  }

  if (!courses || courses.length === 0) {
    return <EmptyCourseList />;
  }

  return (
    <div className={style.main}>
      <div className={style.top}>
        <form className={style.form} onSubmit={e => e.preventDefault()}>
          <input type="text" placeholder="Input text" className={style.input}/>
          <Button text="SEARCH" className="w180" type="button"/>
        </form>
        <Button text="ADD NEW COURSE" className="w180" type="button" onClick={handleAddCourse}/>
      </div>
      <CourseCard courses={courses} onCourseClick={onCourseClick} />
    </div>
  );
}
Courses.propTypes = {
  onCourseClick: PropTypes.func.isRequired
};