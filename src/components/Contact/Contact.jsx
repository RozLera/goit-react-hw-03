import css from "./Contact.module.css";
import { VscAccount } from "react-icons/vsc";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ contact, deleteContact }) => {
  function handleClick(id) {
    deleteContact(id);
  }
  return (
    <li className={css.item}>
      <div>
        <div className={css.icons}>
          <VscAccount />
          <p className={css.text}>{contact.name}</p>
        </div>

        <div className={css.icons}>
          <FaPhoneAlt />
          <p className={css.text}>{contact.number}</p>
        </div>
      </div>
      <button onClick={() => handleClick(contact.id)}>Delete</button>
    </li>
  );
};

export default Contact;
