import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./Slice";
export const Store = configureStore({
  devTools: true,
  reducer: {
    student: studentReducer,
  },
});
