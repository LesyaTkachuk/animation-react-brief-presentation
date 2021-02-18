import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import styles from "./Appbar.module.scss";

function Appbar() {
  return (
    <header className={styles.header}>
      <NavigationBar />
    </header>
  );
}

export default Appbar;
