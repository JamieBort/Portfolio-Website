import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { BackendAPI } from "./../api/BackendAPI";
import CoreUICustomCard from "./cards/CoreUICustomCard";
import { CCardGroup } from "@coreui/react";

export default function Projects() {
  // Saving the api call data in the "repos" variable.
  const [repos, setRepos] = useState();
  // By default the status of "loading" is true, implying that we're not getting/do not have any data from the back end.
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    BackendAPI.getPinned.then((stuff) => {
      setRepos(stuff);
      setLoading(false);
    });
  }, []);

  // // Attempt to fetch data from the back end.
  // try {
  //   // TODO: Add dependency to the useEffect.
  //   useEffect(() => {
  //     // console.log("INITIAL FETCH via useEffect in front end"); // useEffect() is called.
  //     apiCall();
  //   }, []);
  // } catch (error) {
  //   // More errors....
  //   console.log("Try/Catch error:", error);
  // }

  // // Attempt to keep the backend from going to sleep.
  // // This setInterval() is called every x minutes/(1000*60).
  // setInterval(() => {
  //   console.log("attempting to fetch via setInterval in front end");
  //   apiCall();
  // }, 1000 * 60 * 25);

  if (!loading) {
    // Mapping through the data from the api call.
    var repo = repos.map((item) => {
      // console.log("item:", item);
      // console.log("item.node.id:", item.node.id);

      // Destructuring the item.node object.
      // const { description, forkCount, id, homepageUrl, name, stargazerCount, url } = item.node;
      // Returning each repo detail.
      return (
        <CCardGroup
          key={item.node.id}
          // className={`mb-3 border-${"success"}`}
          style={{ width: "30rem" }}
        >
          <CoreUICustomCard item={item.node} />
        </CCardGroup>
      );
    });
  }

  // When the value of "loading" is true, "<p>loading...</p>" will display. Otherwise "<ul>{repo}</ul>" will list the data from the api call.
  return loading ? <p>loading...</p> : <>{repo}</>;
}

Projects.propTypes = {
  title: PropTypes.string,
};
