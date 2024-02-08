# ToDo Items

Items to be addressed in the `fullstack_cleanup` branch.

Or to be moved to the `./administrative/Tasks.md` file to be addressed at a later date.

---

- **DONE.** ~~redeploy the frontend AND the backend.~~

- Do these three things together and in sequence

  - **DONE.** ~~First research whether I can install cores with yarn alone, rather than have a package-lock.json file.~~

  - Then

    - **DONE.** ~~remove the `./backend/node_modules/` directory.~~

    - **DONE.** ~~rename the `./backend/package-lock.json` file as `./backend/temp_package-lock.json`.~~ Copied them to the `./jamiebort.github.io/backend/npm_yarn_config_files/` directory.

    - **DONE.** ~~remove the `./backend/package-lock.json` file.~~

    - **DONE.** ~~reinstall the `./backend/node_modules/` directory with just the `yarn` command.~~

    - **DONE.** ~~redeploy the app on Render.com~~

  - **DONE.** ~~Lastly, remove the `backup_package.json` and the `backup_yarn.lock` files.~~

- Do these two things together and in sequence

  - **DONE.** ~~re-deploy the front end with the name`frontend_jamiebort.github.io`~~

  - remove the old front end service

- **This was already completed.** ~~Do these two things together and in sequence~~

  - re-deploy the back end with the name `backend_jamiebort.github.io`

  - ~~remove the old back end service~~ Nothing to remove.

- **DONE.** ~~Address the gitignore situation:~~

  - ~~Research whether Render.com needs `./frontend/.gitignore` and `./backend/.gitignore` files.~~

    ~~Or if I can use just `./.gitignore`.~~

  - **Deleted the old_frontend_gitignore file.** ~~Possibly restore the `./jamiebort.github.io/old_frontend_gitignore` frontend gitignore file as `./jamiebort.github.io/.gitignore`.~~

- Cleanup

  - remove/delete

    - **DONE.** ~~close unused browser windows.~~

    - **DONE.** ~~the `scratch_old.md` and the `scratch.README.md` files.~~

    - **DONE.** ~~Delete the ./fontend/.env.local file.~~ Updated info in the file.

    - **DONE.** ~~Delete the "JamieBort/express-hello-world" repo.~~

    - **DONE.** ~~remove the webservices associated with~~

      - **DONE.** ~~https://express-hello-world-9pqq.onrender.com and~~

      - **DONE.** ~~https://jamiebort-github-io-backend.onrender.com~~

    - the `./jamiebort.github.io/backend/npm_yarn_config_files/` directory.

    - Remove all the old branches. Including the `back_end` branches and the `front_end` branches and the `*_backup` branches. But there be more.

    - **DONE.** ~~The `./old_backend/` directory.~~

  - **DONE.** ~~exclude the ./.vscode/ directory from the repo.~~

  - **DONE.** ~~change "var" to "const" in the ./backend/app.js file.~~

  - Clean up the ./fontend/App.jsx file.

- comment the code - add comments so that

  - **I understand what is happening**.

  - And so that other people understand what is happening.

- redeploy the frontend AND the backend.

- merge the `back_end_express` branch into the `fullstack` branch.

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

- **figure out and fix why the frontend api call doesn't load until it the page is reloaded (opened) twice.**

- Then merge the `dev` branch into the `master` branch.

- redeploy the frontend AND the backend. from the `master` branch.

- redirect jamiebort.com to https://jamiebort-github-io-frontend-react.onrender.com/

- find a library to translate my repo descriptions into Spanish. **a goal for a later date**

- Feature for my Personal dashboard: a search feature that allows me to search the LearningDirectory by phrases.
