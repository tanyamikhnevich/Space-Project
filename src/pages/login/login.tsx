import React from "react";
import styles from "./login.module.scss";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../features/hooks/hooks";
import { LoginForm } from "../../widgets/auth-form/login-form";

export const Login = () => {
  const { isLoading, error } = useAppSelector((state) => state.auth);
  return (
    <section className={styles.background}>
      <div className={styles.container}>
        {isLoading && <div>Loading ... </div>}
        {error && <div>{error}</div>}
        <LoginForm />
        <NavLink className={styles.registration} to="/registration">
          No account
        </NavLink>
      </div>
    </section>
  );
};
