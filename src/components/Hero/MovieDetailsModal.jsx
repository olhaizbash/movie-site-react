import {
  Overlay,
  ModalContent,
  ModalDetailsContainer,
  CloseBtn,
  CloseIcon,
  ModalPoster,
  TitleMovie,
  AboutMovieContainer,
  SubTitleMovie,
  SubTitleMovieDesc,
  MovieDesc,
  AddLibraryButton,
} from "./Hero.styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../redux/movieThunk";
import { selectCurrentMovie, selectFavorites } from "../../redux/selectors";
import closeSvg from "../../images/sprite.svg";
import { addToFavorite, removeFromFavorite } from "../../redux/reducer";

const MovieDetailsModal = ({ onClose, movieId }) => {
  const dispatch = useDispatch();
  const currentMovie = useSelector(selectCurrentMovie);
  const favorites = useSelector(selectFavorites);
  const [inList, setInList] = useState(false);

  useEffect(() => {
    const exist = favorites.findIndex((el) => el.id === currentMovie.id);
    exist >= 0 ? setInList(true) : setInList(false);
  }, [favorites, currentMovie]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    dispatch(getDetails(movieId));
  }, [dispatch, movieId]);

  return (
    <>
      <Overlay onClick={onClose} />
      <ModalContent>
        <CloseBtn>
          <CloseIcon onClick={onClose}>
            <use href={`${closeSvg}#icon-outline`}></use>
          </CloseIcon>
        </CloseBtn>
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
      </ModalContent>
    </>
  );
};

export default MovieDetailsModal;
