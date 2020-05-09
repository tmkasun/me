import React from "react"
import { graphql } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"

import Base from "../../components/base/index"

export default ({ data }) => {
  const { markdownRemark } = data
  const {
    frontmatter: { date, title },
    html,
    timeToRead,
  } = markdownRemark
  return (
    <Base>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
      >
        <Grid item>
          <Box pt={3} />
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Grid item md={6}>
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
          <Grid item md={6}>
            <div dangerouslySetInnerHTML={{ __html: html }} />
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
