// ./js/pinned_projects.js

// Content to the const pinnedProjects is obtained from .js/PinnedProjects
const pinnedProjects = {
  status: ["Ongoing", "Ongoing", "Ongoing", "In progress", "In progress"],
  data: {
    user: {
      pinnedItems: {
        totalCount: 5,
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
              status: "Ongoing",
            },
          },
          {
            node: {
              id: "MDEwOlJlcG9zaXRvcnkxNjI2NTg4ODM=",
              name: "PersonalDashboard",
              url: "https://github.com/JamieBort/PersonalDashboard",
              stargazerCount: 0,
              description: "A website for displaying important daily data. Such as blood glucose numbers and upcoming events. By using API calls, databases, authentication, etc.",
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
              homepageUrl: "https://jamiebort.github.io/PersonalDashboard/",
              forkCount: 0,
              status: "Ongoing",
            },
          },
          {
            node: {
              id: "MDEwOlJlcG9zaXRvcnk5NjcwOTAwNg==",
              name: "jamiebort.com", // TODO: make this a permanent change for each version of pinned projects.
              url: "https://github.com/JamieBort/jamiebort.github.io",
              stargazerCount: 0,
              description: "My Portfolio Website. This is where I share a bit about myself, showcase what I've been working on, host my blog, and more.",
              languages: {
                totalCount: 5,
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
                      name: "Less",
                    },
                  },
                  {
                    node: {
                      name: "SCSS",
                    },
                  },
                ],
              },
              homepageUrl: "https://jamiebort.com",
              forkCount: 0,
              status: "Ongoing",
            },
          },
          {
            node: {
              id: "R_kgDOJXaC6A",
              name: "Data-Logging-App",
              url: "https://github.com/JamieBort/Data-Logging-App",
              stargazerCount: 0,
              description: "An app to log data points from my phone.",
              languages: {
                totalCount: 5,
                edges: [
                  {
                    node: {
                      name: "HTML",
                    },
                  },
                  {
                    node: {
                      name: "TypeScript",
                    },
                  },
                  {
                    node: {
                      name: "CSS",
                    },
                  },
                  {
                    node: {
                      name: "Svelte",
                    },
                  },
                  {
                    node: {
                      name: "JavaScript",
                    },
                  },
                ],
              },
              homepageUrl: null,
              forkCount: 0,
              status: "In progress",
            },
          },
          {
            node: {
              id: "R_kgDOKqJOGw",
              name: "To-Do-App",
              url: "https://github.com/JamieBort/To-Do-App",
              stargazerCount: 0,
              description: "A to-do app created using the React library.",
              languages: {
                totalCount: 0,
                edges: [],
              },
              homepageUrl: null,
              forkCount: 0,
              status: "In progress",
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
    homepageUrl: value.node.homepageUrl,
    name: value.node.name,
    languages: languages,
    status: value.node.status,
  };
});

// Creating each project card from the returnValue array above.
returnValue.forEach((project) => {
  const card_container = document.getElementById("card_container");

  const div1_tag = document.createElement("div");
  div1_tag.setAttribute("class", "card");
  div1_tag.setAttribute("aria-label", `${project.name} project card`);
  card_container.appendChild(div1_tag);

  const h3_tag = document.createElement("h3");
  h3_tag.setAttribute("class", "card_header_tag");
  // class="card_header_tag"
  h3_tag.innerHTML = project.name;
  div1_tag.appendChild(h3_tag);

  const div3_tag = document.createElement("div");
  div3_tag.setAttribute("class", "card_div");
  div1_tag.appendChild(div3_tag);

  const p1_tag = document.createElement("p");
  p1_tag.setAttribute("class", "card_status");
  p1_tag.innerHTML = project.status;
  div3_tag.appendChild(p1_tag);

  const p2_tag = document.createElement("p");
  p2_tag.setAttribute("class", "card_description");
  p2_tag.innerHTML = project.description;
  div3_tag.appendChild(p2_tag);

  const div2_tag = document.createElement("div");
  div2_tag.setAttribute("class", "icon_div");
  div2_tag.setAttribute("aria-label", "language list");
  div2_tag.setAttribute("style", "font-size:2.25em; display: flex; justify-content: space-around;"); //NOTE:  Maybe move this to styles.

  // Listing the languages each repo uses.
  project.languages.forEach((language) => {
    // TODO: investigate this more.
    // According to https://fontawesome.com/docs/web/add-icons/how-to, "Accessibility-minded folks may want to opt for the <span> element instead of <i>.".
    // Also, I attempted to use <img> instead of <span> but it didn't work.
    // NOTE: <svg>, <span>, and <i> work.

    const i_tag = document.createElement("i");

    switch (language) {
      case "JavaScript":
        i_tag.setAttribute("class", "fab fa-js-square");
        // TODO: determine whether to add "aria-label" or "alt" or both below.
        i_tag.setAttribute("aria-label", "JavaScript icon");
        i_tag.setAttribute("alt", "A JavaScript icon");
        div2_tag.appendChild(i_tag);
        break;
      case "Java":
        i_tag.setAttribute("class", "fab fa-java");
        // TODO: determine whether to add "aria-label" or "alt" or both below.
        i_tag.setAttribute("aria-label", "Java icon");
        i_tag.setAttribute("alt", "A Java icon");
        div2_tag.appendChild(i_tag);
        break;
      case "HTML":
        i_tag.setAttribute("class", "fab fa-html5");
        // TODO: determine whether to add "aria-label" or "alt" or both below.
        i_tag.setAttribute("aria-label", "HTML icon");
        i_tag.setAttribute("alt", "An HTML icon");
        div2_tag.appendChild(i_tag);
        break;
      case "CSS":
        i_tag.setAttribute("class", "fab fa-css3-alt");
        // TODO: determine whether to add "aria-label" or "alt" or both below.
        i_tag.setAttribute("aria-label", "CSS icon");
        i_tag.setAttribute("alt", "A CSS icon");
        div2_tag.appendChild(i_tag);
        break;
      default:
        console.log("other language:", language);
        // span_tag.innerHTML = language;
        // div2_tag.appendChild(span_tag);
        break;
    }
  });

  div3_tag.appendChild(div2_tag);

  // footer div for the project card
  const div4_tag = document.createElement("div");
  div4_tag.setAttribute("class", "anchor_div");
  // div4_tag.setAttribute("style", "border: solid blue; .3em"); // NOTE: To find the div used for the anchors...
  div1_tag.appendChild(div4_tag);

  // Link to repo.
  const a_tag1 = document.createElement("a");
  a_tag1.setAttribute("class", "github_repo");
  a_tag1.setAttribute("target", "_blank");
  a_tag1.setAttribute("href", project.url);
  a_tag1.innerHTML = "GitHub Repo";
  div4_tag.appendChild(a_tag1);

  if (project.homepageUrl) {
    // For when there is a live site to link to/share/display.
    const a_tag2 = document.createElement("a");
    a_tag2.setAttribute("class", "live_site");
    a_tag2.setAttribute("target", "_blank");
    a_tag2.setAttribute("href", project.homepageUrl);
    a_tag2.innerHTML = "Live Site";
    div4_tag.appendChild(a_tag2);
  } else {
    // For when there is NOT a live site to link to/share/display.
    // div4_tag.setAttribute("style", "border: solid red; .3em"); // NOTE: To find the div used for the anchors...
    a_tag1.setAttribute("style", "width: 100%;border-radius: 0 0 .5em .5em;");
  }
});
