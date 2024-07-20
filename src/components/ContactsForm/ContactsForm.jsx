import { useDispatch } from "react-redux";
import { addContacts } from "../../redux/contactsSlice";
import { Button } from "components/Button/Button";
import styles from "./ContactsForm.module.css"
import { nanoid } from "nanoid";

export const ContactsForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const name = e.currentTarget.elements.name.value
    const tel = e.currentTarget.elements.tel.value

    dispatch(addContacts({
      id: nanoid,
      name: name, 
      tel: tel, 
      saved: false,
    }))
    e.currentTarget.reset();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.field}
        id="name"
        type="text"
        name="text"
        placeholder="Enter contact name..."
      />
      <input
        className={styles.field}
        id="tel"
        type="text"
        name="text"
        placeholder="Enter contact number..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
