import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getTrailer, getTrend } from "./movieThunk";

const initialState = {
  trendMovies: null,
  isLoading: false,
  favorites: [],
  page: null,
  trailer: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTrend.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.trendMovies = payload.results;
        state.page = payload.page;
      })
      .addCase(getTrailer.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload);
        state.trailer = payload;
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
