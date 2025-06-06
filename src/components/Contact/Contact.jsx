import css from "./Contact.module.css";

const Contact = ({ contact, deleteContact }) => {
  function handleClick(id) {
    deleteContact(id);
  }
  return (
    <li className={css.item}>
      <p className={css.text}>{contact.name}</p>
      <p className={css.text}>{contact.number}</p>
      <button onClick={() => handleClick(contact.id)}>Delete</button>
    </li>
  );
};

export default Contact;
