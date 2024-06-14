import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectAllContacts } from "../auth/selectors";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeContactsFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});
export const { changeContactsFilter } = filtersSlice.actions;
export default filtersSlice.reducer;

export const selectContactsFilter = (state) => state.filters?.name ?? "";

export const selectFilteredContacts = createSelector(
  [selectAllContacts, selectContactsFilter],
  (contacts, filter) => {
    if (!filter) return contacts;
    return contacts.filter(
      (contact) =>
        (contact.name &&
          contact.name.toLowerCase().includes(filter.toLowerCase())) ||
        contact.number.includes(filter)
    );
  }
);
