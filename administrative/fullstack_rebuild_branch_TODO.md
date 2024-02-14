# ToDo Items

Items to be addressed in the `fullstack_rebuild` branch.

Or to be moved to the `./administrative/Tasks.md` file to be addressed at a later date.

Today added navigation:
https://reactrouter.com/en/main/router-components/browser-router
and
https://reactrouter.com/en/main/router-components/hash-router

And added components mui components such as:
import { Box, Container, Grid, Stack, Typography, Icon, Link } from "@mui/material";

Today I styled the cards more.
I switched out the cards more.
I cleaned up the files.
I have created a standbyData variable for when the backend server is not available. This will be called in the event that the backend does not work.

---

- Do these 2 things together and in sequence:

  - Do these 3 things together and in sequence in the `fullstack_rebuild` branch:

    - **DONE.** ~~This `./backend/LICENSE` exists. What to do about it? Address this. **Likely remove this file.**~~

    - Rebuild the front end.

      By:

          - moving the following `./assets/`, `./css/`, `./html/`, and `./js/` directories into `./fontend/` and

          - removing the `./index.html` file.

          - add an I18y library to translate parts of the site that are dynamically updated from GraphQL api calls. Possibly polyglot.js.

          - add a media query library to facilitate building a responsive site. Possibly react-responsive. This might not be necessary. MUI might address this nicely. But maybe not.

      - Aesthetic Changes:

        - **DONE.** ~~Minimize space between "Jamie Bort" and "Software Engineer"~~

        - Card Breakpoints https://mui.com/material-ui/customization/breakpoints/

        - **DONE.** ~~for loading symbol and icons https://mui.com/material-ui/all-components/~~

        - **DONE.** ~~Create space between header text and left side~~

        - min height for projects section while projects are loading

        - **DONE.** ~~Update the favicon (browser icon) from the Vite one to my `JB` one.~~

      - Look up the typical file structure for Vite front ends.

      - Then move those directories.

      - Then remove the `./index.html` file.

      - **DONE.** ~~Then change the name of this repo from `jamiebort.github.io` to `Portfolio Website`.~~

      - Add the media query library.

      - Then do these 2 things together:

        - Then add the I18y library.

        - Add a `English/Español` translate button.

    - Account for the time(s) when the api call doesn't work. Or when the server id down. Or when github is down. Etc.

      By creating a default list to load.

  - Do these 2 things together and in sequence:

    - Create a legacy branch or directory of the `master` branch.

      Either

      - choose branches:

        - create a `legacy` branch.

        - create a `legacy_2023` branch by copying the master branch.

        - clean up the file directory so that it doesn't contain anything but the `./assets/`, `./css/`, `./html/`, and `./js/` directories and the `./index.html` file. **do a dry run of this to ensure directories and files are not accidentally removed**

      - or choose directory

        - create a `legacy` directory.

        - create a `legacy_2023` directory inside of the `legacy` directory.

        - move working files (`./assets/`, `./css/`, `./html/`, and `./js/` directories and the `./index.html` file.) into the `legacy_2023` directory.

    - merge the `fullstack_rebuild` branch into the `fullstack` branch.

- Do these 5 things together and in sequence:

  - merge the `fullstack` branch into the `dev` branch.

  - redeploy the frontend AND the backend. from the `dev` branch.

  - Then merge the `dev` branch into the `master` branch.

  - redeploy the frontend AND the backend. from the `master` branch.

  - Point the new frontend url to jamiebort.com

- Other feature and changes to implement:

  - **figure out and fix why the frontend api lags.** It appears as though the backend "goes to sleep.The api call doesn't load until the page is reloaded (opened) twice. Or until the backend is loaded twice. How to keep the server from going down. From sleeping. Ping it every 25 minutes? This setInterval(() => {apiCall()}, 1000 _ 60 _ 25); didn't work.

  - Rebuild the front end with Svelt and Typescript at a later date. A goal for a later date. See the [Front End To Do](https://github.com/JamieBort/jamiebort.github.io/blob/fullstack/administrative/Tasks.md#front-end-to-do) section.

  - Then merge the `dev` branch into the `master` branch.

  - redeploy the frontend AND the backend. from the `master` branch.

  - find a library to translate my repo descriptions into Spanish. **a goal for a later date**

- Feature for my Personal dashboard: a search feature that allows me to search the LearningDirectory by phrases.

- Read up on this https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
