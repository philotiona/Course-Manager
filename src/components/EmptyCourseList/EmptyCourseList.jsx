import styles from "./EmptyCourseList.module.css" 
import Button from "../../common/Button/Button"

export default function EmptyCourseList() {
     return (<>
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>YourList Is Empty</h1>
                <p>Please use 'Add New Course' button to add your first course</p>
                <Button text = "ADD NEW COURSE" className="w180"/>
            </div>
        </div>
    </>
     )  
}