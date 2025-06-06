import { Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";

const ContactForm = ({ addContact }) => {
  const handleSubmit = (contact, actions) => {
    addContact({ ...contact, id: nanoid() });
    actions.resetForm();
  };
  return (
    <Formik onSubmit={handleSubmit} initialValues={{ name: "", number: "" }}>
      <Form>
        <Field type="name" name="name" />
        <Field type="phone" name="number" />
        <button type="submit">Add</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
