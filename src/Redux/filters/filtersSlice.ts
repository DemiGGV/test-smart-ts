import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setFilter: (state, action) => {
      const { name, username, email, phone } = action.payload;
      if (name !== undefined) state.name = name;
      if (username !== undefined) state.username = username;
      if (email !== undefined) state.email = email;
      if (phone !== undefined) state.phone = phone;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
