import trash2 from "../../../../assets/trash2.svg"
import edit from "../../../../assets/edit.svg"
import styles from "./CourseCard.module.css";
import Button from "../../../../common/Button/Button";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCourseThunk } from "../../../../store/courses/thunk";
import { getAuthors } from "../../../../store/authors/actions";
import { getCourses } from "../../../../store/courses/actions";
import { useEffect } from "react";

export default function CourseCard({ courses, onCourseClick }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
        await dispatch(deleteCourseThunk(id));
        dispatch(getCourses());
    } catch (error) {
        console.error("Failed to delete course:", error);
    }
  };

  const userRole = useSelector(state => state.user.role);
  const authors = useSelector(state => state.authors);

  useEffect(() => {
    dispatch(getAuthors());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {courses.map((course) => (
        <article key={course.id} className={styles.articles}>
          <div>
            <h3 className={styles.title}>{course.title}</h3>
            <p className={styles.description}>{course.description}</p>
          </div>
          <div className={styles.side}>
            <div className={styles.list}>
              <p>
                <strong>Authors: </strong>
                <span className={styles.authorsList}>
                  {course.authors
                    .map((authorId) =>
                      authors.find((a) => a.id === authorId)?.name
                    )
                    .join(", ")}
                </span>
              </p>
              <p>
                <strong>Duration:</strong> {course.duration} min
              </p>
              <p>
                <strong>Created:</strong> {course.creationDate}
              </p>
            </div>
            <div className={styles.btn_wrapper}>
              <Button
                text="SHOW COURSE"
                className="w180"
                onClick={() => onCourseClick(course)}
              />
              {userRole === "admin" && (
                <>
                  <button className={styles.trashedit}>
                    <img src={trash2} alt="trash" onClick={() => handleDelete(course.id)} />
                  </button>
                  <button className={styles.trashedit} onClick={() => navigate(`/courses/update/${course.id}`)}>
                    <img src={edit} alt="edit" />
                  </button>
                </>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

CourseCard.propTypes = {
  courses: PropTypes.array.isRequired, 
  onCourseClick: PropTypes.func.isRequired
};