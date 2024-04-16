import { Container } from "../Container/Container";
import sprite from "../../images/sprite.svg";
import {
  FooterWrapper,
  TextFooterWrapper,
  TextFooter,
  FooterIconLove,
  FooterList,
  FooterLink,
  FooterIconSocial,
  FooterSection,
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterWrapper>
          <TextFooterWrapper>
            <TextFooter>2024 | Developed with </TextFooter>
            <FooterIconLove>
              <use href={`${sprite}#icon-heart`}></use>
            </FooterIconLove>
          </TextFooterWrapper>
          <FooterList>
            <li>
              <FooterLink
                href="https://www.linkedin.com/in/olha-izbash"
                target="_blank">
                <FooterIconSocial>
                  <use href={`${sprite}#icon-inkedin`}></use>
                </FooterIconSocial>
              </FooterLink>
            </li>
            <li>
              <FooterLink href="https://github.com/olhaizbash" target="_blank">
                <FooterIconSocial>
                  <use href={`${sprite}#icon-github`}></use>
                </FooterIconSocial>
              </FooterLink>
            </li>
          </FooterList>
        </FooterWrapper>
      </Container>
    </FooterSection>
  );
};

export default Footer;
