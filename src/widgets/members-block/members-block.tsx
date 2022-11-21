import React from "react";

import { Member } from "./member/member";

import styles from "./members-block.module.scss";

export const MembersBlock = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Members</h2>
      <Member email="sveta@mail.ru" username="Svetlana" />
      <Member email="sveta@mail.ru" username="Svetlana" />
    </div>
  );
};
