// TODO: Determine if I am going to wrap the `<App />` component in `<React.StrictMode>` or in `<ApolloProvider client={client}>`.
// NOTE: Hierarchically, ApolloProvider should be wrapping the top most component making graphql calls in the app; but not necessarily above that.
// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// https://www.apollographql.com/docs/react/get-started#step-3-initialize-apolloclient
// NOTE:  import the symbols we need from @apollo/client:
import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider, gql } from "@apollo/client"; // TODO: Determine if I am going to wrap the `<App />` component in `<React.StrictMode>` or in `<ApolloProvider client={client}>`. See the note above about this issue.
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  // NOTE: `uri` specifies the URL of our GraphQL server.
  uri: "https://api.github.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  // NOTE: return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      // authorization: token ? `Bearer ${token}` : "",
      authorization: `Bearer ${import.meta.env.VITE_GitHub_GraphQL_Personal_Accesses_Token}`,
    },
  };
});

// NOTE: initialize an ApolloClient instance.
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  // NOTE: `cache` is an instance of InMemoryCache, which Apollo Client uses to cache query results after fetching them.
  cache: new InMemoryCache(),
});

// // NOTE: this `client.query` isn't needed.
// client
//   .query({
//     query: gql`
//       {
//         user(login: "jamiebort") {
//           pinnedItems(first: 6) {
//             totalCount
//             edges {
//               node {
//                 ... on Repository {
//                   id
//                   name
//                   url
//                   stargazerCount
//                   description
//                   languages(first: 6) {
//                     totalCount
//                     edges {
//                       node {
//                         name
//                       }
//                     }
//                   }
//                   homepageUrl
//                   forkCount
//                 }
//               }
//             }
//           }
//         }
//       }
//     `,
//   })
//   .then((result) => {
//     // console.log(result.data.user.pinnedItems.edges);
//     console.log(result.data.user.pinnedItems.edges[0].node);
//     console.log(result.data.user.pinnedItems.edges[1].node);
//   });

ReactDOM.createRoot(document.getElementById("root")).render(
  // NOTE: ApolloProvider wraps your React app and places Apollo Client on the context, enabling you to access it from anywhere in your component tree: https://www.apollographql.com/docs/react/get-started#step-4-connect-your-client-to-react
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  // TODO: Determine if I am going to wrap the `<App />` component in `<React.StrictMode>` or in `<ApolloProvider client={client}>`. See the note above about this issue.
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
);
