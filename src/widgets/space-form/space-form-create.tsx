import React, { useState } from "react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import { usePopup } from "../../features/popup";
import { useAppDispatch } from "features/hooks/use-app-dispatch";
import { addSpaces } from "entites/spaces/yours/state/slice";
import { MembersBlock, TypesBlock, TagsBlock } from "./../index";

import styles from "./space-form.module.scss";

interface Values {
  name: string;
}

const DisplayingErrorMessages = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

export const SpaceFormCreate = () => {
  const { closePopup } = usePopup();
  const dispatch = useAppDispatch();
  const [isPublic, setIsPublic] = useState(true);

  const addSpace = (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    dispatch(
      addSpaces({
        name: values.name,
        isPublic: isPublic,
      })
    );
    setSubmitting(false);
    closePopup();
  };

  const initialValues = {
    name: "",
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create Space</h2>

      <Formik
        initialValues={initialValues}
        onSubmit={addSpace}
        validationSchema={DisplayingErrorMessages}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <div className={styles.formContainer}>
              <Field
                id="name"
                name="name"
                placeholder="Name of space"
                className={styles.name}
              />
              {touched.name && errors.name && <div>{errors.name}</div>}

              <MembersBlock />

              <TagsBlock />

              <TypesBlock isPublic={isPublic} setIsPublic={setIsPublic} />

              <button type="submit" className={styles.save}>
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
