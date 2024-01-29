// const GITHUB_ACCESS_TOKEN = // NOTE: removed for security.
const accessToken = GITHUB_ACCESS_TOKEN;
// console.log(accessToken);

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

// NOTE: commented out.
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
