import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});
axios.defaults.headers.common["api_key"] = "992758a4802a699e8df27d4d6efc34fb";

export const getTrendMovies = async (param, page) => {
  const { data } = await instance.get(`trending/movie/${param}?page=${page}`);
  return data;
};
