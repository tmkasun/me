import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import { Link, graphql, useStaticQuery } from "gatsby"
import Button from '@material-ui/core/Button';
import { Helmet } from "react-helmet";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import IconButton from "@material-ui/core/IconButton"
import NightsStayIcon from "@material-ui/icons/NightsStay"
import WbSunnyIcon from "@material-ui/icons/WbSunny"
import { amber, cyan, lightBlue } from "@material-ui/core/colors"

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
  },
  appBarPaperRoot: {
    backdropFilter: 'blur(4px)',
    backgroundColor: `${theme.palette.background.default}04`
  }
}))

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 2 : 0,
  });
}

/**
 * My web page specific Header component composed using Helmet and Material-UI Appbar
 * For more information about configuring SEO in Gatsby: https://github.com/gatsbyjs/gatsby-starter-default/blob/master/src/components/seo.js#L15
 * @param {Object} props 
 */
export default function Header(props) {
  const { description, lang, title } = props
  const { site } = useStaticQuery(graphql`
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
  const theme = useTheme()
  const isDarkMode = theme.palette.type === 'dark'
  const oClick = event => {
    theme.setIsDarkMode(!isDarkMode)
  }
  return (
    <div className={classes.root}>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title || site.siteMetadata.title}
      >
        <meta charSet="utf-8" />
        <meta name="description" content={description || site.siteMetadata.description} />
      </Helmet>
      <ElevationScroll {...props}>
        <AppBar
          elevation={0}
          classes={{ root: classes.appBarPaperRoot }}
          color="inherit"
        >
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <Link activeStyle={{ color: "read" }} to="/">
                  <Button aria-label="Home" className={classes.links}>
                    Home
                    </Button>
                </Link>
              </Grid>

              <Grid item>
                <Link activeStyle={{ color: "read" }} to="/blog">
                  <Button aria-label="Blog" className={classes.links}>
                    Blog
                    </Button>
                </Link>
              </Grid>

              <Grid item>
                <Link activeStyle={{ color: "read" }} to="/projects">
                  <Button aria-label="Projects" className={classes.links}>
                    Projects
                    </Button>
                </Link>
              </Grid>

              <Grid item>
                <IconButton aria-label="Dark & Light mode" onClick={oClick} size="small">
                  {isDarkMode ? (
                    <WbSunnyIcon className={classes.sunLight} fontSize="small" />
                  ) : (
                      <NightsStayIcon style={{ color: 'black' }} fontSize="small" />
                    )}
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </div>
  )
}

Header.defaultProps = {
  lang: `en`,
  meta: [],
  title: 'My Knnections',
  description: "Kasun Thennakoon's Personal Website including blog post project and many of kasun thennakoon's work",
}