// ./backend/app.js

// const fetch = require("node-fetch");
import fetch from "node-fetch";
// require("dotenv").config();
// var express = require("express");
// var app = express();
// app.get("/", function (req, res) {
//   res.send("Hello World!");
// });
// app.listen(3000, function () {
//   console.log("Example app listening on port 3000!");
// });

// const response = await fetch("https://github.com/");
// const body = await response.text();

// console.log(body);

const accessToken = process.env.GITHUB_ACCESS_TOKEN;

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

fetch("https://api.github.com/graphql", {
  method: "POST",
  body: JSON.stringify({ query }),
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
})
  .then((res) => res.text())
  .then((body) => console.log(body)) // {"data":{"repository":{"issues":{"totalCount":247}}}}
  .catch((error) => console.error(error));
