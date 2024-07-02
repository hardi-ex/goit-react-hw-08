import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    name: "",
  },
};

const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filters.name = action.payload;
    },
  },
  selectors: {
    selectNameFilter: (state) => state.filters.name,
  },
});

export const filteredReducer = slice.reducer;
export const { changeFilter } = slice.actions;
export const { selectNameFilter } = slice.selectors;
