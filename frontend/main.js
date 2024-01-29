// const GITHUB_ACCESS_TOKEN = `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`;

// const accessToken = GITHUB_ACCESS_TOKEN;

// console.log(accessToken);

const URL = `http://localhost:3000/`;

const query = `
  query {
    user(login: "jamiebort") {
        pinnedItems(first: 6) {
        totalCount
        edges {
            node {
            ... on Repository {
                id
                name
                url
                stargazerCount
                description
                languages(first: 6) {
                totalCount
                edges {
                    node {
                    name
                    }
                }
                }
                homepageUrl
                forkCount
            }
            }
        }
        }
    }
}`;

// TODO: make an api call to the backend.

// // NOTE: commented out.
// fetch("https://api.github.com/graphql", {
//   method: "POST",
//   body: JSON.stringify({ query }),
//   headers: {
//     Authorization: `Bearer ${accessToken}`,
//   },
// })
//   .then((res) => res.json())
//   .then((info) => {
//     const ul = document.getElementsByTagName("ul")[0];
//     const edges = info.data.user.pinnedItems.edges;
//     edges.map((aaa) => {
//       const li = document.createElement("li");
//       li.innerHTML = aaa.node.name;
//       ul.appendChild(li);
//     });
//   })
//   .catch((error) => console.error(error));

// NOTE: this works when using nodemon in the terminal.
// Running into CORS issue when I try to load the index.html page in the browser.
console.log("=======");
fetch(URL)
  .then((res) => res.json())
  .then((info) => {
    console.log(info);
    // const ul = document.getElementsByTagName("ul")[0];
    // const edges = info.data.user.pinnedItems.edges;
    // edges.map((aaa) => {
    //   const li = document.createElement("li");
    //   li.innerHTML = aaa.node.name;
    //   ul.appendChild(li);
    // });
  });
console.log("=======");
