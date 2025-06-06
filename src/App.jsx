import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const initialContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [contactList, setContactList] = useState(initialContacts);

  const deleteContact = (id) => {
    setContactList(contactList.filter((contact) => contact.id !== id));
  };
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        {/* <ContactForm /> */}
        {/* <SearchBox /> */}
        <ContactList contacts={contactList} deleteContact={deleteContact} />
      </div>
    </>
  );
}

export default App;
