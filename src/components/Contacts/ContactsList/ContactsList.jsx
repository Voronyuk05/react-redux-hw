import { Contact } from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { getContacts, getFilters } from '../../../redux/selectors';
import { statusFilters } from '../../../redux/constants';
import styles from './ContactsList.module.css'

export const ContactsList = () => {
  const contacts = useSelector(getContacts)
  const filter = useSelector(getFilters)
  console.log(contacts);
  
  const getVisibleTasks = () => {
    const searchedContacts =  contacts.filter(contact => contact.name.includes(filter.query) || contact.tel.includes(filter.query));
    switch (filter.saved) {
      case statusFilters.saved:
        return searchedContacts.filter(contact => contact.saved);
      default:
        return searchedContacts;
    }
  };


  return (
    <ul className={styles.list}>
      {getVisibleTasks().map(contact => (
        <li className={styles.listItem} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
