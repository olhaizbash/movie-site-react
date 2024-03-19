import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getTrend } from "./movieThunk";

const initialState = {
  trendMovies: null,
  isLoading: false,
  favorites: [],
  page: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTrend.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
        state.trendMovies = payload.results;
        console.log(state.trendMovies);
        state.page = payload.page;
      })
      .addMatcher(isAnyOf(getTrend.pending), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(getTrend.rejected), (state) => {
        state.isLoading = false;
      });
  },
});

export const movieReducer = movieSlice.reducer;
