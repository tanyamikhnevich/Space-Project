import React from "react";
import styles from "./registration.module.scss";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../features/hooks/hooks";
import { RegisterForm } from "../../widgets/auth-form/register-form";

export const Registration = () => {
  const { isLoading, error, message } = useAppSelector(
    (state) => state.register
  );
  return (
    <section className={styles.background}>
      <div className={styles.container}>
        {isLoading && <div>Loading ... </div>}
        {error && <div>{error}</div>}
        {message && <div>{message}</div>}
        <RegisterForm />
        <NavLink className={styles.registration} to="/login">
          I have an account
        </NavLink>
      </div>
    </section>
  );
};
