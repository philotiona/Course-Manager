import styles from "./EmptyCourseList.module.css";
import Button from "../../common/Button/Button";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function EmptyCourseList() {
    const navigate = useNavigate();
    const userRole = useSelector(state => state.user.role);

    const handleClick = () => {
        navigate("/courses/add");
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>Your List Is Empty</h1>
                {userRole === "admin" ? (
                    <>
                        <p>Please use 'Add New Course' button to add your first course</p>
                        <Button text="ADD NEW COURSE" className="w180" onClick={handleClick} />
                    </>
                ) : (
                    <p>You don't have permissions to create a course. Please log in as ADMIN.</p>
                )}
            </div>
        </div>
    );
}