import React, { useEffect } from "react";
import { AsyncThunkAction } from "@reduxjs/toolkit";
import { motion } from "framer-motion";

import { SpaceCard } from "../../../shared/space-card/space-card";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../features/hooks/use-app-dispatch";
import {
  additionalSpaces,
  recentSpaces,
  yourSpaces,
  YourSpacesResponse,
} from "../../../store/spaces/action-creators";
import { OneSpaceI } from "../../../store/spaces/space-slice";
import { Loading } from "../../../widgets/loading/loading";

import styles from "./space-block.module.scss";

interface Props {
  title: string;
  spaces: OneSpaceI[];
  spacesDispatch: any;
}

export const SpacesBlock = ({ title, spaces, spacesDispatch }: Props) => {
  const { error, isLoading } = useAppSelector((state) => state.yourSpaces);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(yourSpaces());
    dispatch(recentSpaces());
    dispatch(additionalSpaces());
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
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardContainer}>
        {isLoading && <Loading />}
        {error && <div>{error}</div>}
        {title === "Your spaces"
          ? spaces.map((space) => (
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
            ))
          : spaces.map((space) => (
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
