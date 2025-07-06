import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/spotlight/styles.css";
import "mantine-flagpack/styles.css";
import "material-symbols/outlined.css";
import "../styles/material-symbols.css";
import "../styles/material-design.css";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { ThemeProvider, useTheme } from "../src/contexts/ThemeContext";
import { themes } from "../theme";

function AppContent({ Component, pageProps }: any) {
  const { currentTheme } = useTheme();

  return (
    <MantineProvider theme={themes[currentTheme]} defaultColorScheme="auto">
      <Notifications />
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <ThemeProvider>
        <AppContent Component={Component} pageProps={pageProps} />
      </ThemeProvider>
    </>
  );
}
