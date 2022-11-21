import React, { Dispatch } from "react";

import styles from "./types-block.module.scss";
import classNames from "classnames";

interface Props {
  isPublic: boolean;
  setIsPublic: Dispatch<boolean>;
}
export const TypesBlock = ({ isPublic, setIsPublic }: Props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Type</h2>
      <div className={styles.type}>
        <button
          type="button"
          className={classNames(
            styles.button,
            !isPublic && styles.buttonActive
          )}
          onClick={() => setIsPublic(false)}
        >
          Private
        </button>
        <button
          type="button"
          className={classNames(styles.button, isPublic && styles.buttonActive)}
          onClick={() => setIsPublic(true)}
        >
          Public
        </button>
      </div>
    </div>
  );
};
