// ./frontend/src/main.jsx

// TODO: Determine if I am going to wrap the `<App />` component in `<React.StrictMode>` or in `<ApolloProvider client={client}>`.
// NOTE: Hierarchically, ApolloProvider should be wrapping the top most component making graphql calls in the app; but not necessarily above that.

// Import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// TODO: Determine if I am going to wrap the `<App />` component in `<React.StrictMode>` or in `<ApolloProvider client={client}>`. See the note above about this issue.
// Import the symbols we need from @apollo/client.
// See https://www.apollographql.com/docs/react/get-started#step-3-initialize-apolloclient
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  // `uri` specifies the URL of our GraphQL server.
  uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  // Return the headers to the context so httpLink can read them.
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${import.meta.env.VITE_GitHub_GraphQL_Personal_Accesses_Token}`,
    },
  };
});

// Initialize an ApolloClient instance.
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  // `cache` is an instance of InMemoryCache, which Apollo Client uses to cache query results after fetching them.
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  // ApolloProvider wraps your React app and places Apollo Client on the context, enabling you to access it from anywhere in your component tree: https://www.apollographql.com/docs/react/get-started#step-4-connect-your-client-to-react
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  // TODO: Determine if I am going to wrap the `<App />` component in `<React.StrictMode>` or in `<ApolloProvider client={client}>`. See the note above about this issue.
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
);
