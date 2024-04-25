import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getMovieDetails,
  getMovieTrailer,
  getSearchMovie,
  getTrendMovies,
  getUpcoming,
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
      const movie = await getMovieDetails(movieId);
      return movie;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUpcomingMovie = createAsyncThunk(
  "movie/getUpcoming",
  async (_, thunkAPI) => {
    try {
      const movie = await getUpcoming();
      return movie;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getSearchByName = createAsyncThunk(
  "movie/getSearchByName",
  async ({ query, page }, thunkAPI) => {
    try {
      const movie = await getSearchMovie({ query, page });
      return movie;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
