import {
  ModalDetailsContainer,
  ModalPoster,
  TitleMovie,
  AboutMovieContainer,
  SubTitleMovie,
  SubTitleMovieDesc,
  MovieDesc,
  AddLibraryButton,
  ButtonBack,
} from "./Hero.styled";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../redux/movieThunk";
import {
  selectCurrentMovie,
  selectFavorites,
  selectIsLoading,
} from "../../redux/selectors";
import { useParams, Link, useLocation } from "react-router-dom";
import closeSvg from "../../images/sprite.svg";
import { addToFavorite, removeFromFavorite } from "../../redux/reducer";
import Loader from "../Loader/Loader";
import { Container } from "../Container/Container";

const MovieDetailsModal = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const currentMovie = useSelector(selectCurrentMovie);
  const favorites = useSelector(selectFavorites);
  const [inList, setInList] = useState(false);
  const isLoading = useSelector(selectIsLoading);
  const location = useLocation();
  const linkBack = useRef(location.state?.from ?? "/");

  useEffect(() => {
    const exist = favorites?.findIndex((el) => el.id === currentMovie.id);
    exist >= 0 ? setInList(true) : setInList(false);
  }, [favorites, currentMovie]);

  useEffect(() => {
    dispatch(getDetails(movieId));
  }, [dispatch, movieId]);

  return (
    <>
      <Container>
        <Link style={{ padding: "10px" }} to={linkBack.current}>
          <ButtonBack>Go back</ButtonBack>
        </Link>
        {isLoading ? (
          <Loader />
        ) : (
          <ModalDetailsContainer>
            <div>
              <ModalPoster
                src={`https://image.tmdb.org/t/p/w780${currentMovie.poster_path}`}
                alt={currentMovie.original_title}
              />
            </div>
            <div>
              <TitleMovie>{currentMovie.original_title}</TitleMovie>
              <AboutMovieContainer>
                <SubTitleMovie>Vote/Votes</SubTitleMovie>
                <SubTitleMovieDesc>{`${currentMovie.vote_average}/${currentMovie.vote_count}`}</SubTitleMovieDesc>
              </AboutMovieContainer>
              <AboutMovieContainer>
                <SubTitleMovie>Popularity</SubTitleMovie>
                <SubTitleMovieDesc>{currentMovie.popularity}</SubTitleMovieDesc>
              </AboutMovieContainer>
              <AboutMovieContainer>
                <SubTitleMovie>Genre</SubTitleMovie>
                <div>
                  {currentMovie?.genres?.map((el) => (
                    <SubTitleMovieDesc key={el.id}>{el.name}</SubTitleMovieDesc>
                  ))}
                </div>
              </AboutMovieContainer>
              <div>
                <SubTitleMovie>ABOUT</SubTitleMovie>
                <MovieDesc>{currentMovie.overview}</MovieDesc>
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
            </div>
          </ModalDetailsContainer>
        )}
      </Container>
    </>
  );
};

export default MovieDetailsModal;
