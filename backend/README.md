# backend

Created from this [Node Express](https://github.com/JamieBort/LearningDirectory/tree/master/Hosting/Render#node-expess) Render document.

And by following this document to make GraphQL calls: https://www.apollographql.com/docs/react/get-started/

## Start back end server locally

1. Make sure the `GITHUB_ACCESS_TOKEN` is in the ./backend/.env file.

2. Make sure "http://localhost:5173" (or whichever url that the front end will be sending a get api call from) is listed in the "allowedOrigins" array in the `backend/app.js` file.

3. Navigate to `backend/`.

4. run `nodemon --env-file=.env app.js`

## Start back end server remotely

[Not setup yet.]

Below is the readme for the original app.

---

This is the [Express](https://expressjs.com) [Hello world](https://expressjs.com/en/starter/hello-world.html) example on [Render](https://render.com).

The app in this repo is deployed at [https://express.onrender.com](https://express.onrender.com).

## Deployment

See https://render.com/docs/deploy-node-express-app or follow the steps below:

Create a new web service with the following values:

- Build Command: `yarn`
- Start Command: `node app.js`

That's it! Your web service will be live on your Render URL as soon as the build finishes.
