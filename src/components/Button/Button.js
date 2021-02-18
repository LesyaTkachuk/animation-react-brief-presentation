import React from "react";
import styles from "./Button.module.css";

const Button = ({ label, onClick = () => null, type = "button" }) => (
  <button className={styles.button} type={type} onClick={onClick}>
    {label}
  </button>
);

export default Button;
