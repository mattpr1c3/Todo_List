import styles from './task.module.css';
import Layer1 from "../../assets/Layer1.svg";
import fullCheckMark from "../../assets/fullCheckMark.svg"

export function Task({ task, onComplete, onDelete }) {
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
                {task.isCompleted ? <img src={fullCheckMark} /> : <div />}
            </button>
            <p className={task.isCompleted ? styles.textCompleted : ""}>{task.title}</p>
            <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
                <img src={Layer1} />
            </button>
        </div>
    )
}