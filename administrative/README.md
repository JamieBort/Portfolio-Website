# administrative

## How to use

### Locally

1. Start back end server.

   See `Start back end server locally` in the `./jamiebort.github.io/backend/README.md` file.

2. Start front end server.

   See `Start front end server locally` in the `./jamiebort.github.io/frontend/README.md` file.

### Hosted

See

- `Start front end server remotely` in the `./jamiebort.github.io/frontend/README.md` file.

- and see `Start back end server remotely` in the `./jamiebort.github.io/backend/README.md` file.

## Future Features

Here is listed the things I plan on adding to the repo.

### Features To Add

- A blog in general. Either a button in the navigation to opens a new page. Or a blog that I build on the same site but a different page. See https://trello.com/c/gC6QcX7k/493-blog-page

- A presentations section. Where I can list my talks and presentations.

- A contract me form that sends me an email - existing code needs to be modified.

- Develop API call for the projects in GitHub.

### The Projects Section

- Projects buttons that do the following:
  - Three buttons:
    - "Completed" - toggles "In Progress" off.
    - "In Progress" - toggles "Completed" off.
    - "Both" - enables both "Completed" and "In Progress" on.
  - Three buttons:
    - "My Own Projects" - toggles "Projects I'm Contributing On" off.
    - "Projects I'm Contributing On" - toggles "My Own Projects" off.
    - "Both" - enables both "My Own Projects" and "Projects I'm Contributing On" on.
  - One button:
    - "Pinned Repos" - toggles the pinned repos ON/OFF.

## Branch Structure

```
+-- master - The live branch.
	|
	+-- dev - The development branch
		|
		+-- administrative - For cleaning up the files and reorganizing the file structure.
		|
		+-- accessibility - For all accessibility implementation.
		|
		+-- appearance - For modifying the appearance.
		|	|
		|	+-- breakpoint - For implementing breakpoints in the CSS file.
		|		|
		|		+-- breakpoint_mobile - For implementing a mobile HORIZONTAL breakpoint in the CSS file. The current default styles are for mobile in a vertical orientation.
		|		|
		|		+-- breakpoint_tablet - For implementing a tablet breakpoint in the CSS file. *** Need to consider horizontal and vertical orientations. ***
		|		|
		|		+-- breakpoint_desktop - For implementing desktop breakpoint in the CSS file.
		|
		+-- api - For all api related logic.
		|	|
		|	+-- api_github - For implementing api calls to GitHub.
		|
		+-- content - For modifying content.
		|
		+-- fullstack - For implementing a front end and back end.
		|	|
		|	+-- fullstack_cleanup - For adding comments to code, researching "keepAliveTimeout", and addressing the other tasks in the ./scratch.md file.
		|	|
		|	+-- back_end - For all back end implementation.
		|		|
		|		+-- back_end_express - For deploying the forked express repo to Render.
		|		|
		|		+-- back_end_deploy - For deploying to Render.
		|	|
		|	+-- front_end - For all front end implementation.
		|		|
		|		+-- front_end_NextJS - Front end built with NextJS.
		|		|	|
		|		|	+-- front_end_NextJS_api_call - To make an api call with NextJS to an open api.
		|		|	|
		|		|	+-- front_end_NextJS_GraphQL_call_to_repo - To make a GraphQL call with NextJS to my repo.
		|		|	|
		|		|	+-- front_end_NextJS_GraphQL_call_to_local_backend - To make a GraphQL call with NextJS to my repo from my local backend. (Local front end sends api call to backend.)
		|		|	|
		|		|	+-- front_end_NextJS_GraphQL_call_to_repo_from_hosted_frontend - To make a GraphQL call with NextJS from the frontend (hosted on Render) directly to an my repo.
		|		|	|
		|		|	+-- front_end_NextJS_GraphQL_call_to_hosted_backend_from_hosted_frontend - To make an api call with NextJS from the frontend to the backend (both hosted on Render), which in turn makes a GraphQL call my repo.
		|		|
		|		+-- front_end_React - Front end built with React.
		|		|	|
		|		|	+-- front_end_React_api_call - To make an api call with React to an open api.
		|		|	|
		|		|	+-- front_end_React_GraphQL_call_to_repo - To make a GraphQL call with React to my repo.
		|		|	|
		|		|	+-- front_end_React_GraphQL_call_to_local_backend - To make a GraphQL call with React to my repo from my local backend. (Local front end sends api call to backend.)
		|		|	|
		|		|	+-- front_end_React_GraphQL_call_to_repo_from_hosted_frontend - To make a GraphQL call with React from the frontend (hosted on Render) directly to an my repo.
		|		|	|
		|		|	+-- front_end_React_GraphQL_call_to_hosted_backend_from_hosted_frontend - To make an api call with React from the frontend to the backend (both hosted on Render), which in turn makes a GraphQL call my repo.
		|		|
		|		+-- front_end_VanillaJS - Front end built with vanilla JavaScript.
		|
		+-- host - For all things host related.
		|	|
		|	+-- host_render - For all things host related using Render.com.
		|
		+-- script - For all script related logic.
		|
		+-- Revamp2023 - The branch created to update the website in 2023.
```

## Directories and Files

### Directories

- ./.vscode/

  - Directory for config file for VS Code.

  - For information, see the [.vscode](https://github.com/JamieBort/LearningDirectory/tree/master/Git/configFiles#vscode) section of the `configFiles` directory of the `LearningDirectory` repo.

- ./administrative/

  - Files for organizational purposes.

  - Notes on how to change/improve the site.

  - All documentation not needed to be seen.

  - ./administrative/accessibilityIssues/

    - Contains accessibility issues raised by other people. And accessibility issues/questions that I need answered.

  - ./administrative/aestheticDesignChanges/

    - A directory for the list of aesthetic things that need to change with the website.

- ./assets/

  - The directory for the static resources.

- ./backend/

  - Directory containing the back end of this app.

- ./frontend/

  - Directory containing the front end of this app.

  - ./frontend/npm_yarn_config_files/

    - Temporary directory while I work on cleaning up the dual package config files.

    - See the `fullstack_cleanup_branch_TODO.md` file.

- ./css/

  - Contains all CSS files.

- ./html/

  - With the exception of `./index.html`, this directory contains all of the html files. And it contains only html files.

- ./js/

  - Contains all JavaScript files.

### Files

- ./administrative/browser_tab_notes.md

  - Temporary notes for anything I found regarding issues I had while working on the previous branch.

  - Or to address issues I am about to address.

- ./administrative/fullstack_cleanup_branch_TODO.md

  - Items to be addressed in the `fullstack_cleanup` branch.

  - Or to be moved to the `./administrative/Tasks.md` file to be addressed at a later date.

- ./administrative/old_frontend_gitignore

  - Moved and renamed from `./frontend/.gitignore` to `./administrative/old_frontend_gitignore`

  - Added the contents to the `./.gitignore` file.

  - It was removed to clean up the repo.

  - Keeping it in `./administrative/` in case it is needed in the future. For example in case Render.com needs it to deploy correctly.

  - It is saved here in case I need to restore it. **It is possible that Render.com will need it when the frontend is deployed there.**

- ./administrative/README.md

  - This readme file.

- ./administrative/Tasks.md

  - To-Do items that need to be addressed.

- ./gitignore

  - Specifies intentionally untracked files. See https://git-scm.com/docs/gitignore

- ./index.html

  - The landing page. This links to `./html/index.html`.

- ./README.md

  - This readme file.
