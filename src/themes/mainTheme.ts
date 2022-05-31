import { blue, red } from "@mui/material/colors";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import { useMemo } from "react";

declare module "@mui/material/styles" {
  interface Theme {
    knnect: {
      main: string;
    };
  }

  interface ThemeOptions {
    knnect?: {
      main?: string;
    };
  }
}

export const useKnnectTheme = (isDarkMode: boolean) => {
  return useMemo(() => {
    const modeAwareTheme = { ...defaultTheme };
    if (modeAwareTheme.palette) {
      modeAwareTheme.palette.mode = isDarkMode ? "dark" : "light";
    }
    return createTheme(modeAwareTheme);
  }, [isDarkMode]);
};

const defaultTheme: ThemeOptions = {
  palette: {
    primary: {
      main: "#ff0000",
    },
    secondary: {
      main: "#00ff00",
    },
    error: {
      main: red.A400,
    },
  },
  knnect: {
    main: blue.A400,
  },
};

const mainTheme = createTheme(defaultTheme);

export default mainTheme;
