import { useDispatch } from "react-redux";
import { changeFilter, changeSavedFilter } from "../../redux/filterSlice";
import { Button } from "components/Button/Button";
import styles from "./ContactsFilter.module.css";

export const ContactsFilter = () => {
  const dispatch = useDispatch()

  const handleChangeFilter = (e) =>  {
    e.preventDefault()
    const filterValue = e.currentTarget.elements.filter.value

    dispatch(changeFilter(filterValue))
    e.currentTarget.reset();
  }

  const handleChangeSavedFilter = (savedFilter) => {
    dispatch(changeSavedFilter(savedFilter))
  }


  return (
    <div className={styles.filters}>
      <form className={styles.form} onSubmit={handleChangeFilter}>
        <input
          className={styles.field}
          id="filter"
          type="text"
          name="text"
          placeholder="Search..."
        />
        <Button type="submit">Search</Button>
      </form>
      <div className={styles.saved_filter}>
        <Button onClick={() => {handleChangeSavedFilter('all')}}>All</Button>
        <Button onClick={() => {handleChangeSavedFilter('saved')}}>Saved</Button>
      </div>
    </div>
  );
};
