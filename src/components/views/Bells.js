import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import BellsHeader from "../BellsHeader/BellsHeader";
import "../animation/drop.css";

const Bells = () => (
  <CSSTransition
    in={true}
    appear={true}
    classNames="drop"
    timeout={1000}
    unmountOnExit
  >
    {(stage) => <BellsHeader stage={stage} />}
  </CSSTransition>
);
export default Bells;
