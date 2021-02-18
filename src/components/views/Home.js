import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Button from "../Button/Button";
import Section from "../Section/Section";
import "../animation/fadeImg.css";

function ComponentFunc() {
  const [showPicture, setShowPicture] = useState(false);

  const toggleButton = () => setShowPicture((showPicture) => !showPicture);

  return (
    <Section>
      <Button
        label={showPicture ? "Hide picture" : "Show picture"}
        onClick={toggleButton}
      />
      <CSSTransition
        in={showPicture}
        classNames="fadeImg"
        timeout={600}
        unmountOnExit
      >
        <img
          src="https://sad-fasad.com.ua/wp-content/uploads/2018/12/dzvinochki-kviti-opis-vidi-i-viroshhuvannja_1.jpg"
          alt="bells"
        />
      </CSSTransition>
    </Section>
  );
}

export default ComponentFunc;
