import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contactsOps";
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from "../redux/contactsSlice";
import { selectFilteredContacts } from "../redux/contactsSlice";
import { ThreeDots } from "react-loader-spinner";
import css from "./App.module.css";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const isError = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && (
        <div className={css.loader}>
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#1A1F45"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
      {isError && <p className={css.textWrong}>Something went wrong</p>}
      {!isLoading &&
        !isError &&
        (contacts.length === 0 || filteredContacts.length === 0) && (
          <p className={css.textFound}>No contact found</p>
        )}
      {!isLoading && !isError && filteredContacts.length !== 0 && (
        <ContactList users={filteredContacts} />
      )}
    </>
  );
};

export default App;
