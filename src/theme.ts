import { ThemeOptions } from "@mui/material";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme: ThemeOptions = {
  palette: {
    primary: {
      main: "#8398fb",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
};

export default theme;
