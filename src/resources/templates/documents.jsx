import React from "react"
import { graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"
import { cyan,lime, lightBlue } from "@material-ui/core/colors"

import Base from "../../components/base/index"


const useStyles = makeStyles(theme => {
  return ({
    docRoot: {
      '& p': {
        fontSize: '22px',
        fontFamily: 'serif'
      },
      '& a': {
        color: theme.palette.type === 'light' ? lightBlue[500] : cyan['A200']
      },
      '& :not(pre) > code[class*="language-"]': {
        background: theme.palette.type === 'light' ? '#2d2d2d' : lime[100],
        color: theme.palette.type === 'light' ? null: 'rgba(0, 0, 0, 0.87)', 
        padding: '.1em',
        borderRadius: '.3em',
        whiteSpace: 'normal'
      }
    },
  })
})

export default ({ data }) => {
  const { markdownRemark } = data
  const {
    frontmatter: { date, title },
    html,
    timeToRead,
  } = markdownRemark
  const classes = useStyles()

  return (
    <Base headerProps={{ title }}>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
      >
        <Grid xs={12} item>
          <Box pt={3} />
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Grid item md={7} sm={9} xs={11}>
            <Typography variant="h2" gutterBottom>
              {title}
              <Typography
                color="textSecondary"
                variant="subtitle2"
                gutterBottom
              >
                {date} · {timeToRead} min read
              </Typography>
            </Typography>
            <Divider />
          </Grid>
        </Grid>
        <Grid item>
          <Box pt={3} />
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Grid item md={7} sm={9} xs={11}>
            <div className={classes.docRoot} dangerouslySetInnerHTML={{ __html: html }} />
          </Grid>
        </Grid>
      </Grid>
    </Base>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        date(fromNow: true)
        title
      }
    }
  }
`
