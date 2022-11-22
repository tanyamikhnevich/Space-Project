import React, { useState } from "react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import { usePopup } from "../../features/popup";
import { useAppDispatch } from "features/hooks/use-app-dispatch";
import { OneSpaceI } from "../../store/spaces/space-slice";
import { changeSpace, removeSpace } from "entites/spaces/yours/state/slice";
import { TagsBlock, TypesBlock, MembersBlock } from "./../index";

import styles from "./space-form.module.scss";

interface Values {
  name: string;
}

interface Props {
  name: string;
  space: OneSpaceI;
}

const DisplayingErrorMessages = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

export const SpaceFormEdit = ({ name, space }: Props) => {
  const { closePopup } = usePopup();
  const dispatch = useAppDispatch();
  const [isPublic, setIsPublic] = useState(true);

  const editSpace = (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    space &&
      dispatch(
        changeSpace({
          id: space.id,
          name: values.name,
          isPublic: space.isPublic,
        })
      );
    setSubmitting(false);
    closePopup();
  };

  const initialValues = {
    name: name,
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Edit Space</h2>
      <div>
        {space && (
          <button
            type="button"
            onClick={() => {
              dispatch(removeSpace(space.id));
              closePopup();
            }}
            className={styles.delete}
          >
            Delete Space
          </button>
        )}
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={editSpace}
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
