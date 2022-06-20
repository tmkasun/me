import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import Header from "../src/components/layouts/Header";
import { Box, createTheme, Toolbar, useMediaQuery } from "@mui/material";
import Footer from "../src/components/layouts/Footer";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyRootProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyRoot(props: MyRootProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [isDarkMode, setIsDarkMode] = React.useState(prefersDarkMode);
  const modeAwareTheme = React.useMemo(() => {
    const themeX = { ...theme };
    if (themeX.palette) {
      themeX.palette.mode = isDarkMode ? "dark" : "light";
    }
    return createTheme(themeX);
  }, [isDarkMode]);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={modeAwareTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Box display="flex" minHeight="100vh" flexDirection="column">
          <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <Box display="flex" flexGrow={1}>
            <Component {...pageProps} />
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}
