import {
  WeeklyTrendsItem,
  WeeklyTrendsImg,
  WeeklyTrendsInfoTitle,
  WeeklyTrendsInfo,
} from "../WeeklyTrends/WeeklyTrends.styles";
import Rate from "../Hero/Rate";
import { Link } from "react-router-dom";

const MovieList = ({ el }) => {
  return (
    <>
      <WeeklyTrendsItem>
        <Link to={`/catalog/${el.id}`}>
          <WeeklyTrendsImg
            src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
          />
          <WeeklyTrendsInfo>
            <div>
              <WeeklyTrendsInfoTitle>{el.original_title}</WeeklyTrendsInfoTitle>
            </div>
            <div>
              <Rate currentRate={(((el.vote_average * 100) / 10) * 5) / 100} />
            </div>
          </WeeklyTrendsInfo>
        </Link>
      </WeeklyTrendsItem>
    </>
  );
};

export default MovieList;
