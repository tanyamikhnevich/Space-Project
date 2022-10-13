import React, { useEffect } from "react";
import { SpaceCard } from "../../shared/space-card/space-card";
import styles from "./my-space.module.scss";
import { useAppDispatch, useAppSelector } from "../../features/hooks/hooks";
import { yourSpaces } from "../../store/spaces/action-creators";

export const MySpace = () => {
  const yoursSpaces = useAppSelector((state) => state.spaces.yourSpaces);
  const { additionalSpaces, error, isLoading } = useAppSelector(
    (state) => state.spaces
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(yourSpaces());
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.taskContainer}>
        <h2 className={styles.title}>Recent spaces</h2>
        <div className={styles.cardContainer}>
          {isLoading && <div>Loading..</div>}
          {error && <div>{error}</div>}
          {additionalSpaces.map((space) => (
            <SpaceCard
              key={space.id}
              name={space.name}
              isPublic={space.isPublic}
              isEditable={false}
              username={space.username}
            />
          ))}
        </div>
      </div>
      <div className={styles.taskContainer}>
        <h2 className={styles.title}>Your spaces</h2>
        <div className={styles.cardContainer}>
          {yoursSpaces.map((space) => (
            <SpaceCard
              key={space.id}
              name={space.name}
              isPublic={space.isPublic}
              isEditable
            />
          ))}
        </div>
      </div>
      <div className={styles.taskContainer}>
        <h2 className={styles.title}>Additional spaces</h2>
        <div className={styles.cardContainer}>
          <SpaceCard
            name="First name of space"
            username="Tatyana"
            isPublic
            isEditable={false}
          />
        </div>
      </div>
    </section>
  );
};
