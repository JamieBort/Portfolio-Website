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
          // // console.log(responseJson);
          // // console.log(responseJson[0]);
          // responseJson.map((item) => {
          //   const { description, forkCount, id, homepageUrl, name, stargazerCount, url } = item.node;
          //   console.log("description:", description);
          //   console.log("forkCount:", forkCount);
          //   console.log("id:", id);
          //   console.log("homepageUrl:", homepageUrl);
          //   console.log("name:", name);
          //   console.log("stargazerCount:", stargazerCount);
          //   console.log("url:", url);
          //   console.log("==========================================");
          // });
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
    // // const repo = repos.edges.map((item) => {
    var repo = repos.map((item) => {
      // console.log("item:", item);
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

  // return loading ? <p>loading...</p> : <p>not loading</p>;
  return loading ? <p>loading...</p> : <ul>{repo}</ul>;
  // return <h3>temp hold</h3>;
  // if (repo) return <ul>{repo}</ul>;
  // else return <p>does not exist</p>;
}
