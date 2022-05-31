import React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Tooltip,
  Zoom,
} from "@mui/material";
import { graphql, PageProps } from "gatsby";
import styled from "@emotion/styled";

import LandingItem from "../components/LandingItem";
// TODO : https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/
import logo from "../../static/images/tmkasun.jpeg";
import myAvatar from "../../static/images/me.svg";
import openSource from "../../static/images/open_source.svg";
import blog from "../../static/images/blog.svg";
import projects from "../../static/images/current_projects.svg";
import { MyTitle } from "../components/MyTitle";
import KLink from "../components/KLink";
import { blue } from "@mui/material/colors";

const Span = styled.span`
  color: "#ad5900";
`;
type DataProps = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
};
const Landing: React.FC<PageProps<DataProps>> = (props) => {
  return (
    <Container maxWidth="sm">
      <Grid container spacing={0}>
        <Grid item md={5} sm={5} xs={5} />
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
          item
          md={2}
          sm={2}
          xs={2}
        >
          <Avatar
            alt="Kasun Thennakoon"
            src={logo}
            sx={{
              width: 15,
              height: 15,
              marginTop: "28px",
              display: "block",
            }}
          />
        </Grid>
        <Grid item md={5} sm={5} xs={5} />

        <Grid item md={3} sm={1} xs={false} />
        <Grid item md={6} sm={10} xs={12}>
          <MyTitle title="Kasun Thennakoon">
            Technical Lead at <Span>WSO2</Span> working on product{" "}
            <Tooltip
              placement="top-end"
              TransitionComponent={Zoom}
              title="API Manager"
            >
              <Box
                sx={(theme) => ({
                  color: theme.palette.mode === "light" ? blue[900] : blue[200],
                })}
                display="inline"
              >
                API-M
              </Box>
            </Tooltip>
          </MyTitle>
          <Divider />
          <LandingItem icon={myAvatar} title="Me">
            <>
              My name is
              <KLink href="https://www.linkedin.com/in/tmkasun">
                Kasun Thennakoon
              </KLink>
              , I am both a programmer and a web developer living in a beautiful
              island nation called Sri Lanka.
              {/* https://www.lonelyplanet.com/sri-lanka */}
              I love listening to music, watch documentries and do swimming,
              cycling, and many other silly things.
              <br />
              Here is my{" "}
              <KLink href="https://tmkasun.github.io/">Timeline</KLink>
            </>
          </LandingItem>

          <LandingItem icon={projects} title="Current projects">
            I have a strong interest in web technologies and currently I am
            orchestrating the Web Portal developments in WSO2 API Manager,
            Focusing on sleek & modern API Management experience for the users.
            We recently{" "}
            <KLink href="https://medium.com/@tmkasun/wso2-api-manager-new-look-27a186bc83d5">
              revamped
            </KLink>
            the Web UI of the product adopting the modern JS eco-system.
          </LandingItem>
          <LandingItem icon={openSource} title="Open-Source">
            All of my work is{" "}
            <KLink href="https://github.com/tmkasun">
              Open Source and Free
            </KLink>{" "}
            for anyone to copy, cut, paste, delete, share, steal, or any other
            verb you could possibly think of,
            <br /> But please be aware that, most of the{" "}
            <KLink href="https://github.com/tmkasun">projects here</KLink> are
            incomplete, and should be seen as prototypes rather than practical
            implementations. In fact, some projects have been known to instantly
            crash my computer (due to overwhelming awesomeness), so I've
            temporarily taken them offline until I have the time to debug them.
          </LandingItem>
          <LandingItem icon={blog} title="Blog">
            I mostly like web technology stuffs, such as Web: development,
            performance, security and APIs, but I do not restrict myself to a
            single set of tools or a single operating system. I am always
            curious to learn more about the hidden details deep inside the
            technologies. Most of my{" "}
            <KLink href="http://blog.knnect.com/">writings</KLink> and{" "}
            <KLink href="https://gist.github.com/tmkasun">notes</KLink> are for
            my future references but I hope those will help others make use of
            them as well
            <br />
          </LandingItem>
        </Grid>
        <Grid item md={3} sm={1} xs={false} />
      </Grid>
    </Container>
  );
};

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Landing;
