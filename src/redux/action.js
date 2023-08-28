import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'https://64e28673ab00373588190c6b.mockapi.io/contacts';

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post(`${apiUrl}`, {
        name: name,
        number: number,
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      await axios.delete(`${apiUrl}/${contactId}`);
      return contactId;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
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
    } catch (err) {
      throw err('Failed to fetch contacts');
    }
  }
);
