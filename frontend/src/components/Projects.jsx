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
        id: "MDEwOlJlcG9zaXRvcnk5NjcwOTAwNg==",
        name: "Portfolio-Website",
        url: "https://github.com/JamieBort/Portfolio-Website",
        stargazerCount: 0,
        description:
          "This is where I share a bit about myself, showcase what I've been working on, and share where you can find me online. It is build with a React + Vite front end and a Node Express backend. And styled with MUI.",
        languages: {
          totalCount: 5,
          edges: [{ node: { name: "CSS" } }, { node: { name: "HTML" } }, { node: { name: "JavaScript" } }, { node: { name: "Less" } }, { node: { name: "SCSS" } }],
        },
        homepageUrl: "https://jamiebort.com",
        forkCount: 0,
      },
    },
    {
      node: {
        id: "MDEwOlJlcG9zaXRvcnkxNjI2NTg4ODM=",
        name: "Personal-Dashboard",
        url: "https://github.com/JamieBort/Personal-Dashboard",
        stargazerCount: 0,
        description:
          "A website for displaying important daily data. Such as blood glucose numbers and upcoming events. Using  Svelt TypeScript front end and Java backend. Which database is yet to be seen. It will use authentication.",
        languages: { totalCount: 3, edges: [{ node: { name: "CSS" } }, { node: { name: "HTML" } }, { node: { name: "JavaScript" } }] },
        homepageUrl: "https://jamiebort.github.io/Personal-Dashboard/",
        forkCount: 0,
      },
    },
    {
      node: {
        id: "MDEwOlJlcG9zaXRvcnkxNjI0Njg1MjA=",
        name: "LearningDirectory",
        url: "https://github.com/JamieBort/LearningDirectory",
        stargazerCount: 3,
        description: "This repo is my knowledge base as I hone my skills by exploring software concepts and new technologies. It contains my notes and resources.",
        languages: {
          totalCount: 20,
          edges: [
            { node: { name: "HTML" } },
            { node: { name: "JavaScript" } },
            { node: { name: "CSS" } },
            { node: { name: "PHP" } },
            { node: { name: "Java" } },
            { node: { name: "Groovy" } },
          ],
        },
        homepageUrl: "",
        forkCount: 0,
      },
    },
  ];

  // Saving the api call data in the "repos" variable.
  const [repos, setRepos] = useState(standbyData);
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

      // // NOTE: used to simulate a server that is down.
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

  // NOTE: Function to load the saved standbyData if the database is down.
  useEffect(() => {
    setTimeout(() => {
      if (loading) {
        // console.log("We have dummy data.");
        // console.log("repos:", repos);
        // setRepos(repos);
        setLoading(false);
      }
    }, 5000);
  }, [loading]);

  // TODO: Sanitize data. Specifically, change name from "Personal-Dashboard" to "Personal Dashboard".

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
