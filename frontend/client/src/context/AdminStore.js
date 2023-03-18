import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./Store";

export const storeAdmin = configureStore({
  reducer: {
    admin: adminReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
