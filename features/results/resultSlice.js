import { createSlice } from "@reduxjs/toolkit";

// const results = localStorage.getItem("results") !== null ? JSON.parse(localStorage.getItem("results")) : []

const initialState = [];

export const resultSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    setResults: (state, action) => {
      return action.payload
    },
    addResult: (state, action) => {
      state.push(action.payload)
      // localStorage.setItem("results", JSON.stringify(state))
    },
    deleteResult: (state, action) => {
      const resultFound = state.find(result => 
        result._id === action.payload._id)
      if(resultFound) {
        state.splice(state.indexOf(resultFound), 1)
      }
      // localStorage.setItem("results", JSON.stringify(state))
    }
  },
});

export const { addResult, deleteResult, setResults } = resultSlice.actions;

export default resultSlice.reducer;
