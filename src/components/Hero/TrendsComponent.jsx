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
import { Link } from "react-router-dom";

const TrendsComponent = ({ trends }) => {
  let currentRate = (((trends.vote_average * 100) / 10) * 5) / 100;

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
            <ButtonStart>
              <Link to={`/trailer/${trends.id}`}>Watch trailer</Link>
            </ButtonStart>
            <ButtonStart>
              <Link to={`/catalog/${trends.id}`}>More details</Link>
            </ButtonStart>
          </ButtonWrapper>
        </Container>
      </Background>
    </>
  );
};

export default TrendsComponent;
