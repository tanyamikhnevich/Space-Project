import React from "react";
import { Wrapper } from "../../widgets/default-navbar/wrapper";
import { SpaceCard } from "../../shared/space-card/space-card";
import styles from "./search-space.module.scss";
import { Tag } from "../../widgets/tags/tag";
import { AddTag } from "../../widgets/tags/add-tag";

export const SearchSpace = () => {
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
          <SpaceCard name={"csdevsdf"} isPublic={true} username={"tgttttt"} />
          <SpaceCard name={"gbfdgb gf"} isPublic={true} username={"asef"} />
          <SpaceCard
            name={"gfb dfgb"}
            isPublic={true}
            username={"tgtttsesevgtt"}
          />
          <SpaceCard name={"dgbdgb"} isPublic={true} username={"tgttttservt"} />
          <SpaceCard
            name={"csdedbgsebsvsdf"}
            isPublic={true}
            username={"serverv"}
          />
          <SpaceCard
            name={"tfgbtbsertbrt"}
            isPublic={true}
            username={"servgre"}
          />
          <SpaceCard name={"btebebe"} isPublic={true} username={"aegregse"} />
          <SpaceCard
            name={"rwbtwbwtb"}
            isPublic={true}
            username={"serggervg"}
          />
          <SpaceCard name={"btebebe"} isPublic={true} username={"aegregse"} />
          <SpaceCard name={"btebebe"} isPublic={true} username={"aegregse"} />
          <SpaceCard name={"btebebe"} isPublic={true} username={"aegregse"} />
          <SpaceCard name={"btebebe"} isPublic={true} username={"aegregse"} />
          <SpaceCard name={"btebebe"} isPublic={true} username={"aegregse"} />
        </div>
      </section>
    </Wrapper>
  );
};
