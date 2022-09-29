import React from "react";
import { ReactComponent as ThreePoints } from "../assets/threePoints.svg";
import { ReactComponent as Lock } from "../assets/lock.svg";
import { ReactComponent as Unlock } from "../assets/unlock.svg";
import styles from "./task-card.module.scss";

interface Props {
  name: string;
  username?: string;
  isPublic: boolean;
  isEditable?: boolean;
}

export const TaskCard = ({
  name,
  username = "",
  isPublic,
  isEditable = false,
}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{name}</h2>
        {isEditable && (
          <div className={styles.threePoints}>
            <ThreePoints />
          </div>
        )}
      </div>
      <div className={styles.lockContainer}>
        {isPublic ? (
          <div className={styles.lock}>
            <Lock />
          </div>
        ) : (
          <div className={styles.lock}>
            <Unlock />
          </div>
        )}
        {username && (
          <div className={styles.nameContainer}>
            <div className={styles.circle} />
            <div className={styles.name}>{username}</div>
          </div>
        )}
      </div>
    </div>
  );
};
