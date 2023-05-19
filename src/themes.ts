import { PaletteMode, ThemeOptions } from "@mui/material";
import { red } from "@mui/material/colors";

// Create a theme instance.
const lightTheme: ThemeOptions = {
    palette: {
        primary: {
            main: "#00559c",
        },
        secondary: {
            main: "#19857b",
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "#fff",
        },
    },
};

const darkTheme: ThemeOptions = {
    palette: {
        primary: {
            main: "#00ffbe",
        },
        secondary: {
            main: "#19857b",
        },
        error: {
            main: red.A400,
        },
        background: {
            default: "#252631",
        },
    },
};

export const getPreferredTheme = (mode: PaletteMode): ThemeOptions => ({
    palette: {
        mode,
        ...(mode === "light" ? lightTheme.palette : darkTheme.palette),
    },
});

export default lightTheme;
