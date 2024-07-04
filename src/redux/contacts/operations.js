import { createAsyncThunk } from "@reduxjs/toolkit";
import { goItApi } from "../../config/goItApi";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const showSuccessToast = (message) => {
  toast.success(message, {
    autoClose: 1500,
    style: {
      width: "auto",
      maxWidth: "230px",
      textAlign: "center",
      borderRadius: "10px",
      padding: "10px",
      backgroundColor: "#FFFFFF",
      color: "#110731",
      marginTop: "100px",
      marginLeft: "60px",
    },
  });
};

const showErrorToast = (message) => {
  toast.error(message, {
    autoClose: 15000000000000000,
    style: {
      width: "auto",
      maxWidth: "250px",
      textAlign: "center",
      borderRadius: "10px",
      padding: "10px",
      backgroundColor: "#FFFFFF",
      color: "#FF6347",
      marginTop: "100px",
      marginLeft: "60px",
    },
  });
};

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
      showSuccessToast("Successfully added");
      return data;
    } catch (error) {
      showErrorToast("Something went wrong...");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk("id", async (id, thunkAPI) => {
  try {
    const { data } = await goItApi.delete(`/contacts/${id}`);
    showSuccessToast("Successfully deleted");
    return data.id;
  } catch (error) {
    showErrorToast("Something went wrong...");
    return thunkAPI.rejectWithValue(error.message);
  }
});
