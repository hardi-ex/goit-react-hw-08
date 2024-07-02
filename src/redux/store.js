import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from "./contactsSlice";
import { filteredReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    filter: filteredReducer,
  },
});
