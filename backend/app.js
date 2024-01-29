// ./backend/app.js

// require("dotenv").config(); // Don't need this.
import express from "express";
// var express = require("express"); // Received errors for this.
// import fetch from "node-fetch";
const accessToken = process.env.GITHUB_ACCESS_TOKEN;
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

// // const request = require("request");
// request("http://www.google.com", function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body); // Print the google web page.
//   }
// });

// // NOTE: GraphQL call without a function call.
const response = await fetch(`https://api.github.com/graphql`, {
  method: "POST",
  body: JSON.stringify({ query }),
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
})
  // .then(() => console.log("response received."))
  .then((res) => res.json())
  // .then((body) => {
  //   const edges = body.data.user.pinnedItems.edges;
  //   console.log(edges);
  // })
  .catch((error) => console.error("error:", error));

// NOTE: GraphQL call with a function call.
// function myFetchFunction() {
//   console.log("myFetchFunction fired.");
//   setTimeout(() => {
//     fetch(`https://api.github.com/graphql`, {
//       method: "POST",
//       body: JSON.stringify({ query }),
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((body) => console.log(body))
//       .catch((error) => console.error("error:", error));
//   }, 5000);
// }
// myFetchFunction();

var app = express();
app.get("/", function (req, res) {
  //   const edges = body.data.user.pinnedItems.edges;
  // console.log(response.data);
  console.log("response receivedJ:", response.data.user);
  res.json(response.data.user);
  // res.send("Hello World!");
});
app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
