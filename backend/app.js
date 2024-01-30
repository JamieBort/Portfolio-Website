// ./backend/app.js

// NOTE: Successfully pulling data from the backend.

// To do this:

// 1. Using VSCode open a live server on the `./jamiebort.github.io/frontend/index.html` file.

// 2. Make sure the "http://127.0.0.1:5500" is listed in the "allowedOrigins" array in the "./jamiebort.github.io/backend/app.js" file.

// 3. Run the `nodemon --env-file=.env app.js` command in the "./jamiebort.github.io/backend/" directory.

// 4. Lastly, load the http://127.0.0.1:5500/frontend/index.html page in a browser.

// require("dotenv").config(); // Don't need this.
import express from "express";
import cors from "cors";
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

const allowedOrigins = [
  "http://127.0.0.1:3000",
  "http://127.0.0.1:5500",
  "http://127.0.0.1:5500/frontend/index.html",
  "http://localhost:3000",
  "file:///Users/jamiebort/Documents/DevFiles/Personal_Projects/jamiebort.github.io/frontend/index.html",
  "http://127.0.0.1:5500/frontend/index.html",
];

// const corsOptions = {
//   origin: "http://127.0.0.1:5500",

//   optionsSuccessStatus: 200,
// };

// const corsOptions = {
//   origin: "http://127.0.0.1:5500/frontend/index.html",
//   optionsSuccessStatus: 200,
// };

const corsOptions = {
  origin: (origin, callback) => {
    // console.log("allowedOrigins.indexOf(origin) :", allowedOrigins.indexOf(origin));
    // console.log("origin:", origin);
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

var app = express();
app.use(cors(corsOptions));
app.get("/", cors(corsOptions), function (req, res) {
  //   const edges = body.data.user.pinnedItems.edges;
  console.log(response);
  // console.log("response receivedJ:", response.data.user);
  res.json(response);
  // res.json(response.data.user);
  // res.send("Hello World!");
});
app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
