import React from "react";
import { CSSTransition } from "react-transition-group";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import styles from "./NavigationBar.module.scss";

function SubNavigation(props) {
  return (
    <ul className={styles.list}>
      <li className={styles.list_item}>
        <NavLink
          to={routes.home}
          exact
          className={styles.list_link}
          activeClassName={styles.list_activeLink}
        >
          Home
        </NavLink>
      </li>
      <li className={styles.list_item}>
        <NavLink
          to={routes.swipper}
          className={styles.list_link}
          activeClassName={styles.list_activeLink}
        >
          Swipper
        </NavLink>
      </li>
      <li className={styles.list_item}>
        <NavLink
          to={routes.tasker}
          exact
          className={styles.list_link}
          activeClassName={styles.list_activeLink}
        >
          Tasker
        </NavLink>
      </li>
      <li className={styles.list_item}>
        <NavLink
          to={routes.bells}
          exact
          className={styles.list_link}
          activeClassName={styles.list_activeLink}
        >
          Bells
        </NavLink>
      </li>
    </ul>
  );
}

export default SubNavigation;
