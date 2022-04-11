import "../styles/globals.css";
import { theme } from "../theme/theme";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={session}>
        <Head>
          <link rel="shortcut icon" href="/favicon.svg" />
        </Head>
        <Component {...pageProps} />
      </SessionProvider>
    </ChakraProvider>
  );
}
