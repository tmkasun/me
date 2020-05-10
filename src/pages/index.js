import React from "react"
import Base from "../components/base/index"
import Link from "../components/base/KLink"
import MyTitle from "../components/landing/MyTitle"
import ItemSection from "../components/landing/ItemSection"
import { makeStyles } from "@material-ui/core/styles"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { graphql } from "gatsby"
import Grid from "@material-ui/core/Grid"
import Avatar from "@material-ui/core/Avatar"
import Divider from "@material-ui/core/Divider"

import logo from "../../static/images/tmkasun.jpeg"
import myAvatar from "../../static/images/me.svg"
import openSource from '../../static/images/open_source.svg'
import blog from '../../static/images/blog.svg'
import projects from '../../static/images/current_projects.svg'

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginTop: "28px",
    display: 'block'
  },
  avatarRoot: {
    justifyContent: 'center',
    display: 'flex'
  },
  icons: {
    width: isXS => isXS ? '70px' : '100px',
    height: isXS => isXS ? '70px' : '100px',
  },
  wso2: {
    color: theme.palette.type === 'light' ? 'green' : '#ff7300'
  },
}))

export default props => {
  const { data } = props
  const {
    scenarios: { edges },
    solutions,
  } = data
  const isXS = useMediaQuery('(min-width:600px)'); // when size become xs https://material-ui.com/customization/breakpoints/
  const classes = useStyles(!isXS)
  return (
    <Base>
      <Grid container spacing={0} direction="row" justify="center" alignItems="center">
        <Grid item md={5} sm={5} xs={5} />
        <Grid className={classes.avatarRoot} item md={2} sm={2} xs={2}>
          <Avatar alt="Kasun Thennakoon" src={logo} className={classes.large} />
        </Grid>
        <Grid item md={5} sm={5} xs={5} />

        <Grid item md={3} sm={1} xs={false} />
        <Grid item md={6} sm={10} xs={12}>
          <MyTitle />
          <Divider />
          <ItemSection icon={myAvatar} title='Me' description={
            <>
            My name is <Link href="https://www.google.com/in/tmkasun">Kasun Thennakoon</Link>, I am both a programmer and a web developer living in a beautiful island nation called
            <Link href="https://www.lonelyplanet.com/sri-lanka">
          Sri Lanka.
          </Link>
          I love listening to music, watch documentries and do swimming, cycling, and many other silly things.
          <br/>
          Here how it's looks like in a <Link href="https://tmkasun.github.io/">
          Timeline
          </Link>

            </>
          } />

          <ItemSection icon={projects} title='Current projects' description={
            <>

          I have a strong interest in web technologies and currently I am orchestrating the Web Portal developments in WSO2 API Manager, Focusing on sleek & modern API Management experience for the users. We recently <Link href="https://medium.com/@tmkasun/wso2-api-manager-new-look-27a186bc83d5">revamped</Link> the Web UI of the product adopting the modern JS eco-system.
            </>
          } />
          <ItemSection icon={openSource} title='Open-Source' description={<>
          All of my work is <Link href="https://github.com/tmkasun">Open Source and Free</Link> for anyone to copy, cut, paste, delete, share, steal, or any other verb you could possibly think of, 
          <br/> But please be aware that, most of the <Link href="https://github.com/tmkasun">projects here</Link> are incomplete, 
          and should be seen as prototypes rather than practical implementations. In fact, some projects have been known to instantly crash my computer (due to overwhelming awesomeness), so I've temporarily taken them offline until I have the time to debug them.
          </>} />
          <ItemSection icon={blog} title='Blog' description={
            <>
            I mostly like web technology stuffs, such as Web: development, performance, security and APIs, but I do not restrict myself to a single set of tools or a single operating system. I am always curious to learn more about the hidden details deep inside the technologies. Most of my <Link href="http://blog.knnect.com/">writings</Link> and <Link href="https://gist.github.com/tmkasun">notes</Link> are for my future references but I hope those will help others make use of them as well
          <br/>
            </>
          } />
        </Grid>
        <Grid item md={3} sm={1} xs={false} />
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
