# administrative

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
		+-- backend - For all back end implementation.
		|
		+-- content - For modifying content.
		|
		+-- frontend - For all front end implementation.
		|
		+-- host - For all things host related.
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

  - Future features section of the repo. Here is listed the things I plan on adding to the repo.

- ./administrative/README.md

  - This readme file.

- ./administrative/Revamp2023.md

  - This file is for keeping track of the status and the tasks that need to be completed while I rebuild my portfolio website.

- ./administrative/Tasks.md

  - To-Do items that need to be addressed.

- ./gitignore

  - Specifies intentionally untracked files. See https://git-scm.com/docs/gitignore

- ./index.html

  - The landing page. This links to `./html/index.html`.

- ./README.md

  - This readme file.
