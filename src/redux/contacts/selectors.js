import { createSelector } from "@reduxjs/toolkit";
import { selectContactsFilter } from "../redux/filtersSlice";

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectContactsFilter],
  (contacts, filter) => {
    filter = typeof filter === "string" ? filter : "";
    return contacts.filter(
      (contact) =>
        contact &&
        contact.name &&
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
