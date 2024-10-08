import { useDispatch } from "react-redux";
import { deleteContacts, toggleContacts } from "../../../redux/operations";
import { RxCross2 } from "react-icons/rx";
import { FiPlusSquare } from "react-icons/fi";
import styles from './Contact.module.css'

export const Contact = ({ contact }) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteContacts(contact))
  }

  const handleToggleSaved = () => {
    dispatch(toggleContacts(contact))
  }

  return (
    <div className={styles.wrapper}>
      <button className={`${styles.btn} ${contact.saved ? styles.saved : ''}`} onClick={handleToggleSaved}>
        <FiPlusSquare size={24} />
      </button>
      <p className={styles.text}>{contact.name}</p>
      <p className={styles.text}>{contact.tel}</p>
      <button className={styles.btn} onClick={handleDelete}>
        <RxCross2 size={24} />
      </button>
    </div>
  );
};
