import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavigationMenu.module.css";

export const NavigationMenu: React.FC = () => {
  return (
    <div className={styles.navigationMenu}>
      <input id="menu-toggle" className={styles.menuToggle} type="checkbox" />
      <label className={styles.menuButtonContainer} htmlFor="menu-toggle">
        <div className={styles.menuButton}></div>
      </label>
      <ul className={styles.menu}>
        <li className={styles.navigationItem}>
          <Link to="/movies">Movies</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/about">About</Link>
        </li>
        <li className={styles.navigationItem}>Three</li>
        <li className={styles.navigationItem}>Four</li>
        <li className={styles.navigationItem}>Five</li>
      </ul>
    </div>
  );
};