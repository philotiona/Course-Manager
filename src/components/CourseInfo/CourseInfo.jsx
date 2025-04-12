import Button from "../../common/Button/Button";
import styles from "./CourseInfo.module.css";
import { mockedAuthorsList } from "../../constants";

export default function CourseInfo({ course, onBack }) {
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <h1>{course.title}</h1>
        <article className={styles.cardInner}>
          <div className={styles.description}>
            <h3>Description:</h3>
            <p className={styles.content}>{course.description}</p>
          </div>
          <div className={styles.vertLine}></div>
          <div className={styles.data}>
            <p>
              <span className={styles.dataParam}>ID:</span> {course.id}
            </p>
            <p>
              <span className={styles.dataParam}>Duration:</span>{" "}
              {course.duration} minutes
            </p>
            <p>
              <span className={styles.dataParam}>Created:</span>{" "}
              {course.creationDate}
            </p>
            <p>
              <span className={styles.dataParam}>Authors:</span>{" "}
              {course.authors.map((authorId) =>
              mockedAuthorsList.find((a) => a.id === authorId)?.name
              ).join(", ")}
            </p>
          </div>
        </article>
      </div>
      <div className={styles.btn}>
        <Button text="BACK" onClick={onBack} />


     </div>
    </div>
  );
}