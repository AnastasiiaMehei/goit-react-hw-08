import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addContacts, deleteContact, fetchContacts } from "./contactsOps";
import { selectContactsFilter } from "./filtersSlice";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addContacts.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addContacts.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.loading = false;
      });
  },
});
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

export default slice.reducer;
