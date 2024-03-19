import {
  SectionHero,
  HeroTextWrapper,
  HeroTitle,
  HeroParagraph,
  ButtonStart,
  Background,
  ButtonWrapper,
} from "./Hero.styled";
import { NavLink } from "react-router-dom";
import { Container } from "../Container/Container";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrend } from "../../redux/movieThunk";
import { selectTrends } from "../../redux/selectors";

const Hero = () => {
  const dispatch = useDispatch();
  const trends = useSelector(selectTrends);
  const [currentMovie, setCurrentMovie] = useState(0);

  useEffect(() => {
    dispatch(getTrend());
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      currentMovie === 19
        ? setCurrentMovie(0)
        : setCurrentMovie(currentMovie + 1);
    }, 15000);

    return () => clearTimeout(timer);
  }, [currentMovie]);

  return (
    <SectionHero>
      {trends !== null && trends?.length > 0 ? (
        <>
          <Background $imgUrl={trends[currentMovie].backdrop_path}>
            <Container>
              <HeroTextWrapper>
                <HeroTitle>{trends[currentMovie].title}</HeroTitle>
                <HeroParagraph>{trends[currentMovie].overview}</HeroParagraph>
              </HeroTextWrapper>
              <ButtonWrapper>
                <ButtonStart>Watch trailer</ButtonStart>
                <ButtonStart>More details</ButtonStart>
              </ButtonWrapper>
            </Container>
          </Background>
        </>
      ) : (
        <>
          <Container>
            <HeroTextWrapper>
              <HeroTitle>Let’s Make Your Own Cinema</HeroTitle>
              <HeroParagraph>
                Is a guide to creating a personalized movie theater experience.
                You'll need a projector, screen, and speakers.
              </HeroParagraph>
            </HeroTextWrapper>
            <ButtonStart>
              <NavLink to="/catalog">Get Started</NavLink>
            </ButtonStart>
          </Container>
        </>
      )}
    </SectionHero>
  );
};

export default Hero;
