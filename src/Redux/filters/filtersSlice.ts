import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type FiltersState = {
  name: string;
  username: string;
  email: string;
  phone: string;
};

type PartialFilters = Partial<FiltersState>;

const filtersInitialState: FiltersState = {
  name: '',
  username: '',
  email: '',
  phone: '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setFilter: (state, action: PayloadAction<PartialFilters>) => {
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
