import React from "react";
import styles from "./tag.module.scss";

interface Props {
  tag: string;
}
export const Tag = ({ tag }: Props) => {
  return (
    <button type="button" className={styles.tag}>
      {tag}
      <div className={styles.cross} />
    </button>
  );
};
