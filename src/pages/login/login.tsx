import React, { Dispatch, useState } from "react";
import styles from "./login.module.scss";
import * as Yup from "yup";
import { Field, Form, Formik, FormikHelpers } from "formik";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

const DisplayingErrorMessages = Yup.object().shape({
  email: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});
interface Values {
  email: string;
  password: string;
}

export const Login = () => {
  const [isAuth, setIsAuth] = useState(true);
  const login = (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
    setSubmitting(false);
  };

  const initialValues = {
    email: "",
    password: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={login}
      validationSchema={DisplayingErrorMessages}
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <h2 className={styles.title}>{isAuth ? "Login" : "Sign up"}</h2>
          <Field
            id="email"
            name="email"
            placeholder="Email"
            className={styles.email}
          />
          {touched.email && errors.email && <div>{errors.email}</div>}
          {isAuth && (
            <Field
              id="password"
              name="password"
              placeholder="Password"
              className={classNames(styles.password, styles.email)}
            />
          )}
          {isAuth && touched.password && errors.password && (
            <div>{errors.password}</div>
          )}

          <button
            className={classNames(styles.button, !isAuth && styles.continue)}
            type="submit"
          >
            {isAuth ? "Submit" : "Continue"}
          </button>
          <button
            type="button"
            onClick={() => setIsAuth(!isAuth)}
            className={styles.registration}
          >
            {isAuth ? "No account" : "I have an account"}
          </button>
        </Form>
      )}
    </Formik>
  );
};
