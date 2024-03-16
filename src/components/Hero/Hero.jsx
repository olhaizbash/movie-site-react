import {
  SectionHero,
  HeroTextWrapper,
  HeroTitle,
  HeroParagraph,
  ButtonStart,
} from "./Hero.styled";
import { Container } from "../Container/Container";

const Hero = () => {
  return (
    <SectionHero>
      <Container>
        <HeroTextWrapper>
          <HeroTitle>Let’s Make Your Own Cinema</HeroTitle>
          <HeroParagraph>
            Is a guide to creating a personalized movie theater experience.
            You'll need a projector, screen, and speakers.{" "}
          </HeroParagraph>
        </HeroTextWrapper>
        <ButtonStart>Get Started</ButtonStart>
      </Container>
      <div></div>
    </SectionHero>
  );
};

export default Hero;
