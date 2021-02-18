import React from "react";
import { Switch, Route } from "react-router-dom";
import Section from "../../Section/Section";
import SubNavigation from "../../animation/SubNavigation/SubNavigation";
import CommentsView from "../Bells";
import Tasker from "../../animation/views/Tasker";
import Swiper from "../../animation/views/Swiper";
import routes from "../../../routes";
import { CSSTransition } from "react-transition-group";
import "./Animation.css";

function Animation(props) {
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames="Section-anim"
      unmountOnExit
    >
      {(stage) => {
        console.log(stage);
        return (
          <Section title="Animation in React">
            <CSSTransition
              in={stage === "entered"}
              timeout={500}
              classNames="SubNavigation-anim"
              unmountOnExit
            >
              <SubNavigation />
            </CSSTransition>

            <Route
              path={`${props.match.path}${routes.comments}`}
              component={CommentsView}
            />
            <Route
              path={`${props.match.path}${routes.swipper}`}
              component={Swiper}
            />
            <Route
              path={`${props.match.path}${routes.tasker}`}
              component={Tasker}
            />
          </Section>
        );
      }}
    </CSSTransition>
  );
}

export default Animation;
