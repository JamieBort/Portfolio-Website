# ToDo Items

Items to be addressed in the `fullstack_cleanup` branch.

Or to be moved to the `./administrative/Tasks.md` file to be addressed at a later date.

---

- Do these two things together and in sequence:

  - comment the code - add comments so that

    - **I understand what is happening**.

    - And so that other people understand what is happening.

  - redeploy the frontend AND the backend.

- Update `name`, `description`, `repository`, `author`, and possibly the `private` properties in the `./backend/package.json` file.

- Do these four things together and in sequence:

  - merge the `back_end_express` branch into the `fullstack` branch.

  - Remove the `./jamiebort.github.io/backend/npm_yarn_config_files/` directory.

  - Remove all the old branches. Including the `back_end` branches and the `front_end` branches and the `*_backup` branches. But there be more.

  - redeploy the frontend AND the backend. from the `fullstack` branch.

- Do these two things together and in sequence:

  - decide

    - whether to rebuild the front end with Svelt and Typescript

    - or

      - move the following `./assets/`, `./css/`, `./html/`, and `./js/` directories into `./fontend/`,

      - remove the `./index.html` file,

      - and rebuild the front end with Svelt and Typescript at a later date **a goal for a later date**

  - Act on that decision.

  Svelt Typescript resources: https://github.com/JamieBort/jamiebort.github.io/blob/fullstack_cleanup/administrative/browser_tab_notes.md#typescript-svelt

- merge the `fullstack` branch into the `dev` branch.

- redeploy the frontend AND the backend. from the `dev` branch.

- **figure out and fix why the frontend api lags.** It appears as though the backend "goes to sleep.The api call doesn't load until the page is reloaded (opened) twice. Or until the backend is loaded twice.

- Then merge the `dev` branch into the `master` branch.

- redeploy the frontend AND the backend. from the `master` branch.

- redirect jamiebort.com to https://jamiebort-github-io-frontend-react.onrender.com/

- find a library to translate my repo descriptions into Spanish. **a goal for a later date**

- Feature for my Personal dashboard: a search feature that allows me to search the LearningDirectory by phrases.
