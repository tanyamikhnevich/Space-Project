import React from "react";

import styles from "./tag.module.scss";

interface Props {
  tag: string;
  handlerClick?: () => void;
}
export const Tag = ({ tag, handlerClick }: Props) => {
  return (
    <button type="button" className={styles.tag} onClick={handlerClick}>
      {tag}
      <div className={styles.cross} />
    </button>
  );
};
