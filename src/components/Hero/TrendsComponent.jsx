import {
  HeroTextWrapper,
  HeroTitle,
  HeroParagraph,
  ButtonStart,
  Background,
  ButtonWrapper,
  StartsRate,
} from "./Hero.styled";
import { Container } from "../Container/Container";
import Rate from "./Rate";
import { useState } from "react";
import MovieTrailerModal from "./MovieTrailerModal";
import MovieDetailsModal from "./MovieDetailsModal";

const TrendsComponent = ({ trends, timer }) => {
  let currentRate = (((trends.vote_average * 100) / 10) * 5) / 100;
  const [isModalTrailerOpen, setIsModalTrailerOpen] = useState(false);
  const [isModalDetailsOpen, setIsModalDetailsOpen] = useState(false);

  const trailerClick = () => {
    setIsModalTrailerOpen(true);
    clearTimeout(timer);
  };
  const detailsClick = () => {
    setIsModalDetailsOpen(true);
    clearTimeout(timer);
  };

  return (
    <>
      <Background $imgUrl={trends.backdrop_path}>
        <Container>
          <HeroTextWrapper>
            <StartsRate>
              <Rate currentRate={currentRate} />
            </StartsRate>
            <HeroTitle>{trends.title}</HeroTitle>
            <HeroParagraph>{trends.overview}</HeroParagraph>
          </HeroTextWrapper>
          <ButtonWrapper>
            <ButtonStart onClick={trailerClick}>Watch trailer</ButtonStart>
            <ButtonStart onClick={detailsClick}>More details</ButtonStart>
          </ButtonWrapper>
        </Container>
      </Background>
      {isModalTrailerOpen && (
        <MovieTrailerModal
          onClose={() => setIsModalTrailerOpen(false)}
          movieId={trends.id}
        />
      )}
      {isModalDetailsOpen && (
        <MovieDetailsModal
          onClose={() => setIsModalDetailsOpen(false)}
          movieId={trends.id}
        />
      )}
    </>
  );
};

export default TrendsComponent;
