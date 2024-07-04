import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { goItApi } from "../../config/goItApi";

axios.defaults.baseURL = "https://668294e94102471fa4c77556.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await goItApi.get("/contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const { data } = await goItApi.post("/contacts", contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk("id", async (id, thunkAPI) => {
  try {
    const { data } = await goItApi.delete(`/contacts/${id}`);
    return data.id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
