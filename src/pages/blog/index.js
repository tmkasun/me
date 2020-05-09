import React from "react"
import Base from "../../components/base/index"
import Scenario from "../../components/landing/Scenario"
// import Solutions from "../../components/landing/Solutions"
import { graphql } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"

export default props => {
  const { data } = props
  const {
    scenarios: { edges },
    solutions,
  } = data
  return (
    <Base>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item md={6} style={{ marginTop: "50px" }}>
          <Typography variant="h5" gutterBottom>
            Explore our payment products and solutions
          </Typography>
        </Grid>
        <Grid item md={7}>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            {edges.map(({ node }) => (
              <Scenario key={node.id} node={node} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Base>
  )
}

// Using GQL aliases
export const query = graphql`
  query {
    scenarios: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(scenarios)/.*.md$/" } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 100)
          id
          frontmatter {
            title
            date(fromNow: true)
            summary
          }
          fields {
            slug
          }
        }
      }
    }
    solutions: markdownRemark(fileAbsolutePath: { regex: "/landing/" }) {
      html
      timeToRead
      frontmatter {
        date(fromNow: true)
        title
      }
    }
  }
`
