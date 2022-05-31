import { Grid, ThemeProvider, useMediaQuery } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { PageProps } from "gatsby";
import React, { useState } from "react";
import { useKnnectTheme } from "../../themes/mainTheme";
import HelmetHeader from "./components/HelmetHeader";
import PageHeader from "../PageHeader/PageHeader";

const Base: React.FC<PageProps> = (props) => {
  const { children } = props;
  const isUserPrefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [isDarkMode, setIsDarkMode] = useState(isUserPrefersDarkMode);
  const theme = useKnnectTheme(isDarkMode);
  return (
    <React.Fragment>
      <HelmetHeader />
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="stretch"
        >
          <Grid item>
            <PageHeader isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          </Grid>
          <Grid item md={12}>
            {children}
          </Grid>
        </Grid>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Base;
