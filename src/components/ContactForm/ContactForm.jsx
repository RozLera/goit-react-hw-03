import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import { useId } from "react";
import * as Yup from "yup";

const ContactForm = ({ addContact }) => {
  const nameId = useId();
  const phoneId = useId();
  const handleSubmit = (contact, actions) => {
    addContact({ ...contact, id: nanoid() });
    actions.resetForm();
  };

  const formValidation = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name is too short (min length - 2 chars)")
      .max(50, "Name is too long (max length - 50 chars)")
      .required("Name is required"),

    number: Yup.string()
      .required("Phone number is required")

      .matches(
        new RegExp("^\\+?[0-9](?:[0-9-]*[0-9])?$"),
        "Use digits and dashes only. No dash at the start or end."
      )
      .min(7, "Phone number is too short")
      .max(20, "Phone number is too long"),
  });

  return (
    <Formik
      className={css.text}
      onSubmit={handleSubmit}
      initialValues={{ name: "", number: "" }}
      validationSchema={formValidation}
    >
      <Form className={css.form}>
        <div className={css.wraper}>
          <label className={css.label} htmlFor={nameId}>
            Name
          </label>
          <Field className={css.field} type="name" name="name" id={nameId} />
          <ErrorMessage
            name="name"
            component={"span"}
            className={css.ErrorMessage}
          />
        </div>

        <div className={css.wraper}>
          <label className={css.label} htmlFor={phoneId}>
            Number
          </label>
          <Field
            className={css.field}
            type="phone"
            name="number"
            id={phoneId}
          />
          <ErrorMessage
            name="number"
            component={"span"}
            className={css.ErrorMessage}
          />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
