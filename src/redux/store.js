import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/slice";
import { contactReducer } from "./contactsSlice";
import { filteredReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contact: contactReducer,
    filter: filteredReducer,
  },
});
