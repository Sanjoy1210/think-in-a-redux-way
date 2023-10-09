import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {};

// create slice
const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
});

export const { } = messagesSlice.actions;
export default messagesSlice.reducer;
