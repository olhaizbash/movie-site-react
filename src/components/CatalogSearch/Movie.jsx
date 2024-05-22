import { WeeklyTrendsList } from "../WeeklyTrends/WeeklyTrends.styles";
import {
  WeeklyTrendsItem,
  WeeklyTrendsImg,
  WeeklyTrendsInfoTitle,
  WeeklyTrendsInfo,
} from "../WeeklyTrends/WeeklyTrends.styles";
import Rate from "../Hero/Rate";
import { Link } from "react-router-dom";

const Movie = ({ searchResult }) => {
  return (
    <>
      <WeeklyTrendsList>
        {searchResult?.map((el) => {
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
                      currentRate={(((el.vote_average * 100) / 10) * 5) / 100}
                    />
                  </div>
                </WeeklyTrendsInfo>
              </Link>
            </WeeklyTrendsItem>
          );
        })}
      </WeeklyTrendsList>
    </>
  );
};

export default Movie;
