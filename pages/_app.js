import { ApolloProvider } from "@apollo/client";
import client from "../src/apollo/client";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../src/theme";
import { GlobalStyles } from "../src/theme/globalStyles";
import NextHead from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <NextHead>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <link
            href="https://fonts.googleapis.com/css2?family=Hind+Madurai:wght@400;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
            rel="stylesheet"
          />
        </NextHead>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

// MyApp.getInitialProps = async (appContext) => {
//   const appProps = await NextApp.getInitialProps(appContext);
//   return { ...appProps };
// };

export default MyApp;
