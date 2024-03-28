import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

const API_KEY = "01d38afe4cc535c84f509923ce573618";
instance.defaults.params = {
  api_key: API_KEY,
};

export const getTrendMovies = async () => {
  const { data } = await instance.get(`trending/movie/week`);
  return data;
};

export const getMovieDetails = async (movieId) => {
  const { data } = await instance.get(`movie/${movieId}`);
  return data;
};

export const getSearchMovie = async (query, page) => {
  const { data } = await instance.get(
    `search/movie?query=${query}&page=${page}`
  );
  return data;
};

export const getUpcoming = async () => {
  const { data } = await instance.get(`movie/upcoming`);
  return data;
};

export const getMovieTrailer = async (movieId) => {
  const { data } = await instance.get(`movie/${movieId}/videos`);
  return data.results[1].key;
};

export const getGenresList = async () => {
  const { data } = await instance.get(`genre/movie/list`);
  return data;
};

export const getMovieContries = async () => {
  const { data } = await instance.get(`configuration/countries`);
  return data;
};
