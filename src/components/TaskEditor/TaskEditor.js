import React, { Component } from "react";
import styles from "./TaskEditor.module.scss";
export default class TaskEditor extends Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ text: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onAddTask(this.state.text);

    this.setState({ text: "" });
  };

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <label>
          <input
            type="text"
            value={text}
            onChange={this.handleChange}
            className={styles.input}
            placeholder="Add some task..."
          />
        </label>
        <button type="submit">Сохранить заметку</button>
      </form>
    );
  }
}
