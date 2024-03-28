import {
  SectionHero,
  HeroTextWrapper,
  HeroTitle,
  HeroParagraph,
  ButtonStart,
} from "./Hero.styled";
import { NavLink } from "react-router-dom";
import { Container } from "../Container/Container";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrend } from "../../redux/movieThunk";
import { selectTrends } from "../../redux/selectors";
import TrendsComponent from "./TrendsComponent";

const Hero = () => {
  const dispatch = useDispatch();
  const trends = useSelector(selectTrends);
  const [currentMovie, setCurrentMovie] = useState(0);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    dispatch(getTrend());
  }, [dispatch]);

  useEffect(() => {
    const time = setTimeout(() => {
      currentMovie === 19
        ? setCurrentMovie(0)
        : setCurrentMovie(currentMovie + 1);
    }, 10000);

    setTimer(time);

    return () => clearTimeout(timer);
  }, [currentMovie]);

  return (
    <SectionHero>
      {trends !== null && trends?.length > 0 ? (
        <TrendsComponent
          trends={trends[currentMovie]}
          timer={timer}></TrendsComponent>
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
