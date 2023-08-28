import css from '../ContactForm/ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selector';
import { setFilter } from 'redux/action';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <form>
      <label>Find contacts by Name
        <input
          className={css.input}
          type="text"
          name="filter"
          placeholder="Search by name"
          value={filter}
          onChange={handleChange}
          pattern="^[A-Za-z.'\- ]+$"
        />
      </label>
    </form>
  );
};