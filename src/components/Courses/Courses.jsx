import CourseCard from "./components/CourseCard/CourseCard";
import style from "./Courses.module.css";
import Button from "../../common/Button/Button";

export default function Courses({ courses, onCourseClick }) {
  return (
    <div className={style.main}>
      <div className={style.top}>
        <form className={style.form} onSubmit={e => e.preventDefault()}>
          <input type="text" placeholder="Input text" className={style.input} />
          <Button text="SEARCH" className="w180" type="button" />
        </form>
        <Button text="ADD NEW COURSE" className="w180" type="button" />
      </div>
      <CourseCard courses={courses} onCourseClick={onCourseClick} />
    </div>
  );
}