import { configureStore } from "@reduxjs/toolkit";
import rolesReducer from "./features/roleSlice";
export const store = configureStore({
  reducer: {
    roles: rolesReducer,
  },
});
