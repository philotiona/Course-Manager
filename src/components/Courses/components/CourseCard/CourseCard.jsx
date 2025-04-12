import { mockedAuthorsList, mockedCoursesList } from "../../../../constants";
import formatDuration from "../../../../helpers/formatCreationDate";
import formatDate from "../../../../helpers/getCourseDuration";
import Button from "../../../../common/Button/Button";
import styles from "./CourseCard.module.css";

export default function CourseCard({onCourseClick}) {
  return (
    <div className={styles.container}>
      {mockedCoursesList.map((course) => (
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
                <strong>Duration:</strong> {formatDuration(course.duration)}
              </p>
              <p>
                <strong>Created:</strong> {formatDate(course.creationDate)}
              </p>
            </div>
            <Button text="SHOW COURSE" onClick = {() => onCourseClick(course)} className={styles.button} />
          </div>
        </article>
      ))}
    </div>
  );
}