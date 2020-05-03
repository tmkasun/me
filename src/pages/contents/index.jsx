import React from 'react'
import Base from '../../components/base/index'
import MDTables from '../../components/MDTable'
import { graphql } from 'gatsby'

export default (props) => {
    const {data} = props;
    return (
        <Base>
            <h3> This page lists the available markdown source files</h3>
            <MDTables rows={data.allMarkdownRemark.edges}/>
        </Base>
    )
}


export const query = graphql`
    query {
        allMarkdownRemark {
            edges {
              node {
                id
                excerpt
                wordCount {
                  words
                }
                frontmatter {
                  date(fromNow: true)
                  title
                }
              }
            }
        }
    }
`
