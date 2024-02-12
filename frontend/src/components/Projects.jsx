import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { BackendAPI } from "./../api/BackendAPI";
// import CoreUICustomCard from "./cards/CoreUICustomCard";
// import { CCardGroup } from "@coreui/react";
import MUICustomCard from "./cards/MUICustomCard";
import { Container, Grid } from "@mui/material";

export default function Projects() {
  // Saving the api call data in the "repos" variable.
  const [repos, setRepos] = useState();
  // By default the status of "loading" is true, implying that we're not getting/do not have any data from the back end.
  const [loading, setLoading] = useState(true);

  // Make an api call to the back end to obtain the pinned repos.
  useEffect(() => {
    try {
      BackendAPI.getPinned.then((stuff) => {
        setRepos(stuff);
        setLoading(false);
      });
    } catch (error) {
      // More errors....
      console.log("Try/Catch useEffect() error:", error);
    }
  }, []);

  // // NOTE: This isn't working.
  // // Attempt to keep the backend from going to sleep.
  // // This setInterval() is called every x minutes/(1000*60).
  // setInterval(() => {
  //   console.log("attempting to fetch via setInterval in front end");
  //   try {
  //     BackendAPI.getPinned.then((stuff) => {
  //       setRepos(stuff);
  //       // setLoading(false);
  //     });
  //   } catch (error) {
  //     // More errors....
  //     console.log("Try/Catch setInterval() error:", error);
  //   }
  // }, 1000 * 60 * 25);

  // // Creating each CoreUI card.
  // if (!loading) {
  //   // Mapping through the data from the api call.
  //   var repo = repos.map((item) => {
  //     // Returning each repo detail.
  //     return (
  //       <CoreUICustomCard
  //         // className={`mb-3 border-${"success"}`}
  //         key={item.node.id}
  //         item={item.node}
  //       />
  //     );
  //   });
  // }

  // Creating each MUI card.
  if (!loading) {
    // Mapping through the data from the api call.
    var repoMUI = repos.map((item) => {
      // Returning each repo detail.
      return (
        <MUICustomCard
          // className={`mb-3 border-${"success"}`}
          key={item.node.id}
          item={item.node}
        />
      );
    });
  }

  // When the value of "loading" is true, "<p>loading...</p>" will display. Otherwise "<ul>{repo}</ul>" will list the data from the api call.
  return (
    <>
      <div style={divStyle.divUIType}>
        <p style={divStyle.p}>MUI Cards:</p>
        <div style={divStyle.divComponentType}>
          <p style={divStyle.p}>Container</p>
          <Container maxWidth="sm">{loading ? <p>loading...</p> : <>{repoMUI}</>}</Container>
        </div>
        <div style={divStyle.divComponentType}>
          <p style={divStyle.p}>Grid</p>
          <Grid maxWidth="sm">{loading ? <p>loading...</p> : <>{repoMUI}</>}</Grid>
        </div>
      </div>
      {/* <div style={divStyle.divUIType}>
        <p style={divStyle.p}>CoreUI Cards:</p>
        <CCardGroup>{loading ? <p>loading...</p> : <>{repo}</>}</CCardGroup>
      </div> */}
    </>
  );
}

const divStyle = {
  divUIType: {
    border: "1px solid DodgerBlue",
    marginTop: "5px",
    marginBottom: "5px",
  },
  divComponentType: {
    border: "1px solid red",
    marginTop: "5px",
    marginBottom: "5px",
  },
  p: {
    color: "green",
    textAlign: "center",
  },
};

Projects.propTypes = {
  title: PropTypes.string,
};
