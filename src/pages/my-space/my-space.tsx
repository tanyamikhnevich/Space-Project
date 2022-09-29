import React from "react";
import { TaskCard } from "../../shared/task-card/task-card";
import styles from "./my-space.module.scss";

export const MySpace = () => {
  return (
    <section className={styles.container}>
      <div className={styles.taskContainer}>
        <h2 className={styles.title}>Recent spaces</h2>
        <div className={styles.cardContainer}>
          <TaskCard
            name="First name of space"
            username="Svetlana"
            isPublic
            isEditable={false}
          />
        </div>
      </div>
      <div className={styles.taskContainer}>
        <h2 className={styles.title}>Your spaces</h2>
        <div className={styles.cardContainer}>
          <TaskCard name="First name of space" isPublic isEditable />
        </div>
      </div>
      <div className={styles.taskContainer}>
        <h2 className={styles.title}>Additional spaces</h2>
        <div className={styles.cardContainer}>
          <TaskCard
            name="First name of space"
            username="Tatyana"
            isPublic
            isEditable={false}
          />
        </div>
      </div>
    </section>
  );
};
