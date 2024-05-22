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
  searchByName: { results: [], page: 1, totalPage: null },
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
      if (state.favorites === null) {
        state.favorites = [];
        state.favorites.push(payload);
      } else {
        console.log(payload);
        let exist = state.favorites.findIndex((el) => el.id === payload.id);
        exist >= 0
          ? console.log("This book is already in your library")
          : state.favorites.push(payload);
      }
    },
    removeFromFavorite: (state, { payload }) => {
      state.favorites = state.favorites.filter((el) => el.id !== payload.id);
    },
    setPage: (state, { payload }) => {
      state.searchByName.page = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTrend.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.trendMovies = payload.results;
      })
      .addCase(getTrailer.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.trailer = payload;
      })
      .addCase(getDetails.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.currentMovie = payload;
      })
      .addCase(getUpcomingMovie.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.upcomingMovie = payload.results;
      })
      .addCase(getSearchByName.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (payload.page === 1) {
          state.searchByName.results = [];
          state.searchByName.results = payload.results;
          state.searchByName.page = payload.page;
          state.searchByName.totalPage = payload.total_pages;
        } else {
          state.searchByName.results = [
            ...state.searchByName.results,
            ...payload.results,
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

export const { addToFavorite, removeFromFavorite, setPage } =
  movieSlice.actions;
export const movieReducer = movieSlice.reducer;
