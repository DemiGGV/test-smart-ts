import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { usersReducer } from "./users/usersSlice";
import { filtersReducer } from "./filters/filtersSlice";

const rootReducer = combineReducers({
  users: usersReducer,
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
