import { useEffect, useState } from "react";

export default function BackendDataFetch() {
  // const URL = `http://localhost:3000/`;
  const URL = `https://backend-jamiebort-github-io.onrender.com/`;
  const [repos, setRepos] = useState();

  try {
    useEffect(() => {
      fetch(URL)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Something went wrong.");
        })
        .then((responseJson) => {
          console.log(responseJson);
          setRepos(responseJson);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  } catch (error) {
    console.log(error);
  }
  // const repo = repos.edges.map((item) => {
  const repo = repos.map((item) => {
    const { description, forkCount, id, homepageUrl, name, stargazerCount, url } = item.node;
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
  // return <h3>temp hold</h3>;
  return <ul>{repo}</ul>;
}
