// ./frontend/src/components/Projects.jsx

import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { BackendAPI } from "./../api/BackendAPI";
import { SpareData } from "../assets/SpareData";
import MUICustomCard from "./cards/MUICustomCard";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";

export default function Projects({ selection }) {
  // Saving the api call data in the "repos" variable.
  const [repos, setRepos] = useState();
  // By default the status of "loading" is true, implying that we're not getting/do not have any data from the back end.
  const [loading, setLoading] = useState(true);

  function backendCall() {
    BackendAPI.getPinned.then((data) => {
      // console.log("backendCall data:", data);
      if (data !== "Bad credentials" && !(data instanceof TypeError) && !(data instanceof SyntaxError)) {
        console.log("Original data:", data);
        setRepos(data);
      }
    });
  }

  useEffect(() => {
    // Load local data while waiting for the backend server to wake up.
    setRepos(SpareData.sendIt);
    console.log("Spare data:", SpareData.sendIt);
    setLoading(false);
    // setTimeout(backendCall, 5000);
    try {
      backendCall();
    } catch (error) {
      // Catching the error.
      console.log("Try/Catch useEffect() error:", error);
    }
  }, []);

  // Creating each MUI card.
  if (!loading) {
    // Mapping through the data from the api call.
    var repo = repos.map((item) => {
      // Returning each repo detail.
      // TODO: Rename this component.
      return (
        <MUICustomCard
          // className={`mb-3 border-${"success"}`}
          key={item.node.id}
          item={item.node}
          selection={selection}
        />
      );
    });
  }

  // When the value of "loading" is true, "<p>loading...</p>" will display. Otherwise "<>{repo}</>" will list the data from the api call.
  return (
    <Container
      maxWidth="sm"
      sx={{
        minHeight: "15em", // NOTE: My change. I added this minHeight.
      }}
    >
      {loading ? <CircularProgress /> : <>{repo}</>}
    </Container>
  );
}

Projects.propTypes = {
  selection: PropTypes.string,
};
