# administrative

## How to use

### Locally

1. Start back end server.

   See [Start back end server locally](../backend/README.md#start-back-end-server-locally) in the `backend/` [README.md](../backend/README.md) file.

2. Start front end server.

   See [Start front end server locally](../frontend/README.md#start-front-end-server-locally) in the `frontend/` [README.md](../frontend/README.md) file.

### Hosted

<!-- TODO: clean up this section just to look like `Locally` above. -->

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
		|
		+-- api - For all api related logic.
		|
		+-- content - For modifying content.
		|
		+-- Revamp2023 - The branch created to update the website in 2023.
```

## Directories and Files

### Directories

### [./.github/](../.github)

This is where the Pull Request template lives. See [Pull Request Templates](https://github.com/JamieBort/LearningDirectory/tree/master/Git/pull_request_templates).

<!-- This is also where the Dependabot yaml file is. Right now it is used just for `Dependabot version updates`. See [Dependabot](https://github.com/JamieBort/LearningDirectory/tree/master/Git/security#dependabot). -->

- ./.vscode/

  - Directory for config file for VS Code.

  - For information, see the [.vscode](https://github.com/JamieBort/LearningDirectory/tree/master/Git/configFiles#vscode) section of the `configFiles` directory of the `LearningDirectory` repo.

  - Omitted from this repo.

- ./administrative/

  - Files for organizational purposes.

  - Notes on how to change/improve the site.

  - All documentation not needed to be seen.

  - ./administrative/accessibilityIssues/

    - Contains accessibility issues raised by other people. And accessibility issues/questions that I need answered.

  - ./administrative/legacy/

    - This directory contains the legacy files and directories used to create my website from previous versions.

  - ./administrative/translation/

    - This directory is used to keep note for the translation task.

    - To be deleted when ~~the `fullstack` branch is deleted~~ it is implemented.

- ./backend/

  - Directory containing the back end of this app.

- ./frontend/

  - Directory containing the front end of this app.

- scratch/

  - A directory to keep files and directories temporarily.

  - Contains files and directories that are not needed for the deployment.

  - Examples: lists of things that I need to complete.

  - It is not tracked by Git.

### Files

- ./administrative/README.md

  - This readme file.

- ./administrative/Tasks.md

  - To-Do items that need to be addressed.

- ./gitignore

  - Specifies intentionally untracked files. See https://git-scm.com/docs/gitignore

- CONTRIBUTING.md

  - The contribution guide for this repo.

- Contributor_Covenant_Code_of_Conduct.md

  - The code of conduct for this repo.

- COPYING.txt

  - The license for this repo.

  - The text can be found [here](../COPYING.txt).

- ./README.md

  - This readme file.
