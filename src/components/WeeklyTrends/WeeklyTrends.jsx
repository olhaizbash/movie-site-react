import { Container } from "../Container/Container";
import { useSelector } from "react-redux";
import { selectTrends } from "../../redux/selectors";
import {
  SectionWeeklyTrends,
  WeeklyTrendsWrapper,
  WeeklyTrendsHeader,
  WeeklyTrendsTitle,
  WeeklyTrendsLinkCategory,
  WeeklyTrendsList,
} from "./WeeklyTrends.styles";
import MovieList from "../CatalogSearch/MovieList";

const WeeklyTrends = () => {
  const trends = useSelector(selectTrends);
  return (
    <SectionWeeklyTrends>
      <Container>
        <WeeklyTrendsWrapper>
          <WeeklyTrendsHeader>
            <WeeklyTrendsTitle>WEEKLY TRENDS</WeeklyTrendsTitle>
            <WeeklyTrendsLinkCategory to="/catalog">
              See all
            </WeeklyTrendsLinkCategory>
          </WeeklyTrendsHeader>
          <WeeklyTrendsList>
            {trends?.map((el, index) => {
              if (index <= 2) {
                return <MovieList key={el.id} el={el} />;
              }
            })}
          </WeeklyTrendsList>
        </WeeklyTrendsWrapper>
      </Container>
    </SectionWeeklyTrends>
  );
};

export default WeeklyTrends;
