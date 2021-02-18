import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import Layout from "./Layout/Layout";
import Home from "./views/Home";
import Swipper from "./views/Swipper/Swipper";
import Bells from "./views/Bells";
import Tasker from "./views/Tasker";
import routes from "../routes";

import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class App extends Component {
  showNotif = (message) => {
    toast.dark(`🦄 ${message}`);
  };

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.swipper} component={Swipper} />
          <Route path={routes.tasker} component={Tasker} />
          <Route path={routes.bells} component={Bells} />
          <Redirect to={routes.home} />
        </Switch>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          newestOnTop={false}
          closeOnClick
          pauseOnHover
        />
      </Layout>
    );
  }
}

export default App;
