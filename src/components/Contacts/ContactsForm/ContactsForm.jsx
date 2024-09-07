import { useDispatch } from "react-redux";
import { addContacts } from "../../../redux/operations";
import { Button } from "../../Button/Button";
import styles from "./ContactsForm.module.css"
import { nanoid } from "nanoid";
import { Input } from "components/Input/Input";

export const ContactsForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const name = e.currentTarget.elements.name.value
    const tel = e.currentTarget.elements.tel.value

    dispatch(addContacts({
      id: nanoid(),
      name: name, 
      tel: tel, 
      saved: false,
    }))
    e.currentTarget.reset()
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        id="name"
        type="text"
        name="text"
        placeholder="Enter contact name..."
      />
      <Input
        id="tel"
        type="text"
        name="text"
        placeholder="Enter contact number..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
