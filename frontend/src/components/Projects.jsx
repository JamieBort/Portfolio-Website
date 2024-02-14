import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { BackendAPI } from "./../api/BackendAPI";
import { SpareData } from "../assets/SpareData";
import MUICustomCard from "./cards/MUICustomCard";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Projects({ selection }) {
  // Saving the api call data in the "repos" variable.
  const [repos, setRepos] = useState();
  // By default the status of "loading" is true, implying that we're not getting/do not have any data from the back end.
  const [loading, setLoading] = useState(true);

  // useEffect() for making a REST API call to the backend.
  useEffect(() => {
    try {
      BackendAPI.getPinned.then((data) => {
        // console.log("We have original data.");
        // console.log("data:", data);
        setRepos(data);
        setLoading(false);
      });

      // // NOTE: used to simulate the server that is down.
      // setTimeout(() => {
      //   BackendAPI.getPinned.then((data) => {
      //     console.log("We have original data. But there was a delay");
      //     // console.log("data:", data);
      //     setRepos(data);
      //     setLoading(false);
      //   });
      // }, 10000);
    } catch (error) {
      // More errors....
      console.log("Try/Catch useEffect() error:", error);
    }
  }, []);

  // TODO: Clean this promise up. And use reject.
  // useEffect()  to load the saved standbyData if the database is down.
  useEffect(() => {
    try {
      // A promise for obtaining standbyData using SpareData.sendIt
      const myPromise = new Promise((resolve, reject) => {
        // TODO: Use reject. Or remove.
        console.log("reject:", reject);
        // Returning a resolved promise with standbyData.
        resolve(SpareData.sendIt);
      });

      myPromise.then((data) => {
        // SpareData.printIt;
        // console.log("We have spare data.");
        // console.log("data:", data);
        setRepos(data);
        setLoading(false);
      });
    } catch (error) {
      // More errors....
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
  // TODO: make this loading text the same size as the other text. Or bigger.
  return <Container maxWidth="sm">{loading ? <Typography variant="body2">loading...</Typography> : <>{repo}</>}</Container>;
}

Projects.propTypes = {
  selection: PropTypes.string,
};
