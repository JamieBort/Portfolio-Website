import { useEffect, useState } from "react";

export default function BackendDataFetch() {
  // const URL = `http://localhost:3000/`;
  const URL = `https://backend-jamiebort-github-io.onrender.com/`;
  const [repos, setRepos] = useState();
  const [loading, setLoading] = useState(true);

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
          setRepos(responseJson);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  } catch (error) {
    console.log(error);
  }

  if (!loading) {
    var repo = repos.map((item) => {
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
  }

  return loading ? <p>loading...</p> : <ul>{repo}</ul>;
}
