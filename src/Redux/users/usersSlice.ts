import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./usersOperations.js";

import { TUser } from '../../types/TUser.js'

const usersInitialState = {
  data: [] as TUser[],
  isLoading: false,
  currentID: null,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState: usersInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const usersReducer = usersSlice.reducer;
