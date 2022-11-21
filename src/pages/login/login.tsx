import React from "react";
import { NavLink } from "react-router-dom";

import { useAppSelector } from "features/hooks/use-app-dispatch";
import { LoginForm } from "widgets/auth-form/login-form";

import styles from "./login.module.scss";
import { Loading } from "widgets/loading/loading";

export const Login = () => {
  const { isLoading, error } = useAppSelector((state) => state.auth);
  return (
    <section className={styles.background}>
      <div className={styles.container}>
        {isLoading && <Loading />}
        {error && <div>{error}</div>}
        {!isLoading && <LoginForm />}
        {!isLoading && (
          <NavLink className={styles.registration} to="/registration">
            No account
          </NavLink>
        )}
      </div>
    </section>
  );
};
