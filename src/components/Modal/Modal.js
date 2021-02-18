import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    console.log(e);
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className="Backdrop">
        <div className="Modal">{this.props.children}</div>
      </div>
    );
  }
}
export default Modal;
