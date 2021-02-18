import React from "react";
import styles from "./TaskListItem.module.css";

export default function TaskListItem({ text, completed, onRemove, onUpdate }) {
  return (
    <li className={completed ? `${styles.item} ${styles.done}` : styles.item}>
      <p className={styles.text}>{text}</p>
      <div className={styles.div}>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={onUpdate}
            className={styles.input}
          />
          Completed
        </label>
        <section className={styles.section}>
          <button type="button" onClick={onRemove}>
            Удалить
          </button>
        </section>
      </div>
    </li>
  );
}
