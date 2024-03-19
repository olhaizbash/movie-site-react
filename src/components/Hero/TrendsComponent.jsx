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
            <ButtonStart>Watch trailer</ButtonStart>
            <ButtonStart>More details</ButtonStart>
          </ButtonWrapper>
        </Container>
      </Background>
    </>
  );
};

export default TrendsComponent;
