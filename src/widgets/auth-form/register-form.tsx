import React from "react";
import * as Yup from "yup";
import { Field, Form, Formik, FormikHelpers } from "formik";

import classNames from "classnames";
import styles from "./auth-form.module.scss";
import { useActions } from "../../features/hooks";

const DisplayingErrorMessages = Yup.object().shape({
  email: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  username: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

interface ValuesReg {
  email: string;
  password: string;
  username: string;
}

export const RegisterForm = () => {
  const { register: actionRegister } = useActions();

  const register = (
    values: ValuesReg,
    { setSubmitting }: FormikHelpers<ValuesReg>
  ) => {
    actionRegister(values);
    setSubmitting(false);
  };

  const initialValuesReg = {
    email: "",
    password: "",
    username: "",
  };

  return (
    <Formik
      initialValues={initialValuesReg}
      onSubmit={register}
      validationSchema={DisplayingErrorMessages}
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <h2 className={styles.title}>Sign up</h2>
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

          <Field
            id="username"
            name="username"
            placeholder="Username"
            className={classNames(styles.password, styles.email)}
          />

          {touched.username && errors.username && <div>{errors.username}</div>}

          <button className={classNames(styles.button)} type="submit">
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};
