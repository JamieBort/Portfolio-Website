# administrative

## How to use

### Locally

1. Start back end server.

   a. Make sure the "http://127.0.0.1:5500" is listed in the "allowedOrigins" array in the "./jamiebort.github.io/backend/app.js" file.

   b. Run the `nodemon --env-file=.env app.js` command in the "./jamiebort.github.io/backend/" directory.

2. Start front end server.

   a. Using VSCode open a live server on the `./jamiebort.github.io/frontend/index.html` file. NOTE: file name and/or path due to change.

3. Lastly, load the http://127.0.0.1:5500/frontend/index.html page in a browser.

### Hosted

Not yet hosted.

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
		|	+-- back_end - For all back end implementation.
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

- ./administrative/accessibilityIssues/

  - Contains accessibility issues raised by other people. And accessibility issues/questions that I need answered.

- ./administrative/aestheticDesignChanges/

  - A directory for the list of aesthetic things that need to change with the website.

- ./administrative/

  - Files for organizational purposes.

  - Notes on how to change/improve the site.

  - All documentation not needed to be seen.

- ./.vscode/

  - See the [Workspace settings](https://code.visualstudio.com/docs/getstarted/settings#:~:text=Note%3A%20A%20VS%20Code%20%22workspace,feature%20called%20Multi%2Droot%20workspaces) in the VS Code documentation.

- ./assets/

  - The directory for the static resources.

- ./css/

  - Contains all CSS files.

- ./html/

  - With the exception of `./index.html`, this directory contains all of the html files. And it contains only html files.

- ./js/

  - Contains all JavaScript files.

### Files

- ./administrative/FutureFeatures.md

  - **This file is no longer in this directory.**

  - Future features section of the repo. Here is listed the things I plan on adding to the repo.

- ./administrative/old_frontend_gitignore

  - Moved this file from the `./jamiebort.github.io/frontend` directory.

  - It was removed to clean up the codebase.

  - `./.gitignore` was first updated.

  - It is saved here in case I need to restore it. **It is possible that Render.com will need it when the frontend is deployed there.**

- ./administrative/README.md

  - This readme file.

- ./administrative/Revamp2023.md

  - **This file is no longer in this directory.**

  - This file is for keeping track of the status and the tasks that need to be completed while I rebuild my portfolio website.

- ./administrative/Tasks.md

  - To-Do items that need to be addressed.

- ./gitignore

  - Specifies intentionally untracked files. See https://git-scm.com/docs/gitignore

- ./index.html

  - The landing page. This links to `./html/index.html`.

- ./README.md

  - This readme file.
