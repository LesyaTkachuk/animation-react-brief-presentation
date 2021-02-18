import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";
import styles from "./Navigation.module.scss";

function Navigation() {
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
          to={routes.blog}
          className={styles.list_link}
          activeClassName={styles.list_activeLink}
        >
          Blog
        </NavLink>
      </li>
      <li className={styles.list_item}>
        <NavLink
          to={routes.animation}
          exact
          className={styles.list_link}
          activeClassName={styles.list_activeLink}
        >
          Animation
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
