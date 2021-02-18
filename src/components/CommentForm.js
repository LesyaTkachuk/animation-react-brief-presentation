import React, { Component } from "react";
import withAuthContext from "../hoc/withAuthContext";

class CommentForm extends Component {
  render() {
    return (
      <form>
        <label>
          Name
          <input
            type="text"
            value={this.props.auth.user ? this.props.auth.user.name : "Anonim"}
          />
        </label>
        <br />
        <label>
          Message
          <textarea name="message" cols="30" rows="10" resize="none"></textarea>
        </label>
      </form>
    );
  }
}

export default withAuthContext(CommentForm);
