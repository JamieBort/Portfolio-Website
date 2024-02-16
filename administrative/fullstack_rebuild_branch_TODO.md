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

- Do these 5 things together and in sequence:

  - merge the `fullstack` branch into the `dev` branch.

  - redeploy the frontend AND the backend. from the `dev` branch.

  - Then merge the `dev` branch into the `master` branch.

  - redeploy the frontend AND the backend. from the `master` branch.

  - Point the new frontend url to jamiebort.com

- Other feature and changes to implement:

  - Aesthetic Changes:

    - Card Breakpoints https://mui.com/material-ui/customization/breakpoints/

    - For horizontal mobile, make the two <Typography/> have same size font.

    - For horizontal mobile, maybe make header and font shrink when scroll down.

    - For mobile horizontal and vertical, when scroll down the header shortens and font gets smaller.

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

  - **figure out and fix why the frontend api lags.** It appears as though the backend "goes to sleep.The api call doesn't load until the page is reloaded (opened) twice. Or until the backend is loaded twice. How to keep the server from going down. From sleeping. Ping it every 25 minutes? This setInterval(() => {apiCall()}, 1000 _ 60 _ 25); didn't work.

  - Rebuild the front end with Svelt and Typescript at a later date. A goal for a later date. See the [Front End To Do](https://github.com/JamieBort/jamiebort.github.io/blob/fullstack/administrative/Tasks.md#front-end-to-do) section.

  - Then merge the `dev` branch into the `master` branch.

  - redeploy the frontend AND the backend. from the `master` branch.

  - In this repo, change references from

    - ...`github.com/JamieBort/jamiebort.github.io`...

    - and ...`jamiebort.github.io`...

    to

    - ...`github.com/JamieBort/Portfolio-Website`...

    - and ...`jamiebort.github.io/Portfolio-Website`...

    For example in `https://raw.githubusercontent.com/JamieBort/Portfolio-Website/master/README.md` change `You can find the full text in this [./COPYING.txt](https://github.com/JamieBort/jamiebort.github.io/blob/master/COPYING.txt) file.` to `You can find the full text in this [./COPYING.txt](https://github.com/JamieBort/Portfolio-Website/blob/master/COPYING.txt) file.`.

  - Add an I18y library to translate parts of the site that are dynamically updated from GraphQL api calls. See the `./jamiebort.github.io/administrative/translation/` directory. Possibly to translate the entire site.

  - Add the media query library.

  - Do these 2 things together:

    - Then add the I18y library.

    - Add a `English/Español` translate button.

- Aesthetic Changes for the future:

  - Adjust the min height for projects section while projects are loading. Currently the <Container/> for the <CircularProgress/> component in the `./frontend/src/components/Projects.jsx` file has `minHeight: "15em",`. This is a fixed dimension. Rather I would like the <ConnectWithMe/> component to be resting on the footer and the height of the <Container/> to fill the space between the `<Typography>Projects</Typography>` in the `./frontend/src/components/sections/ProjectSection.jsx` file and the `<Typography>Connect With Me</Typography>` in the `./frontend/src/components/sections/ConnectWithMe.jsx` file.

- Feature for my Personal dashboard: a search feature that allows me to search the LearningDirectory by phrases.

- Read up on this https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md
