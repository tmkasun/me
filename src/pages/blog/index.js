import React, { useState } from "react"
import Base from "../../components/base/index"
import MyTitle from "../../components/landing/MyTitle"
import { graphql } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider"
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import BlogPreview from "../../components/blog/BlogPreview"

export default props => {
  const { data } = props
  const {
    blogs: { edges },
  } = data;
  const [showDrafts, setShowDrafts] = useState(false);

  return (
    <Base headerProps={{ title: "Kasun Thennakoon's blog" }}>
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
          <FormControlLabel
            control={<Checkbox color="primary" checked={showDrafts} onChange={(e) => setShowDrafts(e.target.checked)} name="show drafts" />}
            label="Show drafts"
          />
          <Divider />
          {edges.map(({ node }) => (
            (showDrafts || !node.frontmatter.draft) && <BlogPreview key={node.id} node={node} />
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
