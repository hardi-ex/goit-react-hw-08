import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "../auth/operations";

const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: "",
  isLoggedIn: false,
  isLoading: false,
  isError: false,
};

export const slice = createSlice({
  name: "auth",
  initialState,
  selectors: {
    selectUser: (state) => state.user,
    selectToken: (state) => state.token,
    selectIsLoggedIn: (state) => state.isLoggedIn,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      });
  },
});

export const authReducer = slice.reducer;
export const { selectUser, selectIsLoggedIn } = slice.selectors;
