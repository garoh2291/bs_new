import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BACKEND_URL } from "../../data";

export const registerUserThunk = createAsyncThunk(
  "registerUserThunk/users",
  async function ({ data, cb }, { dispatch, rejectWithValue }) {
    try {
      const res = await fetch(`${BACKEND_URL}/api/v1/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const answer = await res.json();
      if (!answer.success) {
        cb("error", answer.message);
        throw new Error(answer.message);
      }
      cb("success", "Registration was successfull");
    } catch (e) {
      console.log(e);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    current: null,
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {},
});

export default userSlice.reducer;
