import { Layout } from "./Layout/Layout";
import { ContactsFilter } from "./ContactsFilter/ContactsFilter";
import { ContactsList } from "./ContactsList/ContactsList";
import { ContactsForm } from "./ContactsForm/ContactsForm";

export const App = () => {
  return (
    <Layout>
      <ContactsFilter/>
      <ContactsForm/>
      <ContactsList/>
    </Layout>
  );
};
