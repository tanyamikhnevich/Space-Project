import React from "react";

import { Wrapper } from "../../widgets/default-navbar/wrapper";
import { SpacesBlock } from "./space-block/space-block";
import { useAppSelector } from "features/hooks/use-app-dispatch";
import {
  additionalSpaces as additionalSpacesCreator,
  recentSpaces as recentSpacesCreator,
  yourSpaces as yourSpacesCreator,
} from "../../store/spaces/action-creators";

import styles from "./spaces.module.scss";

export const Spaces = () => {
  const { yourSpaces } = useAppSelector((state) => state.yourSpaces);
  const { recentSpaces } = useAppSelector((state) => state.recentSpaces);
  const { additionalSpaces } = useAppSelector(
    (state) => state.additionalSpaces
  );

  const blocks = [
    {
      title: "Recent spaces",
      spaces: recentSpaces,
      spacesDispatch: recentSpacesCreator,
    },
    {
      title: "Your spaces",
      spaces: yourSpaces,
      spacesDispatch: yourSpacesCreator,
    },
    {
      title: "Additional spaces",
      spaces: additionalSpaces,
      spacesDispatch: additionalSpacesCreator,
    },
  ];

  return (
    <Wrapper>
      <section className={styles.container}>
        {blocks.map((block, index) => (
          <SpacesBlock
            key={index}
            title={block.title}
            spaces={block.spaces}
            spacesDispatch={block.spacesDispatch}
          />
        ))}
      </section>
    </Wrapper>
  );
};
