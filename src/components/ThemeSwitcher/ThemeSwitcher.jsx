import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set } from "../../redux/themeSlice";
import sprite from "../../images/sprite.svg";
import {
  ToggleContainer,
  TogglerIconDark,
  TogglerIconLight,
} from "./ThemeSwitcher.styled";
import { selectTheme } from "../../redux/selectors";

export const ThemeSwitcher = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();
  const [isToggled, setToggle] = useState(true);

  const handleOnClick = () => {
    const currentTheme = theme === "light" ? "dark" : "light";
    dispatch(set(currentTheme));

    setToggle(!isToggled);
  };

  return (
    <ToggleContainer onClick={handleOnClick}>
      {theme === "light" && (
        <TogglerIconLight>
          <use href={`${sprite}#icon-sun`}></use>
        </TogglerIconLight>
      )}
      {theme === "dark" && (
        <TogglerIconDark>
          <use href={`${sprite}#icon-moon`}></use>
        </TogglerIconDark>
      )}
    </ToggleContainer>
  );
};
