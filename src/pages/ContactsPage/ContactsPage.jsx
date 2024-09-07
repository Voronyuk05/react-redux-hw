import { ContactsFilter } from "components/Contacts/ContactsFilter/ContactsFilter";
import { ContactsList } from "components/Contacts/ContactsList/ContactsList";
import { ContactsForm } from "components/Contacts/ContactsForm/ContactsForm";
import { getContacts } from "../../redux/operations";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export const ContactsPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getContacts())
    }, [dispatch])

    return (
        <>
            <ContactsFilter/>
            <ContactsForm/>
            <ContactsList/>
        </>
    )
}