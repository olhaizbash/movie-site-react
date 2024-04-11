import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getMovieDetails,
  getMovieTrailer,
  getTrendMovies,
} from "../services/api";

export const getTrend = createAsyncThunk(
  "movie/getTrendMovie",
  async (_, thunkAPI) => {
    try {
      const movie = await getTrendMovies();
      return movie;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTrailer = createAsyncThunk(
  "movie/getTrailer",
  async (movieId, thunkAPI) => {
    try {
      console.log(movieId);
      const movie = await getMovieTrailer(movieId);
      return movie;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getDetails = createAsyncThunk(
  "movie/getMovieDetails",
  async (movieId, thunkAPI) => {
    try {
      console.log(movieId);
      const movie = await getMovieDetails(movieId);
      return movie;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
