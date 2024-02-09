// ./backend/app.js

// This ./backend/app.js file is the entry point for the back end.

const express = require("express");
const app = express();
// If PORT is not assigned a value in the .env file(s), 3001 will be used.
const port = process.env.PORT || 3001;
const cors = require("cors");
// The access token for GitHub. It's sensitive
const accessToken = process.env.GITHUB_ACCESS_TOKEN;

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

// The various URLs that are allowed to make api calls against this backend.
// http://127.0.0.1:5500 is sufficient for ./jamiebort.github.io/frontend/index.html in VS Code.
// NOTE: Local files do not work. They have to be served.
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

// The middleware to use cors.
app.use(cors(corsOptions));

// TODO: comment about async and await
// For requests to the root URL (/) or route, the app responds with the object that is received from the fetch.
// For every other path, it will respond with a 404 Not Found.
app.get("/", cors(corsOptions), async function (req, res) {
  // app.get("/", async function (req, res) { // NOTE: this apparently works too.
  const response = await fetch(`https://api.github.com/graphql`, {
    method: "POST",
    body: JSON.stringify({ query }),
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => res.json())
    .then((body) => {
      // Handling the data before sending it back.
      try {
        if (body.message) {
          console.log("body.message:", body.message);
          return body.message;
        }
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

  // NOTE: Use one of these two to send back a String response. Or an html response.
  // res.send("Hello World!");
  // res.type("html").send(html);
});

// app.get("/", (req, res) => res.type("html").send(html));

// This app starts a server and listens on port "port" for connections.
const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// TODO: read up on keepAliveTimeout AND headersTimeout.
// NOTE: commented out.
// server.keepAliveTimeout = 120 * 1000;
// server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello from Render!
    </section>
  </body>
</html>
`;
