import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getDetails,
  getSearchByName,
  getTrailer,
  getTrend,
  getUpcomingMovie,
} from "./movieThunk";

const initialState = {
  trendMovies: null,
  isLoading: false,
  favorites: null,
  searchByName: { results: [], page: null, totalPage: null },
  trailer: null,
  currentMovie: [],
  upcomingMovie: null,
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
      .addCase(getUpcomingMovie.fulfilled, (state, { payload }) => {
        state.upcomingMovie = payload.results;
      })
      .addCase(getSearchByName.fulfilled, (state, { payload }) => {
        const results = payload.results;
        if (state.searchByName.page === payload.page) {
          state.searchByName.results = results;
          state.searchByName.page = payload.page;
          state.searchByName.totalPage = payload.total_pages;
        } else {
          state.searchByName.results = [
            ...state.searchByName.results,
            ...results,
          ];
          state.searchByName.page = payload.page;
          state.searchByName.totalPage = payload.total_pages;
        }
      })
      .addMatcher(
        isAnyOf(
          getTrend.pending,
          getTrailer.pending,
          getDetails.pending,
          getUpcomingMovie.pending,
          getSearchByName.pending
        ),
        (state) => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getTrend.rejected,
          getTrailer.rejected,
          getDetails.rejected,
          getUpcomingMovie.rejected,
          getSearchByName.rejected
        ),
        (state) => {
          state.isLoading = false;
        }
      );
  },
});

export const { addToFavorite, removeFromFavorite } = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
