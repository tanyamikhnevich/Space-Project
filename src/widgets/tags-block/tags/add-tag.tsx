import React from "react";

import styles from "./add-tag.module.scss";

interface Props {
  handlerClick?: () => void;
}

export const AddTag = ({ handlerClick }: Props) => {
  return (
    <button type="button" className={styles.button} onClick={handlerClick}>
      Add Tag
    </button>
  );
};
