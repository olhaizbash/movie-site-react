import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getTrend } from "./movieThunk";

const INITIAL_STATE = {
  movieList: [],
  isLoading: false,
  error: null,
  authenticated: false,
  favorites: [],
  page: 1,
};

const movieSlice = createSlice({
  name: "movie",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(getTrend.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.movieList = payload;
      })
      //       .addCase(addWatersThunk.fulfilled, (state, { payload }) => {
      //         state.isLoading = false;
      //         const newWaterVolume = payload.waterVolume;
      //         const newTime = payload.time;
      //         const newWaterId = payload.id;
      //         const newArr = {
      //           waterVolume: newWaterVolume,
      //           time: newTime,
      //           id: newWaterId,
      //         };
      //         state.today.waterlist.push(newArr);
      //         state.dailyDrank += newWaterVolume;
      //       })
      //       .addCase(editWaterThunk.fulfilled, (state, { payload }) => {
      //         state.isLoading = false;
      //         const array = state.today.waterlist;
      //         const idx = array.findIndex((item) => item.id === payload.id);
      //         if (idx !== -1) {
      //           array[idx] = payload;
      //         }
      //         state.dailyDrank = array.reduce(
      //           (acc, item) => acc + item.waterVolume,
      //           0
      //         );
      //       })
      //       .addCase(deleteWaterThunk.fulfilled, (state, { payload }) => {
      //         state.isLoading = false;
      //         state.today.waterlist = state.today.waterlist.filter(
      //           (data) => data.id !== payload
      //         );
      //         const arr = state.today.waterlist;
      //         state.dailyDrank = arr.reduce((acc, item) => acc + item.waterVolume, 0);
      //       })
      .addMatcher(isAnyOf(getTrend.pending), (state) => {
        state.isLoading = true;
      })
      .addMatcher(isAnyOf(getTrend.rejected), (state) => {
        state.isLoading = false;
      });
  },
});

export const movieReducer = movieSlice.reducer;
