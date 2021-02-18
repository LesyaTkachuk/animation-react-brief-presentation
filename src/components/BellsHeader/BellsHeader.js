import React from "react";
import { CSSTransition } from "react-transition-group";
import BellsTeam from "../BellsTeam/BellsTeam";
import BellsLogo from "../BellsLogo/BellsLogo";
import styles from "./BellsHeader.module.scss";
import "../animation/fade.css";
import "../animation/dropAndFade.css";

function BellsHeader({ stage }) {
  return (
    <div className={styles.container}>
      <CSSTransition
        in={stage === "entered"}
        classNames="fade"
        timeout={1000}
        unmountOnExit
      >
        <BellsLogo />
      </CSSTransition>
      {/* <CSSTransition
        in={stage === "entered"}
        classNames="dropAndFade"
        timeout={1000}
        unmountOnExit
      >
        <BellsTeam />
      </CSSTransition> */}
    </div>
  );
}

export default BellsHeader;
