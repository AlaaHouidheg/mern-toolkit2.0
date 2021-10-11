import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice/UserSlice";

export const store = configureStore({
  reducer: {
    users: userSlice,
  },
});
