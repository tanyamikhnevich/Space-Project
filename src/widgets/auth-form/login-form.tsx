import React from "react";
import * as Yup from "yup";
import { Field, Form, Formik, FormikHelpers } from "formik";

import classNames from "classnames";
import styles from "./auth-form.module.scss";
import { useActions } from "features/hooks";

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

interface ValuesLog {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const { login: actionLogin } = useActions();

  const login = (
    values: ValuesLog,
    { setSubmitting }: FormikHelpers<ValuesLog>
  ) => {
    actionLogin(values);
    setSubmitting(false);
  };

  const initialValuesLog = {
    email: "",
    password: "",
  };

  return (
    <Formik
      initialValues={initialValuesLog}
      onSubmit={login}
      validationSchema={DisplayingErrorMessages}
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <h2 className={styles.title}>Login</h2>
          <Field
            id="email"
            name="email"
            placeholder="Email"
            className={styles.email}
          />
          {touched.email && errors.email && <div>{errors.email}</div>}

          <Field
            id="password"
            name="password"
            placeholder="Password"
            className={classNames(styles.password, styles.email)}
          />

          {touched.password && errors.password && <div>{errors.password}</div>}

          <button className={classNames(styles.button)} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
