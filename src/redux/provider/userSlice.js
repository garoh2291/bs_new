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

export const loginUserThunk = createAsyncThunk(
  "users/loginUserThunk",
  async function ({ user, cb }, { dispatch, rejectWithValue }) {
    try {
      const res = await fetch(`${BACKEND_URL}/api/v1/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const answer = await res.json();
      if (answer.message) {
        cb("error", answer.message);
        throw new Error(answer.message);
      }

      localStorage.setItem("token", JSON.stringify(answer.token));
      cb("success");

      return answer;
    } catch (e) {
      cb(e);
      rejectWithValue(e);
    }
  }
);

export const checkUserThunk = createAsyncThunk(
  "users/checkUserThunk",
  async function (_, { dispatch }) {
    const res = await fetch(`${BACKEND_URL}/api/v1/auth/info`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });

    const data = await res.json();

    console.log(data);
  }
);

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const userSlice = createSlice({
  name: "users",
  initialState: {
    current: null,
    active: null,
    status: null,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [loginUserThunk.rejected]: setError,
    [loginUserThunk.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [loginUserThunk.fulfilled]: (state, action) => {
      const answer = action.payload;
      state.status = "resolved";
      state.current = answer.user;
    },
    [checkUserThunk.rejected]: setError,
    [checkUserThunk.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [checkUserThunk.fulfilled]: (state, action) => {
      state.status = "resolved";
    },
  },
});

export default userSlice.reducer;
