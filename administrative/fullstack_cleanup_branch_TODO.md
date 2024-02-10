# ToDo Items

Items to be addressed in the `fullstack_cleanup` branch.

Or to be moved to the `./administrative/Tasks.md` file to be addressed at a later date.

---

- Do these 3 things in consecutively:

  - Clean up the .gitignore files.

    - **Deleted it.** ~~Address this `./frontend/.vite/` directory. Where did it come from? Was it in the previous branch? Removed from the git cache and added to the gitignore file.~~

    - See

      - https://github.com/JamieBort/LearningDirectory/tree/master/Git/gitignore#pattern-format,

      - https://github.com/JamieBort/LearningDirectory/tree/master/Git/gitignore#associated-links,

      - https://www.google.com/search?q=gitignore+for+render.com&oq=gitignore+for+render.com&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDM1MTFqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8,

      - https://docs.render.com/monorepo-support

      - https://community.render.com/t/env-and-gitignore-with-render/12237,

      - and https://www.google.com/search?q=does+Render.com+need+.gitignore&oq=does+Render.com+need+.gitignore&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDUxODBqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8

  - Do these two things together and in sequence:

    - decide

      - whether to rebuild the front end with Svelt and Typescript

      - or

        - move the following `./assets/`, `./css/`, `./html/`, and `./js/` directories into `./fontend/`,

        - remove the `./index.html` file,

        - and rebuild the front end with Svelt and Typescript at a later date **a goal for a later date**

    - Act on that decision. **Create a new branch for this.**

    Svelt Typescript resources:

    - https://www.google.com/search?q=typescript+svelt&oq=typescript+svelt&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBCDc0NTBqMGoxqAIAsAIA&sourceid=chrome&ie=UTF-8,

    - https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Svelte_TypeScript,

    - and https://svelte.dev/docs/typescript

  - This `./backend/LICENSE` exists. What to do about it? Address this. **Likely remove this file.**

- Do these 2 things in consecutively:

  - merge the `fullstack` branch into the `dev` branch.

  - redeploy the frontend AND the backend. from the `dev` branch.

- **figure out and fix why the frontend api lags.** It appears as though the backend "goes to sleep.The api call doesn't load until the page is reloaded (opened) twice. Or until the backend is loaded twice. How to keep the server from going down. From sleeping. Ping it every 25 minutes?

- Then merge the `dev` branch into the `master` branch.

- redeploy the frontend AND the backend. from the `master` branch.

- redirect jamiebort.com to https://jamiebort-github-io-frontend-react.onrender.com/

- find a library to translate my repo descriptions into Spanish. **a goal for a later date**

- Feature for my Personal dashboard: a search feature that allows me to search the LearningDirectory by phrases.
