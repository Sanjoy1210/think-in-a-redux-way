import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  sort: "",
  filter: "all",
};

// slice
const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    selectedSort: (state, action) => {
      state.sort = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
});

export default filtersSlice.reducer;
export const { selectedSort, setFilter } = filtersSlice.actions;
