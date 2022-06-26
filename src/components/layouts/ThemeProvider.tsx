import { createContext, ReactNode, useContext, useEffect } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  useMediaQuery,
  createTheme,
} from "@mui/material";
import React from "react";
import theme from "../../theme";

const DARK_SCHEME_QUERY = "(prefers-color-scheme: dark)";

type ThemeMode = "light" | "dark";
interface ThemeContextType {
  themeMode: ThemeMode;
  toggleTheme: () => void;
}
const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);
const useThemeContext = () => useContext(ThemeContext);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const isDarkOS = useMediaQuery(DARK_SCHEME_QUERY);
  
  const [themeMode, setThemeMode] = React.useState<ThemeMode>(
    isDarkOS ? "dark" : "light"
  );
  useEffect(() => {
    setThemeMode(isDarkOS ? "dark" : "light");
  }, [isDarkOS]);
  const toggleTheme = () => {
    switch (themeMode) {
      case "light":
        setThemeMode("dark");
        break;
      case "dark":
        setThemeMode("light");
        break;
      default:
    }
  };

  const modeAwareTheme = React.useMemo(() => {
    const themeX = { ...theme };
    if (themeX.palette) {
      themeX.palette.mode = themeMode;
    }
    return createTheme(themeX);
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <MuiThemeProvider theme={modeAwareTheme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export { useThemeContext, ThemeProvider };
export default ThemeProvider;
