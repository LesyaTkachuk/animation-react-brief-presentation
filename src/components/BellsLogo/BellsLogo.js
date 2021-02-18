import React from "react";
import BellsTeam from "../BellsTeam/BellsTeam";
import styles from "./BellsLogo.module.css";
import { CSSTransition } from "react-transition-group";
import "../animation/fade.css";

function BellsLogo({ stage }) {
  return (
    <>
      <h1 className={styles.logo}>ДЗВІНОЧКИ</h1>
      <CSSTransition
        in={stage === "entered"}
        classNames="fadeAndSlide"
        timeout={1000}
        unmountOnExit
      >
        {(stage) => <BellsTeam stage={stage} />}
      </CSSTransition>
    </>
  );
}

export default BellsLogo;
