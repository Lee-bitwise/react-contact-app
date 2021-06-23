import { useState, useEffect } from "react";
import { addContact, deleteContact, getContacts } from "../utils/contacts";
import { getMockContacts } from "../utils/getMockContacts";
import { ContactContext } from "./ContactContext";

export const ContactContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const storedContacts = getContacts();
    setContacts(storedContacts.length ? storedContacts : getMockContacts);
  }, []);
  const createNewContact = (contact) => {
    const newContact = addContact(contact);
    setContacts([newContact, ...contacts]);
  };
  const removeContact = (contactId) => {
    const newContacts = contacts.filter((contact) => contact.id !== contactId);
    deleteContact(contactId);
    setContacts(newContacts);
  };
  return (
    <ContactContext.Provider
      value={{ createNewContact, removeContact, contacts }}
    >
      {children}
    </ContactContext.Provider>
  );
};
