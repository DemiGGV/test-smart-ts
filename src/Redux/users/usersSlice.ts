import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUsers } from './usersOperations.js';

import { TUser } from '../../types/TUser.js';

type UsersState = {
  data: TUser[];
  isLoading: boolean;
  currentID: number | null;
  error: string | null;
};

const usersInitialState: UsersState = {
  data: [],
  isLoading: false,
  currentID: null,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState: usersInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchUsers.fulfilled,
        (state, action: PayloadAction<TUser[]>) => {
          state.isLoading = false;
          state.error = null;
          state.data = action.payload;
        },
      )
      .addCase(
        fetchUsers.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.isLoading = false;
          state.error = action.payload ?? 'Unknown error';
        },
      );
  },
});

export const usersReducer = usersSlice.reducer;
