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

  // useEffect() for making a REST API call to the backend.
  useEffect(() => {
    try {
      BackendAPI.getPinned.then((data) => {
        if (data !== "Bad credentials") console.log("Original data:", data);
        else {
          data = SpareData.sendIt;
          console.log("Spare data:", data);
        }
        setRepos(data);
        setLoading(false);
      });
    } catch (error) {
      // Catching the useEffect() error.
      console.log("Try/Catch useEffect() error:", error);
    }
  }, []);

  // For when I need to deal with the <CircularProgress/> component below.
  // useEffect(() => {
  //   setLoading(true);
  // }, []);

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
