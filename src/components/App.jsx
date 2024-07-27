import { Layout } from "./Layout/Layout";
import { ContactsFilter } from "./ContactsFilter/ContactsFilter";
import { ContactsList } from "./ContactsList/ContactsList";
import { ContactsForm } from "./ContactsForm/ContactsForm";
import { getContacts } from "../redux/operations";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getContacts())
  }, [dispatch])

  return (
    <Layout>
      <ContactsFilter/>
      <ContactsForm/>
      <ContactsList/>
    </Layout>
  );
};
