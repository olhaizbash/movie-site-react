import {
  SectionHero,
  HeroTextWrapper,
  HeroTitle,
  HeroParagraph,
  ButtonStart,
} from "./Hero.styled";

const Hero = () => {
  return (
    <SectionHero>
      <div className="container">
        <HeroTextWrapper>
          <HeroTitle>Let’s Make Your Own Cinema</HeroTitle>
          <HeroParagraph>
            Is a guide to creating a personalized movie theater experience.
            You'll need a projector, screen, and speakers.{" "}
          </HeroParagraph>
        </HeroTextWrapper>
        <ButtonStart>Get Started</ButtonStart>
      </div>
      <div></div>
    </SectionHero>
  );
};

export default Hero;
