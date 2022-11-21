import React from "react";
import { NavLink } from "react-router-dom";

import { useAppSelector } from "features/hooks/use-app-dispatch";
import { RegisterForm } from "../../widgets/auth-form/register-form";

import styles from "./registration.module.scss";
import { Loading } from "../../widgets/loading/loading";

export const Registration = () => {
  const { isLoading, error, message } = useAppSelector(
    (state) => state.register
  );
  return (
    <section className={styles.background}>
      <div className={styles.container}>
        {isLoading && <Loading />}
        {error && <div>{error}</div>}
        {message && <div>{message}</div>}
        {!isLoading && <RegisterForm />}
        {!isLoading && (
          <NavLink className={styles.registration} to="/login">
            I have an account
          </NavLink>
        )}
      </div>
    </section>
  );
};
