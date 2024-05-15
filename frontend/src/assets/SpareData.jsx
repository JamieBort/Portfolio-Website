// ./frontend/src/assets/SpareData.jsx

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

export const SpareData = {
  printIt: console.log("printing standbyData:", standbyData),
  sendIt: standbyData,
};
