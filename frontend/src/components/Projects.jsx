import { useEffect, useState } from "react";
import PropTypes from "prop-types";
// import { BackendAPI } from "./../api/BackendAPI";
import { BackendAPI } from "./../api/BackendAPI";

import MUICustomCard from "./cards/MUICustomCard";
import Container from "@mui/material/Container";

import Typography from "@mui/material/Typography";

export default function Projects({ selection }) {
  // TODO: Account for the time(s) when the api call doesn't work. Or when the server is down. Or when github is down. Etc. By pulling the saved data from local memory. And/or setting a default data object in the repo useState
  const standbyData = [
    {
      node: {
        description: "My Portfolio Website. This is where I share a bit about myself, showcase what I've been working on, host my blog, and more.",
        forkCount: 2,
        homepageUrl: "https://jamiebort.github.io/",
        id: "111",
        languages: {
          totalCount: 4,
          edges: [{ node: { name: "CSS" } }, { node: { name: "JavaScript" } }, { node: { name: "Less" } }, { node: { name: "SCSS" } }],
        },
        name: "Dummy Data 1",
        stargazerCount: 4,
        url: "https://github.com/JamieBort/jamiebort.github.io",
      },
    },
    {
      node: {
        description: "My Portfolio Website. This is where I share a bit about myself, showcase what I've been working on, host my blog, and more.",
        forkCount: 0,
        homepageUrl: "https://jamiebort.github.io/",
        id: "222",
        languages: {
          totalCount: 5,
          edges: [{ node: { name: "CSS" } }, { node: { name: "HTML" } }, { node: { name: "JavaScript" } }, { node: { name: "Less" } }, { node: { name: "SCSS" } }],
        },
        name: "Dummy Data 2",
        stargazerCount: 3,
        url: "https://github.com/JamieBort/jamiebort.github.io",
      },
    },
    {
      node: {
        description: "My Portfolio Website. This is where I share a bit about myself, showcase what I've been working on, host my blog, and more.",
        forkCount: 5,
        homepageUrl: "https://jamiebort.github.io/",
        id: "333",
        languages: {
          totalCount: 3,
          edges: [{ node: { name: "CSS" } }, { node: { name: "Less" } }, { node: { name: "SCSS" } }],
        },
        name: "Dummy Data 3",
        stargazerCount: 0,
        url: "https://github.com/JamieBort/jamiebort.github.io",
      },
    },
  ];

  // Saving the api call data in the "repos" variable.
  const [repos, setRepos] = useState(standbyData);
  // By default the status of "loading" is true, implying that we're not getting/do not have any data from the back end.
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      BackendAPI.getPinned.then((data) => {
        console.log("data:", data);
        setRepos(data);
        setLoading(false);
      });
    } catch (error) {
      // More errors....
      console.log("Try/Catch useEffect() error:", error);
    }
  }, []);

  useEffect(() => {
    // Function to load the saved standbyData if the database is down.
    setTimeout(() => {
      if (loading) {
        console.log("repos:", repos);
        setRepos(standbyData);
        setLoading(false);
      }
    }, 5000);
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
