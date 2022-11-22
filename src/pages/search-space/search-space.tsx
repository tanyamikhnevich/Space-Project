import React, { useEffect } from "react";

import { Wrapper } from "widgets/default-navbar/wrapper";
import { SpaceCard } from "shared/space-card/space-card";
import { Tag } from "widgets/tags-block/tags/tag";
import { AddTag } from "widgets/tags-block/tags/add-tag";
import {
  useAppDispatch,
  useAppSelector,
} from "features/hooks/use-app-dispatch";

import styles from "./search-space.module.scss";
import { Loading } from "widgets/loading/loading";
import { useActions } from "features/hooks";

export const SearchSpace = () => {
  const { searchSpaces, isLoading, error } = useAppSelector(
    (state) => state.searchSpaces
  );
  const { getSearchSpaces } = useActions();

  useEffect(() => {
    getSearchSpaces();
  }, []);
  return (
    <Wrapper>
      <section className={styles.container}>
        <div className={styles.search}>
          <input className={styles.input} placeholder="Search" />
          <div className={styles.tags}>
            <Tag tag={"tag"} />
            <Tag tag={"tag2"} />
            <AddTag />
          </div>
        </div>
        <div className={styles.spaces}>
          {isLoading && <Loading />}
          {error && <div>{error}</div>}
          {searchSpaces.map((space) => (
            <SpaceCard
              key={space.space_id}
              name={space.name}
              isPublic={true}
              username={space.username}
            />
          ))}
        </div>
      </section>
    </Wrapper>
  );
};
