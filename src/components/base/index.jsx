import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Header from "./Header"
import Footer from "./Footer"
import Grid from "@material-ui/core/Grid"

import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => {
  return ({
    root: {
      flexGrow: 1,
    },
  })
})


export default props => {
  const { children, title } = props
  const classes = useStyles()
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="stretch"
        >
          <Grid item>
            <Header
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
              title={title}
            />
          </Grid>
          <Grid item md={12}>
            {children}
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  )
}
