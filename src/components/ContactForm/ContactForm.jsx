import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useState } from 'react';

export const ContactForm = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChangeName = event => {
    const value = event.target.value;
    setName(value);
  };

  const onChangeNumber = event => {
    const value = event.target.value;
    setNumber(value);
  };

  const onSubmit = event => {
    event.preventDefault();
    handleSubmit({ name: name, number: number });
    setName('');
    setNumber('');
  };

  const idName = nanoid();
  const idNumber = nanoid();


  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor={idName}>
          Name
        </label>
        <input
          className={css.input}
          id={idName}
          onChange={onChangeName}
          value={name}
          type="text"
          name="name"
          pattern="^[A-Za-z.'\- ]+$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
        />

        <label htmlFor={idNumber}>
          {' '}
          Number{' '}
        </label>
        <input
          className={css.input}
          id={idNumber}
          onChange={onChangeNumber}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter number"
        />
        <button className={css.btn}>Add contact</button>
      </form>
    </div>
  );
};