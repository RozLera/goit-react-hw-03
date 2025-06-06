import { useEffect, useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  const initialContacts = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [contactList, setContactList] = useState(
    () => JSON.parse(localStorage.getItem("contactList")) || initialContacts
  );

  useEffect(() =>
    localStorage.setItem("contactList", JSON.stringify(contactList), [
      contactList,
    ])
  );

  const deleteContact = (id) => {
    setContactList(contactList.filter((contact) => contact.id !== id));
  };

  const [searchBox, setSearchBox] = useState("");

  const filteredContacts = contactList.filter((contact) =>
    contact.name.toLowerCase().includes(searchBox.toLowerCase())
  );

  const addContact = (newContact) => {
    setContactList((addList) => [...addList, newContact]);
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <SearchBox value={searchBox} onSearch={setSearchBox} />
        <ContactList
          contacts={filteredContacts}
          deleteContact={deleteContact}
        />
      </div>
    </>
  );
}

export default App;
