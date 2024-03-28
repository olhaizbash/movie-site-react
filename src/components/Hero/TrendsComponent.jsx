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

const TrendsComponent = ({ trends, timer }) => {
  let currentRate = (((trends.vote_average * 100) / 10) * 5) / 100;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const trailerClick = () => {
    setIsModalOpen(true);
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
            <ButtonStart>More details</ButtonStart>
          </ButtonWrapper>
        </Container>
      </Background>
      {isModalOpen && (
        <MovieTrailerModal
          onClose={() => setIsModalOpen(false)}
          movieId={trends.id}
        />
      )}
    </>
  );
};

export default TrendsComponent;
