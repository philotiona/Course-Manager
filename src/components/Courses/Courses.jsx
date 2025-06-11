import CourseCard from "./components/CourseCard/CourseCard";
import EmptyCourseList from "../EmptyCourseList/EmptyCourseList";
import style from "./Courses.module.css";
import Button from "../../common/Button/Button";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCourses } from "../../store/courses/actions";

export default function Courses({ onCourseClick }) {
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses);
  const userRole = useSelector(state => state.user.role);

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  const handleAddCourse = () => {
    navigate("/courses/add");
  };

  return (
    <div className={style.main}>
      <div className={style.top}>
        <form className={style.form} onSubmit={e => e.preventDefault()}>
          <input type="text" placeholder="Input text" className={style.input}/>
          <Button text="SEARCH" className="w180" type="button"/>
        </form>
        {userRole === "admin" && (
          <Button text="ADD NEW COURSE" className="w180" type="button" onClick={handleAddCourse}/>
        )}
      </div>
      {(!courses || courses.length === 0) ? (
        <EmptyCourseList />
      ) : (
        <CourseCard courses={courses} onCourseClick={onCourseClick} />
      )}
    </div>
  );
}
Courses.propTypes = {
  onCourseClick: PropTypes.func.isRequired
};