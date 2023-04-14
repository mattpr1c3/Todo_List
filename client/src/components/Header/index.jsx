import todoLogo from "../../assets/todoLogo.svg";
import plus from "../../assets/plus.svg";
import styles from "./header.module.css";
import { useState } from "react";

export function Header({ onAddTask }) {
    const [title, setTitle] = useState('');
    function handleSubmit(event) {
        event.preventDefault();
        onAddTask(title);
        setTitle('');
    }
    function onChangeTitle(event) {
        setTitle(event.target.value)
    }
    return (
    <header className={styles.header}>
      <img src={todoLogo} />
      <form onSubmit={handleSubmit} className={styles.newTaskForm}>
        <input placeholder="add a new task" type="text" value={title} onChange={onChangeTitle}/>
        <button>
        Create
        <img src={plus} />
        </button>
      </form>
    </header>
  );
}
