import React from "react";
import styles from "./registration.module.scss";
import * as Yup from "yup";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { NavLink } from "react-router-dom";

const DisplayingErrorMessages = Yup.object().shape({
  email: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});
interface Values {
  email: string;
}
//todo : уточнить нужна ли регистрация
export const Registration = () => {
  const register = (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    setSubmitting(false);
  };

  const initialValues = {
    email: "",
  };
  return (
    <Formik
      initialValues={initialValues}
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

          <button className={styles.button} type="submit">
            Continue
          </button>
          <NavLink className={styles.registration} to="/auth">
            I have an account
          </NavLink>
        </Form>
      )}
    </Formik>
  );
};
