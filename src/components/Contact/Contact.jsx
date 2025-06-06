const Contact = ({ contact, deleteContact }) => {
  function handleClick(id) {
    deleteContact(id);
  }
  return (
    <li>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button onClick={() => handleClick(contact.id)}>Delete</button>
    </li>
  );
};

export default Contact;
