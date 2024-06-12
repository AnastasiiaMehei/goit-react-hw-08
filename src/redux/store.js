import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/slice";
import { authReducer } from "./auth/slice.js";
export const store = configureStore({
  reducer: {
    tasks: contactsReducer,
    auth: authReducer,
  },
});
