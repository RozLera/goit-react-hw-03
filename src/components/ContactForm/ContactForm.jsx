import { Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const ContactForm = ({ addContact }) => {
  const handleSubmit = (contact, actions) => {
    addContact({ ...contact, id: nanoid() });
    actions.resetForm();
  };
  return (
    <Formik
      className={css.text}
      onSubmit={handleSubmit}
      initialValues={{ name: "", number: "" }}
    >
      <Form className={css.form}>
        <Field className={css.field} type="name" name="name" />
        <Field className={css.field} type="phone" name="number" c />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
