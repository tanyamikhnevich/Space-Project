import React from "react";
import styles from "./member.module.scss";

interface Props {
  username: string;
  email: string;
}

export const Member = ({ username, email }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>{username}</div>
      <div className={styles.name}>{email}</div>
      <button type="button" className={styles.button}>
        delete
      </button>
      <button type="button" className={styles.button}>
        report
      </button>
    </div>
  );
};
