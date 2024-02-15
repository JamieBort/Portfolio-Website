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
		|
		+-- content - For modifying content.
		|
		+-- fullstack - For implementing a front end and back end.
		|   |
		    +-- fullstack_rebuild - For migrating frontend files and directories that are currently in the root directory into the ./frontend/ directory.
		|
		+-- host - For all things host related.
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

  - ./administrative/cards/

    - A directory to keep all of my Card component research.

    - To be deleted when the `fullstack_rebuild` branch is deleted.

  - ./administrative/translation/

    - This directory is used to keep note for the translation task.

    - To be deleted when the `fullstack` branch is deleted.

- ./assets/

  - The directory for the static resources.

- ./backend/

  - Directory containing the back end of this app.

- ./css/

  - Contains all CSS files.

- ./html/

  - With the exception of `./index.html`, this directory contains all of the html files. And it contains only html files.

- ./js/

  - Contains all JavaScript files.

- scratch/

  - A directory to keep files and directories temporarily.

  - Contains files and directories that are not needed for the deployment.

  - Examples: lists of things that I need to complete.

  - It is not tracked by Git.

### Files

- ./administrative/fullstack_rebuild_branch_TODO.md

  - Items to be addressed in the `fullstack_rebuild` branch.

  - Or to be moved to the `./administrative/Tasks.md` file to be addressed at a later date.

- ./administrative/README.md

  - This readme file.

- ./administrative/Tasks.md

  - To-Do items that need to be addressed.

- ./administrative/vite_directory_structure.md

  - Temporary file for preparing to move files and directories.

  - To be deleted when the `fullstack_rebuild` branch is deleted.

- ./gitignore

  - Specifies intentionally untracked files. See https://git-scm.com/docs/gitignore

- ./index.html

  - The landing page. This links to `./html/index.html`.

- ./README.md

  - This readme file.
