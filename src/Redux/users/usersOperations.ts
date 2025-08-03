import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { TUser } from '../../types/TUser';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = createAsyncThunk<
  TUser[],
  void,
  { rejectValue: string }
>('users/fetchUsers', async (_, thunkAPI) => {
  try {
    const resp = await axios.get<TUser[]>('/users');
    return resp.data as TUser[];
  } catch (error) {
    return thunkAPI.rejectWithValue('Fetch Error');
  }
});
