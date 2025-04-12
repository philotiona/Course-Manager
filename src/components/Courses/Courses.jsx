import CourseCard from "./components/CourseCard/CourseCard";
import style from "./Courses.module.css";
import Button from "../../common/Button/Button";

export default function Courses({onCourseClick}) {
  return (
    <div className={style.main}>
      <div className={style.top}>
        <form className={style.form}>
          <input type="text" placeholder="Input text" className={style.input} />
          <Button text="SEARCH" />
        </form>
        <Button text="ADD NEW COURSE" />
      </div>
      <CourseCard onCourseClick={onCourseClick}/>
    </div>
  );
}