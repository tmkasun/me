import React from "react"
import Base from "../../components/base/index"
import MyTitle from "../../components/landing/MyTitle"
import { graphql } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider"

import BlogPreview from "../../components/blog/BlogPreview"

export default props => {
  const { data } = props
  const {
    blogs: { edges },
  } = data
  return (
    <Base headerProps={{title: "Kasun Thennakoon's blog"}}>
      <Grid
        container
        spacing={0}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item md={3} sm={1} xs={false} />
        <Grid item md={6} sm={10} xs={12}>
          <MyTitle>Kasun Thennakoon's personal Blog</MyTitle>
          <Divider />
          {edges.map(({ node }) => (
            <BlogPreview key={node.id} node={node} />
          ))}
        </Grid>
        <Grid item md={3} sm={1} xs={false} />
      </Grid>
    </Base>
  )
}

// Using GQL aliases
export const query = graphql`
  query {
    blogs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(blog)/(content)/.*.md$/" } },
      sort: {fields: frontmatter___date, order: DESC}
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            relativeDate: date(fromNow: true)
            draft
            summary
            title
          }
          timeToRead
        }
      }
    }
  }
`
