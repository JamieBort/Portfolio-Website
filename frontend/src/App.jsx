// https://www.apollographql.com/docs/react/get-started#step-5-fetch-data-with-usequery
// NOTE: Import everything needed to use the `useQuery` hook
import { useQuery, gql } from "@apollo/client";

// NOTE: Define the query we want to execute by wrapping it in the gql template literal:
const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

// NOTE: Define a component named DisplayLocations that executes our GET_LOCATIONS query with the useQuery hook:
function DisplayLocations() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return data.locations.map(({ id, name, description, photo }) => (
    <div key={id}>
      <h3>{name}</h3>
      <img width="400" height="250" alt="location-reference" src={`${photo}`} />
      <br />
      <b>About this location:</b>
      <p>{description}</p>
      <br />
    </div>
  ));
}

export default function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <DisplayLocations />
    </div>
  );
}
