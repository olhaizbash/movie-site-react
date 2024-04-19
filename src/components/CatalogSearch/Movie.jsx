import { WeeklyTrendsList } from "../WeeklyTrends/WeeklyTrends.styles";
import MovieList from "./MovieList";

const Movie = ({ searchResult }) => {
  return (
    <>
      <WeeklyTrendsList>
        {searchResult?.map((el) => (
          <MovieList el={el} key={el.id} />
        ))}
      </WeeklyTrendsList>
    </>
  );
};

export default Movie;
