import { useContext } from "react";
import { ContactContext } from "../../contexts/ContactContext";
import ContactCard from "./ContactCard";

const ContactList = () => {
  const { contacts, removeContact } = useContext(ContactContext);
  return (
    <div style={{ backgroundColor: "#eee", padding: "2rem" }}>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          firstName={contact.firstName}
          lastName={contact.lastName}
          phoneNumber={contact.phoneNumber}
          profilePic={contact.profilePic}
          onRemove={() => removeContact(contact.id)}
        />
      ))}
    </div>
  );
};

export default ContactList;
