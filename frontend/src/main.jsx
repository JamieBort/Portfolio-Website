// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// https://www.apollographql.com/docs/react/get-started#step-3-initialize-apolloclient
// NOTE:  import the symbols we need from @apollo/client:
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";
// NOTE: initialize an ApolloClient instance.
const client = new ApolloClient({
  // NOTE: `uri` specifies the URL of our GraphQL server.
  uri: "https://flyby-router-demo.herokuapp.com/",
  // NOTE: `cache` is an instance of InMemoryCache, which Apollo Client uses to cache query results after fetching them.
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query GetLocations {
        locations {
          id
          name
          description
          photo
        }
      }
    `,
  })
  .then((result) => console.log(result));

ReactDOM.createRoot(document.getElementById("root")).render(
  // NOTE: ApolloProvider wraps your React app and places Apollo Client on the context, enabling you to access it from anywhere in your component tree: https://www.apollographql.com/docs/react/get-started#step-4-connect-your-client-to-react
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);
