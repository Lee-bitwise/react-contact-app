import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import LoginPage from "./login";
import RegisterPage from "./register";
import ContactsPage from "./contacts";
import ContactDetailsPage from "./contact-details";
import ContactCreatePage from "./contact-create";
import { useAuth } from "../contexts/AuthContext";
import { Navbar } from "./Navbar";
import { ContactContextProvider } from "../contexts/ContactContextProvider";
import { useContact } from "../contexts/ContactContext";

const App = () => {
  const { user } = useAuth();
  const { contacts } = useContact();
  return (
    <ContactContextProvider
    >
      <Wrapper>
        {!user ? (
          <>
            <LoginPage />
            <RegisterPage />
          </>
        ) : (
          <>
            <Navbar />
            <ContactsPage />
            <ContactDetailsPage contact={contacts[0]} />
            <ContactCreatePage />
          </>
        )}
      </Wrapper>
    </ContactContextProvider>
  );
};

const Wrapper = styled.div`
  .form_wrapper {
    width: 45rem;
    background-color: #f5f5f5;
    padding: 3rem 3.5rem;
    div > p {
      text-align: center;
      margin: 0;
    }
  }
  form {
    &,
    .form_group {
      display: flex;
      flex-direction: column;
    }

    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;

    .form_group {
      margin: 0.7rem;
    }
    button {
      text-transform: uppercase;
      font-weight: bold;
      background-color: #bbb;
      padding: 1rem 1.5rem;
      border: none;
      -webkit-box-shadow: 0px 7px 12px -2px rgba(170, 170, 170, 0.72);
      box-shadow: 0px 7px 12px -2px rgba(170, 170, 170, 0.72);
    }
    label {
      font-weight: lighter;
      text-transform: uppercase;
      font-size: 0.9rem;
      padding: 0;
    }
    input {
      border: none;
      border-bottom: 0.2rem solid;
      background-color: transparent;

      width: 18rem;
    }
  }
`;
export default App;
