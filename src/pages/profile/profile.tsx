import React from "react";
import { motion } from "framer-motion";

import { Wrapper } from "../../widgets/default-navbar/wrapper";
import {
  useAppDispatch,
  useAppSelector,
} from "features/hooks/use-app-dispatch";
import { logout } from "entites/auth/state/slice";

import styles from "./profile.module.scss";

export const Profile = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <section className={styles.container}>
        {user && (
          <div className={styles.profile}>
            <h2 className={styles.username}>Username: {user.username}</h2>
            <p className={styles.email}>Email: {user.email}</p>
          </div>
        )}
        <div className={styles.settings}>
          <h2 className={styles.username}>Settings</h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={styles.logOut}
          >
            Change password
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={styles.logOut}
          >
            Change nickname
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={styles.logOut}
            onClick={() => dispatch(logout())}
          >
            Log out
          </motion.button>
        </div>
      </section>
    </Wrapper>
  );
};
