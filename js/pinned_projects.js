// ./js/pinned_projects.js

// **************************************************
//                  pinned project
// **************************************************

// pinnedProjects (below) was generated from the following using https://docs.github.com/en/graphql/overview/explorer

//     {
//   user(login: "jamiebort") {
//     pinnedItems(first: 6) {
//       totalCount
//       edges {
//         node {
//           ... on Repository {
//             id
//             name
//             url
//             stargazerCount
//             description
//             languages(first: 6) {
//               totalCount
//               edges {
//                 node {
//                   name
//                 }
//               }
//             }
//             homepageUrl
//             forkCount
//           }
//         }
//       }
//     }
//   }
// }

// In the future, this pinnedProjects object will be pulled in from an GraphQL API call to GitHub.
const pinnedProjects = {
  data: {
    user: {
      pinnedItems: {
        totalCount: 6,
        edges: [
          {
            node: {
              id: "MDEwOlJlcG9zaXRvcnkxNjI0Njg1MjA=",
              name: "LearningDirectory",
              url: "https://github.com/JamieBort/LearningDirectory",
              stargazerCount: 3,
              description:
                "The purpose of this directory is to house all the code I write as I learn new technologies and hone my skills. This is to help keep my GitHub account organized.",
              languages: {
                totalCount: 20,
                edges: [
                  {
                    node: {
                      name: "HTML",
                    },
                  },
                  {
                    node: {
                      name: "JavaScript",
                    },
                  },
                  {
                    node: {
                      name: "CSS",
                    },
                  },
                  {
                    node: {
                      name: "PHP",
                    },
                  },
                  {
                    node: {
                      name: "Java",
                    },
                  },
                  {
                    node: {
                      name: "Groovy",
                    },
                  },
                ],
              },
              homepageUrl: null,
              forkCount: 0,
            },
          },
          {
            node: {
              id: "MDEwOlJlcG9zaXRvcnkxNjI2NTg4ODM=",
              name: "PersonalDashboard",
              url: "https://github.com/JamieBort/PersonalDashboard",
              stargazerCount: 0,
              description:
                "A website for displaying important daily data. Such as blood glucose numbers and upcoming events. By using API calls, databases, authentication, etc.",
              languages: {
                totalCount: 3,
                edges: [
                  {
                    node: {
                      name: "CSS",
                    },
                  },
                  {
                    node: {
                      name: "HTML",
                    },
                  },
                  {
                    node: {
                      name: "JavaScript",
                    },
                  },
                ],
              },
              homepageUrl: "",
              forkCount: 0,
            },
          },
          {
            node: {
              id: "MDEwOlJlcG9zaXRvcnk5NjcwOTAwNg==",
              name: "jamiebort.github.io",
              url: "https://github.com/JamieBort/jamiebort.github.io",
              stargazerCount: 0,
              description:
                "My Portfolio Website. This is where I share a bit about myself, showcase what I've been working on, host my blog, and more.",
              languages: {
                totalCount: 4,
                edges: [
                  {
                    node: {
                      name: "CSS",
                    },
                  },
                  {
                    node: {
                      name: "HTML",
                    },
                  },
                  {
                    node: {
                      name: "JavaScript",
                    },
                  },
                  {
                    node: {
                      name: "PHP",
                    },
                  },
                ],
              },
              homepageUrl: "",
              forkCount: 0,
            },
          },
          {
            node: {
              id: "MDEwOlJlcG9zaXRvcnkxMDg4MDk5NzM=",
              name: "iPhysicist-CSSLayoutFlexbox",
              url: "https://github.com/JamieBort/iPhysicist-CSSLayoutFlexbox",
              stargazerCount: 0,
              description:
                "Finish the styling for the 'i Physicist' blog mockup. Skills using CSS, HTML, GitHub, Bash.",
              languages: {
                totalCount: 2,
                edges: [
                  {
                    node: {
                      name: "HTML",
                    },
                  },
                  {
                    node: {
                      name: "CSS",
                    },
                  },
                ],
              },
              homepageUrl: null,
              forkCount: 0,
            },
          },
          {
            node: {
              id: "MDEwOlJlcG9zaXRvcnkxMDg3NzA5MDQ=",
              name: "PuppyLove",
              url: "https://github.com/JamieBort/PuppyLove",
              stargazerCount: 0,
              description: "An exercise in styling with CSS.",
              languages: {
                totalCount: 3,
                edges: [
                  {
                    node: {
                      name: "HTML",
                    },
                  },
                  {
                    node: {
                      name: "CSS",
                    },
                  },
                  {
                    node: {
                      name: "JavaScript",
                    },
                  },
                ],
              },
              homepageUrl: "",
              forkCount: 0,
            },
          },
          {
            node: {
              id: "MDEwOlJlcG9zaXRvcnk5OTU3Mzc4MQ==",
              name: "Create-A-User-Directory",
              url: "https://github.com/JamieBort/Create-A-User-Directory",
              stargazerCount: 0,
              description:
                "A directory using the Express framework and the Mustache-Express templating engine to implement MVC.",
              languages: {
                totalCount: 3,
                edges: [
                  {
                    node: {
                      name: "CSS",
                    },
                  },
                  {
                    node: {
                      name: "JavaScript",
                    },
                  },
                  {
                    node: {
                      name: "Mustache",
                    },
                  },
                ],
              },
              homepageUrl: "",
              forkCount: 0,
            },
          },
        ],
      },
    },
  },
};

// Creating each project card from the pinnedProjects object.
const returnValue = pinnedProjects.data.user.pinnedItems.edges.map((value) => {
  const languages = value.node.languages.edges.map((value) => value.node.name);
  return {
    description: value.node.description,
    url: value.node.url,
    name: value.node.name,
    languages: languages,
  };
});

// Creating each project card from the returnValue array.
returnValue.forEach((project) => {
  // console.log("project.description:",project.description);
  // console.log("project.url:",project.url);
  // console.log("project.languages:",project.languages);

  const card_container = document.getElementById("card_container");

  const div1_tag = document.createElement("div");
  div1_tag.setAttribute("class", "card");

  const h3_tag = document.createElement("h3");
  h3_tag.setAttribute("class", "card_header_tag");
  // class="card_header_tag"
  h3_tag.innerHTML = project.name;

  const div3_tag = document.createElement("div");
  div3_tag.setAttribute("class", "card_div");

  const p1_tag = document.createElement("p");
  // p1_tag.setAttribute("class", "card_p");
  p1_tag.innerHTML = project.description;

  const div2_tag = document.createElement("div");
  div2_tag.setAttribute("class", "icon_div");
  div2_tag.setAttribute(
    "style",
    "font-size:2.25em; display: flex; justify-content: space-around;",
  ); // Maybe move this to styles.

  // Listing the languages each repo uses.
  project.languages.forEach((language) => {
    // console.log("language:",language);

    // const i_tag = document.createElement("i");

    const span_tag = document.createElement("span");

    switch (language) {
      case "JavaScript":
        span_tag.setAttribute("class", "fab fa-js-square");
        div2_tag.appendChild(span_tag);
        break;
      case "Java":
        span_tag.setAttribute("class", "fab fa-java");
        div2_tag.appendChild(span_tag);
        break;
      case "HTML":
        span_tag.setAttribute("class", "fab fa-html5");
        div2_tag.appendChild(span_tag);
        break;
      case "CSS":
        span_tag.setAttribute("class", "fab fa-css3-alt");
        div2_tag.appendChild(span_tag);
        break;
      // case "NODE":
      //   // console.log("language: NODE");
      //   span1_tag.innerHTML = language;
      //   div2_tag.appendChild(span1_tag);
      //   break;
      // case "Mustache":
      //   // console.log("language: Mustache");
      //   span1_tag.innerHTML = language;
      //   div2_tag.appendChild(span1_tag);
      //   break;
      default:
        console.log("other:", language);
        // span_tag.innerHTML = language;
        // div2_tag.appendChild(span_tag);
        break;
    }
  });

  // Link to repo.
  const a_tag1 = document.createElement("a");
  a_tag1.setAttribute("class", "github_repo");
  a_tag1.setAttribute("target", "_blank");
  a_tag1.setAttribute("href", project.url);
  // a_tag1.setAttribute("style", "display: inline-block; width: 100%; text-align:center;"); // Maybe move this to styles.
  a_tag1.innerHTML = "GitHub Repo";

  // // Use this to ink to live the site - if it exists.
  // const a_tag2 = document.createElement("a");
  // a_tag1.setAttribute("target", "_blank");
  // a_tag1.setAttribute("href", project.url);
  // a_tag1.innerHTML = "GitHub Repo";

  card_container.appendChild(div1_tag);

  div1_tag.appendChild(h3_tag);
  div1_tag.appendChild(div3_tag);
  div3_tag.appendChild(p1_tag);
  div3_tag.appendChild(div2_tag);
  div1_tag.appendChild(a_tag1);
  // div1_tag.appendChild(a_tag2); // Append the link to live site to the div.
});
