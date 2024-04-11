import {
  HeaderContainer,
  LogoContainer,
  Logo,
  LogoText,
  ButtonMenu,
  Nav,
  NavList,
  NavListItem,
  NavListPath,
  Backdrop,
} from "./Header.styled";
import { Container } from "../Container/Container";
import iconLogo from "../../../public/favicon.svg";
import { useEffect, useState } from "react";
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    isMenuOpen
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [isMenuOpen]);

  return (
    <header>
      <Container>
        <HeaderContainer>
          <LogoContainer to="/">
            <Logo>
              <use href={iconLogo + "#logo"}></use>
            </Logo>
            <LogoText>Cinemania</LogoText>
          </LogoContainer>
          <Nav className={isMenuOpen ? "nav-active" : ""}>
            <NavList>
              <NavListItem>
                <NavListPath
                  to="/"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}>
                  Home
                </NavListPath>
              </NavListItem>
              <NavListItem>
                <NavListPath
                  to="/catalog"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}>
                  Catalog
                </NavListPath>
              </NavListItem>
              <NavListItem>
                <NavListPath
                  to="/mylibrary"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}>
                  My library
                </NavListPath>
              </NavListItem>
            </NavList>
          </Nav>
          <ButtonMenu
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}>
            Menu
          </ButtonMenu>
          <ThemeSwitcher />
        </HeaderContainer>
        <Backdrop
          className={isMenuOpen ? "backdrop-open" : ""}
          onClick={(e) => {
            e.target === e.currentTarget
              ? setIsMenuOpen(!isMenuOpen)
              : setIsMenuOpen(true);
          }}></Backdrop>
      </Container>
    </header>
  );
};

export default Header;
