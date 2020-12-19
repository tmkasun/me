import React, { useState, useEffect } from "react"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import useMediaQuery from "@material-ui/core/useMediaQuery"

/** 
 * title prop is there for backward compatibility, Use headerProps for populating SEO info
*/
const Wrapper = props => {
    const { element } = props
    // Note: If want to automatically set the system/OS theme preference,
    // Use the `useMediaQuery` hook to get the os preference and set it to initial prefersDarkMode
    // variable, Simply remove = false and set to = useMediaQuery('(prefers-color-scheme: dark)')
    // :) 
    const prefersDarkMode = false;//useMediaQuery('(prefers-color-scheme: dark)')
    const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode)
    useEffect(() => {
        setIsDarkMode(prefersDarkMode)
    }, [prefersDarkMode])
    const theme = React.useMemo(
        () =>
            createMuiTheme({
                // overrides: {
                //   MuiCssBaseline: {
                //     '@global': {
                //       body: {
                //         backgroundColor: '#ffffff',
                //       },
                //     },
                //   },
                // }, // For reference how to override global styles
                typography: {
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    button: {
                        textTransform: 'none',
                    },
                },
                palette: {
                    background: {
                        default: isDarkMode ? '#303030' : "#ffffff"
                    },
                    type: isDarkMode ? 'dark' : 'light',
                },
            }),
        [isDarkMode],
    );
    theme.setIsDarkMode = setIsDarkMode;
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {element}
        </ThemeProvider>
    )
}

export default ({ element }) => {
    return <Wrapper element={element} />
}