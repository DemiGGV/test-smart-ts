import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./usersOperations.js";

const usersInitialState = {
  data: [],
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
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const usersReducer = usersSlice.reducer;
