import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [],
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      const idx = state.tags.indexOf(action.payload);

      if (idx !== -1) {
        state.tags.splice(idx, 1);
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    }
  }
});

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, searched } = filterSlice.actions;
