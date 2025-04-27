import styles from "./EmptyCourseList.module.css" 
import Button from "../../common/Button/Button"
import { useNavigate } from "react-router-dom"

export default function EmptyCourseList() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/courses/add")
    }
    return (
    <> 
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>YourList Is Empty</h1>
                <p>Please use 'Add New Course' button to add your first course</p>
                <Button text = "ADD NEW COURSE" className="w180" onClick={handleClick}/>
            </div>
        </div>
    </>
    )  
}