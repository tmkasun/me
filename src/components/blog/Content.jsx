import React from "react"
import { graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Divider from "@material-ui/core/Divider"
import Typography from "@material-ui/core/Typography"
import { cyan, lime, lightBlue } from "@material-ui/core/colors"
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Giscus from '@giscus/react';

import Base from "../../components/base/index"
import Link from "../../components/base/KLink"


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
        background: lime[100],
        color: theme.palette.type === 'light' ? 'black' : 'rgba(0, 0, 0, 0.87)',
        whiteSpace: 'normal',
        'font-size': 'initial'
      },
      '& pre[class*="language-"]': {
        background: '#003767',
      }
    },
  })
})

export default ({ data, path, pageContext: { slug } }) => {
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
          <Box position="fixed">
            <Link target='_self' href={`/blog`}>
              <Tooltip title="Back" placement="right">
                <IconButton aria-label="back" size="small">
                  <ArrowBackIcon style={{ fontSize: 40 }} fontSize="inherit" />
                </IconButton>
              </Tooltip>

            </Link>
          </Box>
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
          <Grid item md={7} sm={9} xs={11}>

            <Box mb={3} mt={4}>
              <Divider />
              <Giscus
                id="my-comments"
                repo="tmkasun/me"
                repoId="MDEwOlJlcG9zaXRvcnkxNTMzODY1MQ=="
                category="General"
                categoryId="DIC_kwDOAOoMm84CPHXb"
                mapping="pathname"
                term="Welcome to @giscus/react component!"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme="light"
                lang="en"
                loading="lazy"
              />
            </Box>
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
