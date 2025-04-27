import { mockedAuthorsList } from "../../../../constants";
import styles from "./CourseCard.module.css";
import Button from "../../../../common/Button/Button";
import PropTypes from "prop-types";

export default function CourseCard({ courses, onCourseClick }) {
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
                      mockedAuthorsList.find((a) => a.id === authorId)?.name
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
            <Button
              text="SHOW COURSE"
              className="w180"
              onClick={() => onCourseClick(course)}
            />
          </div>
        </article>
      ))}
    </div>
  );
}
CourseCard.propTypes = {
  courses: PropTypes.array.isRequired, 
  onCourseClick: PropTypes.func.isRequired
}