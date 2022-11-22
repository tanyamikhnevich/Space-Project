import React from "react";

import { usePopup } from "../../features/popup";
import { OneSpaceI } from "../../store/spaces/space-slice";
import { SpaceFormEdit } from "../../widgets/space-form/space-form-edit";
import { ReactComponent as Unlock } from "../assets/unlock.svg";
import { ReactComponent as ThreePoints } from "../assets/threePoints.svg";
import { ReactComponent as Lock } from "../assets/lock.svg";

import styles from "./space-card.module.scss";

interface Props {
  name: string;
  username?: string;
  isPublic: boolean;
  isEditable?: boolean;
  space?: OneSpaceI;
}

export const SpaceCard = ({
  name,
  username = "",
  isPublic,
  isEditable = false,
  space,
}: Props) => {
  const { openPopup } = usePopup();
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{name}</h2>
        {isEditable && space && (
          <div
            className={styles.threePoints}
            onClick={() =>
              openPopup(<SpaceFormEdit name={name} space={space} />)
            }
          >
            <ThreePoints />
          </div>
        )}
      </div>
      <div className={styles.lockContainer}>
        {isPublic ? (
          <div className={styles.lock}>
            <Unlock />
          </div>
        ) : (
          <div className={styles.lock}>
            <Lock />
          </div>
        )}
        {username && (
          <div className={styles.nameContainer}>
            <div className={styles.name}>{username}</div>
          </div>
        )}
      </div>
    </div>
  );
};
