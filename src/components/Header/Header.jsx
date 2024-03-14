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
  ThemeSwitcher,
  IconMoon,
  IconSun,
} from "./Header.styled";
import iconLogo from "../../../public/favicon.svg";
import sprite from "../../images/sprite.svg";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="container">
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
          <ThemeSwitcher>
            <IconMoon>
              <use href={`${sprite}#icon-moon`}></use>
            </IconMoon>
            <IconSun>
              <use href={`${sprite}#icon-sun`}></use>
            </IconSun>
          </ThemeSwitcher>
        </HeaderContainer>
        <Backdrop
          className={isMenuOpen ? "backdrop-open" : ""}
          onClick={(e) => {
            e.target === e.currentTarget
              ? setIsMenuOpen(!isMenuOpen)
              : setIsMenuOpen(true);
          }}></Backdrop>
      </div>
    </header>
  );
};

export default Header;
