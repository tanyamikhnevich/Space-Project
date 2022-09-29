import React, { ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./wrapper.module.scss";
import classNames from "classnames";
import { ReactComponent as Plus } from "../../shared/assets/plus.svg";
import { usePopup } from "../../features/popup/use-popup";

interface Props {
  children: ReactNode;
}

export const Wrapper = ({ children }: Props) => {
  const { openPopup } = usePopup();
  const getQuery = useLocation();
  const links = [
    { path: "/", title: "My space" },
    { path: "/search", title: "Search spaces" },
    { path: "/profile", title: "My profile" },
  ];

  return (
    <nav className={styles.background}>
      <div className={styles.container}>
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={classNames(
              getQuery.pathname === link.path && styles.linkActive,
              styles.link
            )}
          >
            {link.title}
          </NavLink>
        ))}
        <button onClick={() => openPopup(<div>hello</div>)}>add</button>
        <button
          className={styles.buttonContainer}
          onClick={() => openPopup(<div>hello</div>)}
        >
          <div className={styles.button}>Create space</div>
          <div className={styles.plus}>
            <Plus />
          </div>
        </button>
      </div>
      <main className={styles.main}>{children}</main>
    </nav>
  );
};
