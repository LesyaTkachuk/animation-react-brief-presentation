import React from "react";
import Appbar from "../Appbar/Appbar";
import PropTypes from "prop-types";
import styles from "./Layout.module.scss";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Appbar />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
