import React, { Component } from "react";
import styles from "./ComponentClass.module.scss";

class ComponentClass extends Component {
  state = {
    name: "",
  };

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return <div className={styles.container}></div>;
  }
}

export default ComponentClass;
