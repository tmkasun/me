import React, {
    JSXElementConstructor,
    PropsWithChildren,
    ReactElement,
} from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import IconButton from "@mui/material/IconButton";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Head from "next/head";
import { Box, styled, useTheme } from "@mui/material";
import Link from "../atomic/Link";
import { amber, cyan, lightBlue } from "@mui/material/colors";
import { useThemeContext } from "./ThemeProvider";
import { useRouter } from "next/router";

function ElevationScroll(props: {
    children: ReactElement<any, string | JSXElementConstructor<any>>;
}) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });
    return React.cloneElement(children, {
        elevation: trigger ? 2 : 0,
    });
}
const span = styled("div")({ flexGrow: 1 });

export default function Header() {
    const { themeMode, toggleTheme } = useThemeContext();
    const router = useRouter();
    const toggleModeHandler: React.MouseEventHandler = (event) => {
        toggleTheme();
    };
    const theme = useTheme();
    const linkStyle = {
        color: theme.palette.mode === "light" ? lightBlue[900] : cyan[200],
    };
    return (
        <>
            <Head>
                <title key="main-title">Kasun Thennakoon</title>
            </Head>
            <ElevationScroll>
                <AppBar
                    position="fixed"
                    elevation={0}
                    sx={(theme) => ({
                        backdropFilter: "blur(4px)",
                        backgroundColor:
                            theme.palette.mode === "light"
                                ? "#f1f1f94a"
                                : `${theme.palette.background.default}cf`,
                    })}
                    color="inherit"
                >
                    <Toolbar>
                        <Grid
                            container
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="center"
                            spacing={2}
                        >
                            <Grid item>
                                <Link underline="none" href="/">
                                    <Button aria-label="Home" sx={linkStyle}>
                                        Home
                                    </Button>
                                </Link>
                            </Grid>

                            <Grid item>
                                <Link underline="none" href="/blog">
                                    <Button
                                        aria-label="Blog"
                                        sx={{
                                            ...linkStyle,
                                            backgroundColor:
                                                router.asPath.includes("/blog")
                                                    ? "rgb(160 212 255 / 27%)"
                                                    : undefined,
                                        }}
                                    >
                                        Blog
                                    </Button>
                                </Link>
                            </Grid>

                            <Grid item>
                                <Link underline="none" href="/projects">
                                    <Button
                                        aria-label="Projects"
                                        sx={{
                                            ...linkStyle,
                                            backgroundColor:
                                                router.asPath.includes(
                                                    "/projects"
                                                )
                                                    ? "rgb(160 212 255 / 27%)"
                                                    : undefined,
                                        }}
                                    >
                                        Projects
                                    </Button>
                                </Link>
                            </Grid>

                            <Grid item>
                                <IconButton
                                    aria-label="Dark & Light mode"
                                    onClick={toggleModeHandler}
                                    size="small"
                                >
                                    {themeMode === "dark" ? (
                                        <WbSunnyIcon
                                            sx={{
                                                color: amber[200],
                                            }}
                                            fontSize="small"
                                        />
                                    ) : (
                                        <NightsStayIcon
                                            sx={{
                                                color: "black",
                                            }}
                                            fontSize="small"
                                        />
                                    )}
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </>
    );
}