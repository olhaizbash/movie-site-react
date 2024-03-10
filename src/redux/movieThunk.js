import { createAsyncThunk } from "@reduxjs/toolkit";
import { getTrendMovies } from "../services/api";

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
