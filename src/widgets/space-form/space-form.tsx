import React, { useState } from "react";
import { usePopup } from "../../features/popup";
import { Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import styles from "./space-form.module.scss";
import { Member } from "./member";
import { Tag } from "./tag";
import { useAppDispatch } from "../../features/hooks/hooks";
import classNames from "classnames";
import { addSpaces } from "../../store/spaces/space-slice";

interface Values {
  name: string;
}

const DisplayingErrorMessages = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
});

export const SpaceForm = () => {
  const { closePopup } = usePopup();
  const [isPublic, setIsPublic] = useState(true);
  const dispatch = useAppDispatch();
  const addSpace = (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    dispatch(
      addSpaces({
        name: values.name,
        is_public: isPublic,
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
      <h2 className={styles.title}>Edit Space</h2>
      <div>
        <button className={styles.delete}>Delete Space</button>
      </div>

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

              <h2 className={styles.delete}>Members</h2>
              <Member email="sveta@mail.ru" username="Svetlana" />
              <Member email="sveta@mail.ru" username="Svetlana" />
              <Member email="sveta@mail.ru" username="Svetlana" />

              <h2 className={styles.delete}>Tags</h2>
              <div className={styles.addTag}>
                <input className={styles.addTagInput} placeholder="Tag" />
                <button type="button" className={styles.buttonAddTag}>
                  Add Tag
                </button>
              </div>
              <div className={styles.tags}>
                <Tag tag={"Tag"} />
                <Tag tag={"Tag"} />
                <Tag tag={"Tag"} />
              </div>

              <h2 className={styles.delete}>Type</h2>
              <div className={styles.type}>
                <button
                  type="button"
                  className={classNames(
                    styles.buttonAddTag,
                    !isPublic && styles.buttonAddTagActive
                  )}
                  onClick={() => setIsPublic(false)}
                >
                  Public
                </button>
                <button
                  type="button"
                  className={classNames(
                    styles.buttonAddTag,
                    isPublic && styles.buttonAddTagActive
                  )}
                  onClick={() => setIsPublic(true)}
                >
                  Private
                </button>
              </div>

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
