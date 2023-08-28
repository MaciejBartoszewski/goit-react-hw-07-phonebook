import {
  addContact,
  deleteContact,
  setFilter,
  fetchContacts,
} from '../redux/action';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

export const contactsReducer = createReducer(initialState.contacts, {
  [addContact.fulfilled]: (state, action) => {
    state.items.push(action.payload);
  },
  [deleteContact.fulfilled]: (state, action) => {
    const index = state.items.findIndex(
      contacts => contacts.id === action.payload
    );
    state.items.splice(index, 1);
  },
  [setFilter.fulfilled]: (state, action) => {
    state.filter = action.payload;
  },
  [fetchContacts.fulfilled]: (state, action) => {
    console.err(action.err);
  },
});
