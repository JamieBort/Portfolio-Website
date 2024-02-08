const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
var cors = require("cors"); // NOTE: My code. // TODO: change `var` to `const`.
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

// NOTE: Local files do not work. They have to be served.
// NOTE: http://127.0.0.1:5500 is sufficient for ./jamiebort.github.io/frontend/index.html in VS Code.
const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:3000",
  "http://127.0.0.1:5500",
  "http://localhost:3000",
  "https://jamiebort-github-io-frontend-react.onrender.com", // NOTE: this will be updated to "frontend_jamiebort.github.io". TODO: remove this line.
  "https://frontend-jamiebort-github-io.onrender.com",
];

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

app.use(cors(corsOptions));

// TODO: comment about async and await
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
        const data = body.data;
        console.log(data);
        // const pinnedItems = body.data.user.pinnedItems;
        // console.log(pinnedItems);
        const edges = body.data.user.pinnedItems.edges;
        // console.log(edges);
        return edges;
      } catch (error) {
        console.log("error.message:", error.message);
        return ["there was an error:", error.message];
      }
    })
    .catch((error) => {
      console.error("error:", error);
      // return error;
      // return console.error;
    });

  // console.log("response:", response);
  // Sending the data back.
  res.json(response);

  // Use one of these two to send back a String response. Or an html response.
  // res.send("Hello World!");
  // res.type("html").send(html);
});

// app.get("/", (req, res) => res.type("html").send(html));

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
