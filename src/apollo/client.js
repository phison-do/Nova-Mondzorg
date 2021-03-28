import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  HttpLink,
} from "@apollo/client";
import fetch from "isomorphic-unfetch";

const defaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

const cache = new InMemoryCache({
  resultCaching: false,
});

// const link = createHttpLink({
//   uri: `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/graphql`,
// });

const client = new ApolloClient({
  link: new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL}/graphql`,
    fetch,
  }),
  cache,
  defaultOptions,
});

export default client;
