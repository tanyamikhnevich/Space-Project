import React from "react";

import { Wrapper } from "../../widgets/default-navbar/wrapper";
import { SpacesBlock } from "./space-block/space-block";

import styles from "./spaces.module.scss";

export const Spaces = () => {
  return (
    <Wrapper>
      <section className={styles.container}>
        <SpacesBlock />
      </section>
    </Wrapper>
  );
};
