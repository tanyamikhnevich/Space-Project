import React from "react";
import styles from "./authorization.module.scss";
import { Login } from "../login/login";

export const Authorization = () => {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Login />
      </div>
    </div>
  );
};
