import React, { Component, createContext } from "react";
import userAPI from "../../services/user-api";

const Context = createContext();

class AuthContext extends Component {
  static Consumer = Context.Consumer;

  logIn = () => {
    userAPI.fetchUser().then((user) => this.setState({ user }));
  };

  logOut = () => {
    this.setState({ user: null });
  };

  state = {
    user: null,
    onLogIn: this.logIn,
    onLogOut: this.logOut,
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default AuthContext;
