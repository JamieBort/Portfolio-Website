import { useEffect, useState } from "react";
import CoreUICustomCard from "./cards/CoreUICustomCard";
import { CCardGroup } from "@coreui/react";

export default function BackendDataFetch() {
  // URL of local backend.
  // const URL = `http://localhost:3001/`;
  // URL of hosted backend.
  const URL = `https://backend-jamiebort-github-io.onrender.com/`;

  // Saving the api call data in the "repos" variable.
  const [repos, setRepos] = useState();
  // By default the status of "loading" is true, implying that we're not getting/do not have any data from the back end.
  const [loading, setLoading] = useState(true);

  // The api call.
  // TODO: Clean up these catches and errors.
  const apiCall = () => {
    // console.log("apiCall:", Date()); // Let's see that apiCall() was called.
    fetch(URL)
      .then((response) => {
        // console.log("response:", response); // Let's see the response in the console.
        if (response.ok) {
          // Yay! We have data back from the back end.
          return response.json();
        }
        // We have a problem.
        throw new Error("apiCall thrown error.");
      })
      .then((responseJson) => {
        // console.log("responseJson:", responseJson); // Let's see the response body in the console.
        // Updating the "repos" state with setRepos().
        setRepos(responseJson);
        // Only after the "repos" data is updated will we change the "loading" status to false.
        setLoading(false);
      })
      // Uh oh
      .catch((error) => console.log("apiCall catch error:", error));
  };

  // Attempt to fetch data from the back end.
  try {
    // TODO: Add dependency to the useEffect.
    useEffect(() => {
      // console.log("INITIAL FETCH via useEffect in front end"); // useEffect() is called.
      apiCall();
    }, []);
  } catch (error) {
    // More errors....
    console.log("Try/Catch error:", error);
  }

  // Attempt to keep the backend from going to sleep.
  // This setInterval() is called every x minutes/(1000*60).
  setInterval(() => {
    console.log("attempting to fetch via setInterval in front end");
    apiCall();
  }, 1000 * 60 * 25);

  if (!loading) {
    // Mapping through the data from the api call.
    var repo = repos.map((item) => {
      // console.log("item:", item);
      // console.log("item.node.id:", item.node.id);

      // Destructuring the item.node object.
      // const { description, forkCount, id, homepageUrl, name, stargazerCount, url } = item.node;
      // Returning each repo detail.
      return (
        <CCardGroup key={item.node.id}>
          <CoreUICustomCard item={item.node} />
        </CCardGroup>
      );
    });
  }

  // When the value of "loading" is true, "<p>loading...</p>" will display. Otherwise "<ul>{repo}</ul>" will list the data from the api call.
  return loading ? <p>loading...</p> : <>{repo}</>;
}
