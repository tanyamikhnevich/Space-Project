import React from "react";
import { Wrapper } from "../../widgets/default-navbar/wrapper";
import styles from "./profile.module.scss";
import { useAppDispatch, useAppSelector } from "../../features/hooks/hooks";
import { logout } from "../../store/auth/auth-slice";

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
          <button className={styles.logOut}>Change password</button>
          <button className={styles.logOut}>Change nickname</button>
          <button className={styles.logOut} onClick={() => dispatch(logout())}>
            Log out
          </button>
        </div>
      </section>
    </Wrapper>
  );
};
