# ToDo Items

Items to be addressed in the `fullstack_rebuild` branch.

Or to be moved to the `./administrative/Tasks.md` file to be addressed at a later date.

---

- Do these 2 things together and in sequence:

  - Do these 3 things together and in sequence in the `fullstack_rebuild` branch:

    - **DONE.** ~~This `./backend/LICENSE` exists. What to do about it? Address this. **Likely remove this file.**~~

    - Rebuild the front end.

      By:

          - moving the following `./assets/`, `./css/`, `./html/`, and `./js/` directories into `./fontend/` and

          - removing the `./index.html` file.

          - add an I18y library to translate parts of the site that are dynamically updated from GraphQL api calls. Possibly polyglot.js.

          - add a media query library to facilitate building a responsive site. Possibly react-responsive.

      - Look up the typical file structure for Vite front ends.

      - Then move those directories.

      - Then remove the `./index.html` file.

      - Then add the I18y library.

      - Then add the media query library.

    - Account for the time(s) when the api call doesn't work. Or when the server id down. Or when github is down. Etc.

      By creating a default list to load.

  - Do these 5 things together and in sequence:

    - merge the `fullstack` branch into the `dev` branch.

    - redeploy the frontend AND the backend. from the `dev` branch.

    - Then merge the `dev` branch into the `master` branch.

    - redeploy the frontend AND the backend. from the `master` branch.

    - Point the new frontend url to jamiebort.com

- Other feature and changes to implement:

  - **figure out and fix why the frontend api lags.** It appears as though the backend "goes to sleep.The api call doesn't load until the page is reloaded (opened) twice. Or until the backend is loaded twice. How to keep the server from going down. From sleeping. Ping it every 25 minutes?

  - Rebuild the front end with Svelt and Typescript at a later date. A goal for a later date. See the [Front End To Do](https://github.com/JamieBort/jamiebort.github.io/blob/fullstack/administrative/Tasks.md#front-end-to-do) section.

  - Then merge the `dev` branch into the `master` branch.

  - redeploy the frontend AND the backend. from the `master` branch.

  - find a library to translate my repo descriptions into Spanish. **a goal for a later date**

- Feature for my Personal dashboard: a search feature that allows me to search the LearningDirectory by phrases.
