import React from "react";
import {
  Avatar,
  Box,
  Divider,
  Grid,
  styled,
  Tooltip,
  useMediaQuery,
  Zoom,
} from "@mui/material";

import amazon from "../public/images/amazon.png";
import myAvatar from "../public/images/me.svg";
import openSource from "../public/images/open_source.svg";
import blog from "../public/images/blog.svg";
import projects from "../public/images/current_projects.svg";
import MyTitle from "../src/components/atomic/MyTitle";
import Link from "../src/components/atomic/Link";
import ItemSection from "../src/components/home/ItemSection";

const WSO2Text = styled("span")({ color: "#ff8300" });
const AmazonText = styled("span")`
 color: ${props => props.theme.palette.mode === "light" ? "#aa6700" : "#ff9900"} `;
const StyledAWS = styled("img")`
  position: absolute;
  bottom: -7px;
  left: 0px;
  width: 33px;
`;

const LandingPage: React.FC = () => {
  const isXS = useMediaQuery("(min-width:600px)"); // when size become xs https://material-ui.com/customization/breakpoints/
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item md={5} sm={5} xs={5} />
      <Grid
        sx={{
          justifyContent: "center",
          display: "flex",
        }}
        item
        md={2}
        sm={2}
        xs={2}
      >
        <Avatar
          alt="Kasun Thennakoon"
          src="/images/tmkasun.jpeg"
          sx={(theme) => ({
            width: theme.spacing(15),
            height: theme.spacing(15),
            mt: 3,
            display: "block",
          })}
        />
      </Grid>
      <Grid item md={5} sm={5} xs={5} />

      <Grid item md={3} sm={1} xs={false} />
      <Grid item md={6} sm={10} xs={12}>
        <MyTitle title="Kasun Thennakoon">
          Front-end Engineer at
          <Tooltip
            placement="bottom-end"
            TransitionComponent={Zoom}
            title="Amazon Web Services"
          >
            <Box ml={0.7} display="inline" position="relative">
              <AmazonText>AWS</AmazonText>
              <StyledAWS alt='Amazon Arrow' src={amazon.src} />
            </Box>
          </Tooltip>
          {/* <br/>Ex-<WSO2Text>WSO2</WSO2Text> */}
          {/* <Tooltip
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
          </Tooltip> */}
        </MyTitle>
        <Divider />
        <ItemSection icon={myAvatar.src} title="Me">
          I am{" "}
          <Link target="_blank" href="https://www.linkedin.com/in/tmkasun">
            Kasun Thennakoon
          </Link>
          , a programmer and web developer based in Toronto, Canada. I am
          originally from{" "}
          <Link target="_blank" href="https://www.lonelyplanet.com/sri-lanka">
            Sri Lanka
          </Link>
          , which gives me a different viewpoint in my work. Besides
          programming, I enjoy music, documentaries, and fun activities like
          swimming and cycling.
          {/* Here is my Timeline{" "}
          <Link target="_blank" href="https://tmkasun.github.io/">
            Timeline
          </Link> */}
        </ItemSection>

        <ItemSection icon={projects.src} title="Experience">
          I have a strong interest in web technologies, and currently, I am
          focused on learning the ins and outs of the
          <Link target="_blank" href="https://aws.amazon.com/sns/">
            {" "}
            AWS SNS console
          </Link>
          . In my previous role, I had the opportunity to lead the development
          of web portals within the{" "}
          <Link target="_blank" href="https://wso2.com/api-manager/">
            {" "}
            WSO2 API Manager
          </Link>{" "}
          product. My main objective was to create a sleek and modern API
          management experience for users.
        </ItemSection>
        <ItemSection icon={openSource.src} title="Open-Source">
          All of my work is{" "}
          <Link target="_blank" href="https://github.com/tmkasun">
            Open Source and Free
          </Link>{" "}
          for anyone to copy, cut, paste, delete, share, steal, or any other
          verb you could possibly think of,
          <br /> But please be aware that, most of the{" "}
          <Link target="_blank" href="https://github.com/tmkasun">
            projects here
          </Link>{" "}
          are incomplete, and should be seen as prototypes rather than practical
          implementations. In fact, some projects have been known to instantly
          crash my computer (due to overwhelming awesomeness), so I've
          temporarily taken them offline until I have the time to debug them.
        </ItemSection>
        <ItemSection icon={blog.src} title="Blog">
          My primary area of interest lies in web technologies, encompassing web
          development, performance, security, and APIs. However, I do not limit
          myself to a particular set of tools, as I always strive to expand my
          knowledge base. I have a strong desire to dig deeper into the inner
          workings of these technologies and often take{" "}
          <Link target="_blank" href="http://me.knnect.com/blog">
            detailed notes
          </Link>{" "}
          for my own future reference. I also hope that{" "}
          <Link target="_blank" href="https://gist.github.com/tmkasun">
            these notes
          </Link>{" "}
          can be helpful to others who want to learn more about these topics.
          <br />
        </ItemSection>
      </Grid>
      <Grid item md={3} sm={1} xs={false} />
    </Grid>
  );
};

export default LandingPage;
