import { addToFavorite, removeFromFavorite } from "../../redux/reducer";
import {
  UpcomingContainer,
  UpcomingPoster,
  TitleMovie,
  SubTitleMovie,
  SubTitleMovieDesc,
  MovieDesc,
  AddLibraryButton,
  AboutMovieContainer,
  AboutTextContainer,
} from "./Upcoming.styled";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const UpcomingDetails = ({ favorites, upcomingMovie }) => {
  const [inList, setInList] = useState(false);
  const randomNumber = Math.floor(Math.random() * (19 - 0 + 1) + 0);

  const [currentMovie, setCurrentMovie] = useState(upcomingMovie[randomNumber]);
  const dispatch = useDispatch();

  useEffect(() => {
    const exist = favorites.findIndex((el) => el.id === currentMovie?.id);
    exist >= 0 ? setInList(true) : setInList(false);
  }, [favorites, currentMovie]);

  return (
    <UpcomingContainer>
      <UpcomingPoster $imgUrl={currentMovie.backdrop_path}></UpcomingPoster>
      <AboutTextContainer>
        <TitleMovie>{currentMovie?.original_title}</TitleMovie>
        <AboutMovieContainer>
          <SubTitleMovie>Release date</SubTitleMovie>
          <SubTitleMovieDesc>{currentMovie?.release_date}</SubTitleMovieDesc>
        </AboutMovieContainer>
        <AboutMovieContainer>
          <SubTitleMovie>Vote/Votes</SubTitleMovie>
          <SubTitleMovieDesc>{`${currentMovie?.vote_average}/${currentMovie?.vote_count}`}</SubTitleMovieDesc>
        </AboutMovieContainer>
        <AboutMovieContainer>
          <SubTitleMovie>Popularity</SubTitleMovie>
          <SubTitleMovieDesc>{currentMovie?.popularity}</SubTitleMovieDesc>
        </AboutMovieContainer>
        <div>
          <SubTitleMovie>ABOUT</SubTitleMovie>
          <MovieDesc>{currentMovie?.overview}</MovieDesc>
        </div>
        {inList ? (
          <AddLibraryButton
            onClick={() => {
              dispatch(removeFromFavorite(currentMovie));
            }}>
            Remove from my library
          </AddLibraryButton>
        ) : (
          <AddLibraryButton
            onClick={() => {
              dispatch(addToFavorite(currentMovie));
            }}>
            Add to my library
          </AddLibraryButton>
        )}
      </AboutTextContainer>
    </UpcomingContainer>
  );
};

export default UpcomingDetails;
