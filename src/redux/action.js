import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://64e28673ab00373588190c6b.mockapi.io/contacts/contacts';

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ nameContact, numberContact }, thunkAPI) => {
    try {
      const response = await axios.post(`${apiUrl}`, {
        name: nameContact,
        number: numberContact,
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`${apiUrl}/${contactId}`);
      return contactId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const setFilter = createAsyncThunk(
  'filter/setFilter',
  async filterValue => {
    return filterValue;
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const response = await axios.get(`${apiUrl}`);
      return response.data;
    } catch (error) {
      throw Error('Failed to fetch contacts');
    }
  }
);
