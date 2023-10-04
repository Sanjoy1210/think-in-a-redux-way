import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  featured: 'all',
  search: '',
}

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFeatured: (state, action) => {
      state.featured = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    removeSearch: (state) => {
      state.search = "";
    }
  }
});

export default filtersSlice.reducer;
export const { setFeatured, setSearch, removeSearch } = filtersSlice.actions;
