import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    changeContactsFilter: {
      reducer(state, action) {
        state.name = action.payload;
      },
    },
  },
});

// export const selectContactsFilter = (state) => state.filters.name;
export const selectContactsFilter = (state) => state.filters?.name ?? "";
export const { changeContactsFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
