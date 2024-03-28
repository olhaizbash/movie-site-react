import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTrailer } from "../../redux/selectors";
import { getTrailer } from "../../redux/movieThunk";
import { Overlay, ModalContent, Video } from "./Hero.styled";

const MovieTrailerModal = ({ onClose, movieId }) => {
  const trailer = useSelector(selectTrailer);
  const dispatch = useDispatch();

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
    dispatch(getTrailer(movieId));
  }, [dispatch, movieId]);

  const videoUrl = `https://www.youtube.com/embed/${trailer}`;

  return (
    <>
      <Overlay onClick={onClose} />
      <ModalContent>
        <Video src={videoUrl} allowFullScreen={true}></Video>
      </ModalContent>
    </>
  );
};

export default MovieTrailerModal;
