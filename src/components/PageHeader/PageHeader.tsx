import { AppBar, Box, Button, Grid, IconButton, Toolbar } from "@mui/material";
import { Link } from "gatsby";
import React from "react";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ElevationScroll from "./components/ElevationScroll";

type PageHeaderProps = {
  setIsDarkMode: (isDarkMode: boolean) => void;
  isDarkMode: boolean;
};
const PageHeader: React.FC<PageHeaderProps> = ({
  setIsDarkMode,
  isDarkMode,
}) => {
  const oClick = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <Box>
      <ElevationScroll>
        <AppBar elevation={0} color="inherit">
          <Toolbar>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <Link activeStyle={{ color: "read" }} to="/">
                  <Button aria-label="Home">Home</Button>
                </Link>
              </Grid>

              <Grid item>
                <Link activeStyle={{ color: "read" }} to="/blog">
                  <Button aria-label="Blog">Blog</Button>
                </Link>
              </Grid>

              <Grid item>
                <Link activeStyle={{ color: "read" }} to="/projects">
                  <Button aria-label="Projects">
                    Projects
                  </Button>
                </Link>
              </Grid>

              <Grid item>
                <IconButton
                  aria-label="Dark & Light mode"
                  onClick={oClick}
                  size="small"
                >
                  {isDarkMode ? (
                    <WbSunnyIcon
                      fontSize="small"
                    />
                  ) : (
                    <DarkModeIcon
                      style={{ color: "black" }}
                      fontSize="small"
                    />
                  )}
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </Box>
  );
};

export default PageHeader;
