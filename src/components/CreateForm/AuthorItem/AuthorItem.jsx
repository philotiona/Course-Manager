import add from "../../../assets/add.svg";
import trash from "../../../assets/trash.svg";
import styles from "./AuthorItem.module.css";

export default function AuthorItem({ author, onAdd, onRemove }) {
    return(
        <div className={styles.authorContainer}>
            <p>{author.name}</p>
            {onAdd && (
                <button 
                    className={styles.addBtn}
                    type="button"
                    onClick={() => onAdd(author)}
                >
                    <img className={styles.add} src={add} alt="Add" />
                </button>
            )}
            {onRemove && (
                <button 
                    className={styles.trashBtn}
                    type="button"
                    onClick={() => onRemove(author)}
                >
                    <img className={styles.trash} src={trash} alt="Delete"/>
                </button>
            )}
        </div>
    );
}