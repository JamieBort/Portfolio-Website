# Welcome to the repo for my [Portfolio Website](https://jamiebort.com/)

### Here you will be able to

- read a bit about me,
- see a few projects that I am highlighting,
- and lastly find out how to contact me as well as follow me on social media.

### Notable Features

Notable features of this site are:

- It is written in vanilla JavaScript.
- I wrote web components for navigation.
- I am in the process of making this site accessible by following Web Content Accessibility Guidelines (WCAG).
- It is fully responsive.

### Aspirations

This site

- will link to my blog,
- and have
  - a Contact Me form,
  - a Resources page
  - and a page of Fun Things to explore

On each relevant page you will be able to filter the content by a text field or by selecting key phrases (css, debugging, back end, etc.) and attributes (title, date, etc.).

Additionally, I will continue to make changes to this site to make it more accessible.

### Branch Structure

```
+-- master - The live branch.
	|
	+-- dev - The development branch
		|
		+-- Revamp2023 - The branch created to update the website in 2023.
			|
			+-- content - For adding content.
			|	|
			|	+-- content_other-feature-branches -
			|
			+-- host - For all things host related.
			|	|
			|	+-- host_routed_react_gh-pages - To determine if we can run a react app in gh-pages. If so, we'll make a GraphQL call.
			|		|
			|		+-- host_routed_react_gh-pages_with_graphql_api_call - To see if I can make API calls using the a React app while hosted by gh-pages. **Tabled for now**
			|
			+-- api - For all api related logic.
			|	|
			|	+-- api_github - For implementing api calls to GitHub.
			|
			+-- script - For all script related logic.
			|	|
			|	+-- script_other-feature-branches -
			|
			+-- breakpoint - For implementing breakpoints in the CSS file.
			|	|
			|	+-- breakpoint_tablet - Doesn't exist (yet). For implementing a tablet breakpoint in the CSS file.
			|	|
			|	+-- breakpoint_desktop - Doesn't exist (yet). For implementing desktop breakpoint in the CSS file.
			|
			+-- accessibility - For all accessibility implementation.
```

### Directories and Files

#### Directories

- .vscode/ - See the [Workspace settings](https://code.visualstudio.com/docs/getstarted/settings#:~:text=Note%3A%20A%20VS%20Code%20%22workspace,feature%20called%20Multi%2Droot%20workspaces) in the VS Code documentation.

- assets/ - The directory for the static resources.

- css/ - Contains all CSS files.

- DesignChanges/ - A directory for the list of things that need to change with the website.

- html/ - With the exception of `./index.html`, this directory contains all of the html files. And it contains only html files.

- js/ - Contains all JavaScript files.

#### Files

- .gitignore - Specifies intentionally untracked files. See https://git-scm.com/docs/gitignore

- FutureFeatures.md - Future features section of the repo. Here is listed the things I plan on adding to the repo.

- index.html - The landing page. This links to `./html/index.html`.

- README.md - This readme file.

- Revamp2023.md - This file is for keeping track of the status and the tasks that need to be completed while I rebuild my portfolio website.
