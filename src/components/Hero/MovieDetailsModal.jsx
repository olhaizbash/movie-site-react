import { Overlay, ModalContent } from "./Hero.styled";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../redux/movieThunk";
import { selectCurrentMovie } from "../../redux/selectors";

const MovieDetailsModal = ({ onClose, movieId }) => {
  const dispatch = useDispatch();
  const currentMovie = useSelector(selectCurrentMovie);

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
        <div>
          container
          <div>Picture</div>
          <div>
            Text
            <h1>Name</h1>
            <h2>Vote</h2>
            <h2>Popularity</h2>
            <h2>Genre</h2>
            <h2>About</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              molestias quis? Soluta alias ut sint corrupti asperiores adipisci
              rerum quam illo porro quia voluptate eaque nihil labore, eveniet
              velit itaque.
            </p>
            <button>Add to my library</button>
          </div>
        </div>
      </ModalContent>
    </>
  );
};

export default MovieDetailsModal;
