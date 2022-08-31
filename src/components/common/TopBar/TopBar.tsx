import React from "react";
import { HEADER } from "./TopBar.consts";

import styles from "./TopBar.module.css";

export const TopBar: React.FC = () => {
  return (
    <div className={styles.topBar}>
      <h1>{HEADER}</h1>
    </div>
  );
};
