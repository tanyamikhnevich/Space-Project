import React, { useEffect } from "react";
import { motion } from "framer-motion";

import { SpaceCard } from "shared/space-card/space-card";

import styles from "./space-block.module.scss";
import { useActions, useAppSelector } from "features/hooks";

export const SpacesBlock = () => {
  const { getYourSpaces, getRecentSpaces, getAdditionalSpaces } = useActions();
  const { yourSpaces } = useAppSelector((state) => state.yourSpaces);
  const { recentSpaces } = useAppSelector((state) => state.recentSpaces);
  const { additionalSpaces } = useAppSelector(
    (state) => state.additionalSpaces
  );

  useEffect(() => {
    getYourSpaces();
    getRecentSpaces();
    getAdditionalSpaces();
  }, []);

  const motionsCard = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: (i: any) => ({ opacity: 1, transition: { delay: i * 0.2 }, y: 0 }),
  };
  return (
    <div className={styles.taskContainer}>
      <h2 className={styles.title}>Recent spaces</h2>
      <div className={styles.cardContainer}>
        {recentSpaces.map((space) => (
          <motion.div
            initial={"hidden"}
            animate={"visible"}
            variants={motionsCard}
            custom={space.id}
            key={space.id}
          >
            <SpaceCard
              name={space.name}
              isPublic={space.isPublic}
              isEditable={false}
              username={space.username}
            />
          </motion.div>
        ))}
      </div>
      <h2 className={styles.title}>Your spaces</h2>
      <div className={styles.cardContainer}>
        {yourSpaces.map((space) => (
          <motion.div
            initial={"hidden"}
            animate={"visible"}
            variants={motionsCard}
            custom={space.id}
            key={space.id}
          >
            <SpaceCard
              name={space.name}
              isPublic={space.isPublic}
              isEditable={true}
              space={space}
            />
          </motion.div>
        ))}
      </div>
      <h2 className={styles.title}>Additional spaces</h2>
      <div className={styles.cardContainer}>
        {additionalSpaces.map((space) => (
          <motion.div
            initial={"hidden"}
            animate={"visible"}
            variants={motionsCard}
            custom={space.id}
            key={space.id}
          >
            <SpaceCard
              name={space.name}
              isPublic={space.isPublic}
              isEditable={false}
              username={space.username}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
