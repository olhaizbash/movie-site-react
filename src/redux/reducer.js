import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getDetails, getTrailer, getTrend } from "./movieThunk";

const initialState = {
  trendMovies: null,
  isLoading: false,
  favorites: null,
  page: null,
  trailer: null,
  currentMovie: [],
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addToFavorite: (state, { payload }) => {
      console.log(payload);
      let exist = state.favorites.findIndex((el) => el.id === payload.id);
      exist >= 0
        ? console.log("This book is already in your library")
        : state.favorites.push(payload);
    },
    removeFromFavorite: (state, { payload }) => {
      state.favorites = state.favorites.filter((el) => el.id !== payload.id);
    },
  },
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
      .addCase(getDetails.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.currentMovie = payload;
      })
      .addMatcher(
        isAnyOf(getTrend.pending, getTrailer.pending, getDetails.pending),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(getTrend.rejected, getTrailer.rejected, getDetails.rejected),
        (state) => {
          state.isLoading = false;
        }
      );
  },
});

export const { addToFavorite, removeFromFavorite } = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
