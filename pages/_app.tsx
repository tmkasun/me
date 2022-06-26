import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import Header from "../src/components/layouts/Header";
import { Box, createTheme, Toolbar, useMediaQuery } from "@mui/material";
import Footer from "../src/components/layouts/Footer";
import ThemeProvider from "../src/components/layouts/ThemeProvider";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyRootProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyRoot(props: MyRootProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=6"
        />
      </Head>
      <ThemeProvider>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Box display="flex" minHeight="100vh" flexDirection="column">
          <Header />
          <Box display="flex" flexGrow={1}>
            <Component {...pageProps} />
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}