import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import Comments from "../animation/Comments/Comments";
import Button from "../Button/Button";
// import styles from "../Comments/Comments.module.css";

class CommentsView extends Component {
  state = {
    showComments: false,
  };

  toggleButton = () => {
    this.setState(({ showComments }) => ({ showComments: !showComments }));
  };

  render() {
    const { showComments } = this.state;
    return (
      <>
        <Button
          label={showComments ? "Hide comments" : "Show comments"}
          onClick={this.toggleButton}
        />
        <CSSTransition
          in={showComments}
          classNames="fade"
          // classNames={styles}
          timeout={300}
          unmountOnExit
        >
          <Comments />
        </CSSTransition>
        {/* {showComments && <Comments />} */}
      </>
    );
  }
}

export default CommentsView;
