import { Container } from "../Container/Container";
import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/selectors";
import {
  SectionWeeklyTrends,
  WeeklyTrendsWrapper,
  WeeklyTrendsHeader,
  WeeklyTrendsTitle,
  WeeklyTrendsList,
} from "../WeeklyTrends/WeeklyTrends.styles";
import MovieList from "../CatalogSearch/MovieList";

const LibraryList = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <SectionWeeklyTrends>
      <Container>
        <WeeklyTrendsWrapper>
          <WeeklyTrendsHeader>
            <WeeklyTrendsTitle>MY LIBRARY</WeeklyTrendsTitle>
          </WeeklyTrendsHeader>
          <WeeklyTrendsList>
            {favorites.length == 0 || favorites === null ? (
              <WeeklyTrendsTitle
                style={{ margin: "auto", textTransform: "none" }}>
                OOPS... We are very sorry! You don’t have any movies at your
                library.
              </WeeklyTrendsTitle>
            ) : (
              favorites?.map((el) => <MovieList key={el.id} el={el} />)
            )}
          </WeeklyTrendsList>
        </WeeklyTrendsWrapper>
      </Container>
    </SectionWeeklyTrends>
  );
};

export default LibraryList;
