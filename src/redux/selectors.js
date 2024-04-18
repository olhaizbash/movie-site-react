export const selectIsLoading = (state) => state.movie.isLoading;
export const selectTrends = (state) => state.movie.trendMovies;
export const selectTheme = (state) => state.options.theme;
export const selectTrailer = (state) => state.movie.trailer;
export const selectCurrentMovie = (state) => state.movie.currentMovie;
export const selectFavorites = (state) => state.movie.favorites;
export const selectUpcomingMovie = (state) => state.movie.upcomingMovie;
export const selectSearchByNameRes = (state) =>
  state.movie.searchByName.results;
export const selectSearchByNamePage = (state) => state.movie.searchByName.page;
export const selectSearchByNameTotalPage = (state) =>
  state.movie.searchByName.totalPage;
