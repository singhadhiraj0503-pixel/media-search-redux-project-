import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  query: "",
  activeTab: "photos",
  result: [],
  loading: false,
  error: null,
};

let searchSlice = createSlice({
  name: "search",

  initialState,

  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
    },
    setActiveTab(state, action) {
      state.activeTab = action.payload;
    },
    setResult(state, action) {
      state.result = action.payload;
      state.loading = false;
    },
    setLoading(state, action) {
      state.loading = true;
      state.error = null;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    clearResult(state) {
      state.result = [];
    },
  },
});

export const {
  setQuery,
  setActiveTab,
  setResult,
  setLoading,
  setError,
  clearResult,
} = searchSlice.actions;

export default searchSlice.reducer;
