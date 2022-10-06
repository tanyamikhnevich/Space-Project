import React from "react";
import { SpaceCard } from "../../shared/space-card/space-card";
import styles from "./my-space.module.scss";
import { useAppSelector } from "../../features/hooks/hooks";

export const MySpace = () => {
  const spaces = useAppSelector((state) => state.spaces.spaces);
  return (
    <section className={styles.container}>
      <div className={styles.taskContainer}>
        <h2 className={styles.title}>Recent spaces</h2>
        <div className={styles.cardContainer}>
          <SpaceCard name="First name of space" isPublic isEditable={false} />
        </div>
      </div>
      <div className={styles.taskContainer}>
        <h2 className={styles.title}>Your spaces</h2>
        <div className={styles.cardContainer}>
          {spaces.map((space) => (
            <SpaceCard
              key={space.space_id}
              name={space.name}
              isPublic={space.is_public}
              isEditable
            />
          ))}
        </div>
      </div>
      <div className={styles.taskContainer}>
        <h2 className={styles.title}>Additional spaces</h2>
        <div className={styles.cardContainer}>
          <SpaceCard
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
