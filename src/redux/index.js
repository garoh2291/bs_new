import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./provider/userSlice";

export default configureStore({
  reducer: {
    users: userSlice,
  },
});
