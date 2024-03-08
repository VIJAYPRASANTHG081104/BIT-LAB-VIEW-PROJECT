import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    changeDept(state, action) {
      return action.payload;
    },
  },
});

export const { changeDept } = studentSlice.actions;

export default studentSlice.reducer;
