import css from '../ContactForm/ContactForm.module.css';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, handleDelete }) => (
  <ul>
    {contacts.map((contact, id) => (
      <li key={id}>
        {contact.name} {contact.number}
        <button
          className={css.btn}
          type="button"
          onClick={() => handleDelete(contact.id)}
        >
          {' '}
          Delete{' '}
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};