import { useEffect, useState } from "react";

export default function BackendDataFetch() {
  // URL of local backend.
  // const URL = `http://localhost:3000/`;
  // URL of hosted backend.
  const URL = `https://backend-jamiebort-github-io.onrender.com/`;
  const [repos, setRepos] = useState();
  // By default the status of "loading" is true, implying that we're not getting any data from the back end.
  const [loading, setLoading] = useState(true);

  // The api call.
  const apiCall = () => {
    console.log("apiCall:", Date());
    fetch(URL)
      .then((response) => {
        console.log("response:", response);
        if (response.ok) {
          // Yay! We have data back from the back end.
          return response.json();
        }
        // We have a problem.
        throw new Error("Something went wrong.");
      })
      .then((responseJson) => {
        // console.log("responseJson:", responseJson); // Let's see the response in the console.
        // Updating the "repos" state.
        setRepos(responseJson);
        // Only after the "repos" data is updated will we change the "loading" status to false.
        setLoading(false);
      })
      .catch((error) => {
        // Uh oh
        console.log("api call error:", error);
      });
  };

  // Attempt to fetch data from the back end.
  try {
    // TODO: Add dependency to the useEffect.
    useEffect(() => {
      console.log("INITIAL FETCH via useEffect in front end");
      apiCall();
    }, []);
  } catch (error) {
    // More errors....
    console.log("Try/Catch error:", error);
  }

  // Attempt to keep the backend from going to sleep.
  setInterval(() => {
    console.log("attempting to fetch via setInterval in front end");
    apiCall();
  }, 1000 * 60 * 6);

  if (!loading) {
    // Mapping through the data from the api call.
    var repo = repos.map((item) => {
      // Destructuring the item.node object.
      const { description, forkCount, id, homepageUrl, name, stargazerCount, url } = item.node;
      // Returning each repo detail.
      return (
        <li key={id}>
          <h3>{name} Repo</h3>
          <p>{description}</p>
          {forkCount === 0 ? null : <p>Fork Count: {forkCount}</p>}
          {homepageUrl == null ? null : (
            <p>
              {name}{" "}
              <a href={homepageUrl} target="_blank" rel="noopener noreferrer">
                Live Site URL
              </a>
            </p>
          )}
          {stargazerCount === 0 ? null : <p>Stargaze Count: {stargazerCount}</p>}
          <p>
            {name}{" "}
            <a href={url} target="_blank" rel="noopener noreferrer">
              Repository URL
            </a>
          </p>
        </li>
      );
    });
  }

  // When the value of "loading" is true, "<p>loading...</p>" will display. Otherwise "<ul>{repo}</ul>" will list the data from the api call.
  return loading ? <p>loading...</p> : <ul>{repo}</ul>;
}
