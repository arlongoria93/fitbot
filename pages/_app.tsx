import "../styles/globals.css";
import type { AppProps } from "next/app";
import { theme } from "../theme/theme";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ChakraProvider>
  );
}
