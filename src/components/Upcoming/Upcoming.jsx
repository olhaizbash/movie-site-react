import { getUpcomingMovie } from "../../redux/movieThunk";
import {
  selectFavorites,
  selectIsLoading,
  selectUpcomingMovie,
} from "../../redux/selectors";
import { Container } from "../Container/Container";
import {
  UpcomingWrapper,
  UpcomingTitle,
  SectionUpcoming,
} from "./Upcoming.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import UpcomingDetails from "./UpcomingDetails";

const Upcoming = () => {
  const dispatch = useDispatch();
  const upcomingMovie = useSelector(selectUpcomingMovie);
  const isLoading = useSelector(selectIsLoading);
  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    dispatch(getUpcomingMovie());
  }, [dispatch]);

  return (
    <SectionUpcoming>
      <Container>
        <UpcomingWrapper>
          <UpcomingTitle>upcoming this month</UpcomingTitle>
          {isLoading && <Loader />}

          {upcomingMovie !== null && (
            <UpcomingDetails
              upcomingMovie={upcomingMovie}
              favorites={favorites}
            />
          )}
        </UpcomingWrapper>
      </Container>
    </SectionUpcoming>
  );
};

export default Upcoming;
