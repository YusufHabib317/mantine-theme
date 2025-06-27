import "@mantine/core/styles.css";
import "material-symbols/outlined.css";
import "../styles/material-symbols.css";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { materialTheme } from "../theme";

export default function App({ Component, pageProps }: any) {
  return (
      <>
        <Head>
        <title>Welcome</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
        <link rel="shortcut icon" href="/favicon.svg" />
        </Head>
       <MantineProvider theme={materialTheme} defaultColorScheme="auto">
         <Component {...pageProps} />
       </MantineProvider>
    </>
  );
}
