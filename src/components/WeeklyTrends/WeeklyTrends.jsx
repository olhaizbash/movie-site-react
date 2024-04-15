import { Link } from "react-router-dom";
import { Container } from "../Container/Container";
import { useSelector } from "react-redux";
import { selectTrends } from "../../redux/selectors";
import Rate from "../Hero/Rate";
import {
  SectionWeeklyTrends,
  WeeklyTrendsWrapper,
  WeeklyTrendsHeader,
  WeeklyTrendsTitle,
  WeeklyTrendsLinkCategory,
  WeeklyTrendsList,
  WeeklyTrendsItem,
  WeeklyTrendsImg,
  WeeklyTrendsInfo,
  WeeklyTrendsInfoTitle,
} from "./WeeklyTrends.styles";

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
                return (
                  <WeeklyTrendsItem key={el.id}>
                    <Link to={`/catalog/${el.id}`}>
                      <WeeklyTrendsImg
                        src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                      />
                      <WeeklyTrendsInfo>
                        <div>
                          <WeeklyTrendsInfoTitle>
                            {el.original_title}
                          </WeeklyTrendsInfoTitle>
                        </div>
                        <div>
                          <Rate
                            currentRate={
                              (((el.vote_average * 100) / 10) * 5) / 100
                            }
                          />
                        </div>
                      </WeeklyTrendsInfo>
                    </Link>
                  </WeeklyTrendsItem>
                );
              }
            })}
          </WeeklyTrendsList>
        </WeeklyTrendsWrapper>
      </Container>
    </SectionWeeklyTrends>
  );
};

export default WeeklyTrends;
