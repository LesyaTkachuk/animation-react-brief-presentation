import React from "react";
import styles from "./Filter.module.scss";

export default function Filter({ value, onChangeFilter }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChangeFilter(e.target.value)}
        className={styles.input}
        placeholder="Filter tasks..."
      />
    </div>
  );
}
