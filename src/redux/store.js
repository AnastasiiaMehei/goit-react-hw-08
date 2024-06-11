import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "../contacts/slice";
import filtersReducer from "../redux/filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filtersReducer,
  },
});
