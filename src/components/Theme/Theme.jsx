import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { useState, useEffect } from "react";
import { selectTheme } from "../../redux/selectors";

const Theme = ({ children }) => {
  const { lightTheme, darkTheme } = theme;

  const [themeState, setThemeState] = useState(lightTheme);

  const currentTheme = useSelector(selectTheme);

  useEffect(() => {
    setThemeState(currentTheme === "light" ? lightTheme : darkTheme);
  }, [currentTheme, darkTheme, lightTheme]);

  return <ThemeProvider theme={themeState}>{children}</ThemeProvider>;
};

export default Theme;
