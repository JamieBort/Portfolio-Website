// https://www.apollographql.com/docs/react/get-started#step-5-fetch-data-with-usequery
// NOTE: Import everything needed to use the `useQuery` hook
import { useQuery, gql } from "@apollo/client";

// NOTE: Define the query we want to execute by wrapping it in the gql template literal:
const GET_PINNED_PROJECTS = gql`
  {
    user(login: "jamiebort") {
      pinnedItems(first: 6) {
        totalCount
        edges {
          node {
            ... on Repository {
              id
              name
              url
              stargazerCount
              description
              languages(first: 6) {
                totalCount
                edges {
                  node {
                    name
                  }
                }
              }
              homepageUrl
              forkCount
            }
          }
        }
      }
    }
  }
`;

// NOTE: Define a component named DisplayRepos that executes our GET_LOCATIONS query with the useQuery hook:
function DisplayRepos() {
  const { loading, error, data } = useQuery(GET_PINNED_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  const list = data.user.pinnedItems.edges.map((element) => {
    const { description, forkCount, id, homepageUrl, name, stargazerCount, url } = element.node;
    return (
      <li key={id}>
        <h3>Title: {name}</h3>
        <p>Description: {description}</p>
        <p>Fork Count: {forkCount}</p>
        <p>Home Page URL: {homepageUrl}</p>
        <p>Stargaze Count: {stargazerCount}</p>
        <p>URL: {url}</p>
      </li>
    );
  });
  return <ul>{list}</ul>;
}

export default function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <DisplayRepos />
    </div>
  );
}
