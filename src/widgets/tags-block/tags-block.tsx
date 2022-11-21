import React, { useState } from "react";

import { Tag, AddTag } from "./../index";

import styles from "./tags-block.module.scss";

export const TagsBlock = () => {
  const [tag, setTag] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const addTag = () => {
    setTags((prevState) => [...prevState, tag]);
    setTag("");
  };

  const removeTag = (tag: string) => {
    setTags((prevState) => prevState.filter((item) => item !== tag));
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Tags</h2>
      <div className={styles.addTag}>
        <input
          className={styles.addTagInput}
          placeholder="Tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
        <AddTag handlerClick={addTag} />
      </div>
      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <Tag tag={tag} key={index} handlerClick={() => removeTag(tag)} />
        ))}
      </div>
    </div>
  );
};
