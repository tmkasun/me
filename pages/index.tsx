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
import { blue } from "@mui/material/colors";

import logo from "../public/images/tmkasun.jpeg";
import myAvatar from "../public/images/me.svg";
import openSource from "../public/images/open_source.svg";
import blog from "../public/images/blog.svg";
import projects from "../public/images/current_projects.svg";
import MyTitle from "../src/components/home/MyTitle";
import Link from "../src/Link";
import ItemSection from "../src/components/home/ItemSection";

const WSO2Text = styled("span")({ color: "#ad5900" });

const LandingPage: React.FC = () => {
  const isXS = useMediaQuery("(min-width:600px)"); // when size become xs https://material-ui.com/customization/breakpoints/
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
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
          src={logo.src}
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
          Technical Lead at <WSO2Text>WSO2</WSO2Text> working on product{" "}
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
        <ItemSection icon={myAvatar.src} title="Me">
          My name is{" "}
          <Link target="_blank" href="https://www.linkedin.com/in/tmkasun">
            Kasun Thennakoon
          </Link>
          , I am both a programmer and a web developer living in a beautiful
          island nation called Sri Lanka.
          {/* https://www.lonelyplanet.com/sri-lanka */}
          I love listening to music, watch documentries and do swimming,
          cycling, and many other silly things.
          <br />
          Here is my{" "}
          <Link target="_blank" href="https://tmkasun.github.io/">
            Timeline
          </Link>
        </ItemSection>

        <ItemSection icon={projects.src} title="Current projects">
          I have a strong interest in web technologies and currently I am
          orchestrating the Web Portal developments in WSO2 API Manager,
          Focusing on sleek & modern API Management experience for the users. We
          recently{" "}
          <Link
            target="_blank"
            href="https://medium.com/@tmkasun/wso2-api-manager-new-look-27a186bc83d5"
          >
            revamped
          </Link>{" "}
          the Web UI of the product adopting the modern JS eco-system.
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
          I mostly like web technology stuffs, such as Web: development,
          performance, security and APIs, but I do not restrict myself to a
          single set of tools or a single operating system. I am always curious
          to learn more about the hidden details deep inside the technologies.
          Most of my{" "}
          <Link target="_blank" href="http://blog.knnect.com/">
            writings
          </Link>{" "}
          and{" "}
          <Link target="_blank" href="https://gist.github.com/tmkasun">
            notes
          </Link>{" "}
          are for my future references but I hope those will help others make
          use of them as well
          <br />
        </ItemSection>
      </Grid>
      <Grid item md={3} sm={1} xs={false} />
    </Grid>
  );
};

export default LandingPage;
