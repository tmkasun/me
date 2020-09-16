import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Tooltip from "@material-ui/core/Tooltip"
import pink from '@material-ui/core/colors/pink';
import Divider from "@material-ui/core/Divider"
import Chip from "@material-ui/core/Chip";
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import Link from "../base/KLink"

dayjs.extend(relativeTime);

const useStyles = makeStyles(theme => {

  const underlineBackgroundColor = theme.palette.type === "light" ? '#fbff00ab' : '#907e01'
  return {
    icons: {
      width: isXS => (isXS ? "70px" : "100px"),
      height: isXS => (isXS ? "70px" : "100px"),
    },
    dividerRoot: {
      width: '4px',
      backgroundColor: theme.palette.type === "light" ? pink[200] : pink[100],

    },
    underline: {
      flex: 1,
      fontSize: '2em',
      lineHeight: '1.2',
      textDecoration: 'none',
      backgroundImage: `linear-gradient(to right, ${underlineBackgroundColor} 0, ${underlineBackgroundColor} 100%)`,
      backgroundPosition: '0 1.2em',
      backgroundSize: '0 100%',
      backgroundRepeat: 'no-repeat',
      transition: 'background .5s',
      backgroundPosition: '0 -0.1em',
      '&:hover': {
        backgroundSize: '100% 100%'
      }
    }
  }
})

const BlogPreview = props => {
  const {
    node: { fields, frontmatter, timeToRead },
    marginTop,
  } = props

  const isXS = useMediaQuery("(min-width:600px)") // when size become xs https://material-ui.com/customization/breakpoints/
  const classes = useStyles(!isXS)
  return (
    <Box mt={marginTop}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        spacing={1}
      >
        <Divider classes={{ root: classes.dividerRoot }} orientation="vertical" flexItem />
        <Grid item md={1} sm={1} xs={false} />
        <Grid item md={7} sm={8} xs={9}>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
            spacing={2}
          >
            <Grid item>
              <Link target='_self' href={`/blogs${fields.slug}`}>
                <Typography className={classes.underline} variant="h5">{frontmatter.title}</Typography>
              </Link>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                <Box fontWeight="fontWeightLight" fontStyle="oblique">
                  {frontmatter.summary}
                </Box>
                <Typography variant="caption" display="block" gutterBottom>
                  <Box display="flex" flexDirection="row" justifyContent="space-between">
                    <Box fontFamily="Monospace" fontWeight="fontWeightBold" fontSize={13} color="text.secondary">
                      {timeToRead} {`min${timeToRead > 1 ? 's' : ''}`} read
                    </Box>
                    <Box>
                      {frontmatter.draft && <Chip label="Draft" variant="outlined" color="secondary" size="small" />}
                    </Box>
                  </Box>
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={3} sm={2} xs={2}>
          <Box display="flex" justifyContent="flex-end">
            <Typography variant="caption">
              <Tooltip title={frontmatter.date} placement="top-start">
                <i> {dayjs().to(dayjs(frontmatter.date, "MMMM DD, YYYY"))}</i>
              </Tooltip>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

BlogPreview.defaultProps = { marginTop: 10 }

export default BlogPreview
