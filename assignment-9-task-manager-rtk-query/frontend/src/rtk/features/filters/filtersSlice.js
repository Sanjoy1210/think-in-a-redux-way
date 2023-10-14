import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  selected: [],
}

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    toggleSelected: (state, action) => {
      if (state.selected.includes(action.payload)) {
        // remove
        state.selected = state.selected.filter((item) => item !== action.payload);
      }
      else {
        // add
        state.selected.push(action.payload);
      }
    },
    setInitialSelected: (state, action) => {
      state.selected = action.payload;
    }
  }
});

export default filtersSlice.reducer;
export const {
  setSearch,
  toggleSelected,
  setInitialSelected,
} = filtersSlice.actions;
