import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import { Link, graphql, useStaticQuery } from "gatsby"
import Button from '@material-ui/core/Button';


import IconButton from "@material-ui/core/IconButton"
import NightsStayIcon from "@material-ui/icons/NightsStay"
import WbSunnyIcon from "@material-ui/icons/WbSunny"
import { amber, cyan,lightBlue } from "@material-ui/core/colors"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  sunLight: {
    color: amber[200]
  },
  links: {
    color: theme.palette.type === 'light' ? lightBlue[600] : cyan[200]
  }
}))

export default function Header(props) {
  const { isDarkMode, setIsDarkMode } = props
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  const classes = useStyles()
  const oClick = event => {
    setIsDarkMode(!isDarkMode)
  }
  return (
    <div className={classes.root}>
      <AppBar
        elevation={0}
        className={classes.appbarColor}
        color="inherit"
        position="static"
      >
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <Grid item>
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                spacing={2}
              >
                <Grid item>
                  <Link activeStyle={{ color: "read" }} to="/">
                    <Button className={classes.links}>
                      Home
                    </Button>
                  </Link>
                </Grid>

                <Grid item>
                  <Link activeStyle={{ color: "read" }} to="/blog">
                    <Button className={classes.links}>
                      Blog
                    </Button>
                  </Link>
                </Grid>

                <Grid item>
                  <Link activeStyle={{ color: "read" }} to="/docs">
                    <Button className={classes.links}>

                      Documentation
                    </Button>
                  </Link>
                </Grid>

                <Grid item>
                  <IconButton onClick={oClick} size="small">
                    {isDarkMode ? (
                      <WbSunnyIcon className={classes.sunLight} fontSize="small" />
                    ) : (
                        <NightsStayIcon style={{ color: 'black' }} fontSize="small" />
                      )}
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}
