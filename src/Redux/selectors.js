import { createSelector } from "@reduxjs/toolkit";

export const getUsers = (state) => state.users.data;

export const getIsLoading = (state) => state.users.isLoading;

export const getCurrentID = (state) => state.users.currentID;

export const getError = (state) => state.users.error;

// Filters
export const getNameFilter = (state) => state.filters.name;
export const getUsernameFilter = (state) => state.filters.username;
export const getEmailFilter = (state) => state.filters.email;
export const getPhoneFilter = (state) => state.filters.phone;

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
