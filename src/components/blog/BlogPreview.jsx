import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Tooltip from "@material-ui/core/Tooltip"
import pink from '@material-ui/core/colors/pink';
import Divider from "@material-ui/core/Divider"
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import Link from "../base/KLink"

dayjs.extend(relativeTime);


const useStyles = makeStyles(theme => ({
  icons: {
    width: isXS => (isXS ? "70px" : "100px"),
    height: isXS => (isXS ? "70px" : "100px"),
  },
  dividerRoot: {
    width: '4px',
    backgroundColor: theme.palette.type === "light" ? pink[200] : pink[100],

  }
}))

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
                <Typography variant="h5">{frontmatter.title}</Typography>
              </Link>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                <Box fontWeight="fontWeightLight" fontStyle="oblique">
                  {frontmatter.summary}
                </Box>
                <Typography variant="caption" display="block" gutterBottom>
                  <Box fontFamily="Monospace" fontWeight="fontWeightBold" fontSize={13} color="text.secondary">
                    {timeToRead} {`min${timeToRead > 1 ? 's' : ''}`} read
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
