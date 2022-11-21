import React, { ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import { usePopup } from "../../features/popup";
import { SpaceFormCreate } from "../space-form/space-form-create";
import { ReactComponent as Plus } from "../../shared/assets/plus.svg";

import classNames from "classnames";
import styles from "./wrapper.module.scss";

interface Props {
  children: ReactNode;
}

export const Wrapper = ({ children }: Props) => {
  const { openPopup } = usePopup();
  const getQuery = useLocation();
  const links = [
    { path: "/spaces", title: "My space" },
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
        <motion.button
          className={styles.buttonContainer}
          onClick={() => openPopup(<SpaceFormCreate />)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className={styles.button}>Create space</div>
          <div className={styles.plus}>
            <Plus />
          </div>
        </motion.button>
      </div>
      <main className={styles.main}>{children}</main>
    </nav>
  );
};
