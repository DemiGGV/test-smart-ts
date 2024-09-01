import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const getUsers = (state: RootState) => state.users.data;

export const getIsLoading = (state: RootState) => state.users.isLoading;

export const getCurrentID = (state: RootState) => state.users.currentID;

export const getError = (state: RootState) => state.users.error;

// Filters
export const getNameFilter = (state: RootState) => state.filters.name;
export const getUsernameFilter = (state: RootState) => state.filters.username;
export const getEmailFilter = (state: RootState) => state.filters.email;
export const getPhoneFilter = (state: RootState) => state.filters.phone;

export const getFilteredUsers = createSelector(
  [getUsers, getNameFilter, getUsernameFilter, getEmailFilter, getPhoneFilter],
  (users, name, username, email, phone) => {
    return users.filter(
      (user) =>
        (name ? user.name.toLowerCase().includes(name.toLowerCase()) : true) &&
        (username
          ? user.username.toLowerCase().includes(username.toLowerCase())
          : true) &&
        (email
          ? user.email.toLowerCase().includes(email.toLowerCase())
          : true) &&
        (phone
          ? user.phone.replace(/\D/g, "").includes(phone.replace(/\D/g, ""))
          : true)
    );
  }
);
