import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoading, selectTrailer } from "../../redux/selectors";
import { getTrailer } from "../../redux/movieThunk";
import {
  Overlay,
  ModalContentTrailer,
  CloseBtn,
  CloseIcon,
} from "./Hero.styled";
import ReactPlayer from "react-player/youtube";
import Loader from "../Loader/Loader";
import { useParams, Link, useLocation } from "react-router-dom";
import closeSvg from "../../images/sprite.svg";

const MovieTrailerModal = () => {
  const { movieId } = useParams();
  const trailer = useSelector(selectTrailer);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const location = useLocation();
  const linkBack = useRef(location.state?.from ?? "/");

  useEffect(() => {
    dispatch(getTrailer(movieId));
  }, [dispatch, movieId]);

  const videoUrl = `https://www.youtube.com/embed/${trailer}`;

  return (
    <>
      <Overlay />
      <ModalContentTrailer>
        <Link to={linkBack.current}>
          <CloseBtn>
            <CloseIcon>
              <use href={`${closeSvg}#icon-outline`}></use>
            </CloseIcon>
          </CloseBtn>
        </Link>
        {isLoading ? (
          <Loader />
        ) : (
          <ReactPlayer url={videoUrl} controls></ReactPlayer>
        )}
      </ModalContentTrailer>
    </>
  );
};

export default MovieTrailerModal;
