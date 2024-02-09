// ./backend/app.js

// This ./backend/app.js file is the entry point for the back end.

// Spin up an Express server.
const express = require("express");
// Create an Express application. express() is "a top-level function exported by the express module"
const app = express();
// If PORT is not assigned a value in the .env file(s), port 3001 will be used.
const port = process.env.PORT || 3001;
// Addressing Cross-Origin Resource Sharing (CORS).
const cors = require("cors");
// The access token for GitHub. It's sensitive
const accessToken = process.env.GITHUB_ACCESS_TOKEN;

// The endpoint we're making a GraphQL api call against.
const URL = `https://api.github.com/graphql`;

// The GraphQL query used to obtain the list of Repos that are pinned in my GitHub account.
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

// An object containing the type of fetch (a POST), the body (my GraphQL query), and the headers (my GitHub authorization).
const fetchOptions = {
  method: "POST",
  body: JSON.stringify({ query }),
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
};

// The various URLs that are allowed to make api calls against this backend.
// http://127.0.0.1:5500 is sufficient for ./jamiebort.github.io/frontend/index.html in VS Code.
const allowedOrigins = ["http://localhost:5173", "http://127.0.0.1:3000", "http://127.0.0.1:5500", "http://localhost:3000", "https://frontend-jamiebort-github-io.onrender.com"];

// Checking the allowedOrigins array above to see if the URL is in fact in the list of allowed URLs.
// If Not, an error is thrown.
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

// Asynchronous function. Because there is a delay in getting a response back from the server(s).
const postFetch = async function (req, res) {
  // An await method. Because we're returning a promise.
  const response = await fetch(URL, fetchOptions)
    // The json() method returns a promise which resolves by parsing the body text as JSON.
    .then((res) => res.json())
    .then((body) => {
      console.log("body:", body);
      // Handling the data before sending it back.
      try {
        // In the case that we get a message rather than data, we'll pass that back to the front end.
        if (body.message) {
          console.log("body.message:", body.message);
          return body.message;
        }
        // Here we return the data to be passed back to the front end.
        console.log("body.data:", body.data);
        return body.data.user.pinnedItems.edges;
      } catch (error) {
        // Catching any errors.
        console.log("error.message:", error.message);
        return ["there was an error:", error.message];
      }
    })
    .catch((error) => {
      // Catching other errors.
      console.error("error:", error);
    });

  // Sending the data back to the front end.
  // Sending the object that is received from the fetch.
  res.json(response);
  // console.log("response:", response);
};

// The middleware to use cors.
// NOTE: Using "app.use(cors(corsOptions));" with  enables All CORS Requests)
//       For specific routes, forego "app.use(cors(corsOptions));" and use this "app.get("/", cors(corsOptions), postFetch);"
app.use(cors(corsOptions));

// For requests to the root URL (/) or route, the app responds with the object that is received from the fetch.
// For every other path, it will respond with a 404 Not Found.
// app.get for GET requests.
app.get("/", postFetch);

// This app starts a server and listens on port "port" for connections.
// Receives incoming TCP connections.
const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// TODO: read up on keepAliveTimeout AND headersTimeout.
// NOTE: commented out.
// server.keepAliveTimeout = 120 * 1000;
// server.headersTimeout = 120 * 1000;
