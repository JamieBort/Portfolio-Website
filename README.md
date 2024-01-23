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
  - a `Contact Me` form,
  - a `Resources` page
  - and a page of `Fun Things` to explore

Additionally, on each relevant page you will be able to filter the content by a text field or by selecting key phrases (css, debugging, back end, etc.) and attributes (title, date, etc.).

I will continue to make changes to this site to make it more accessible.

Lastly, I will continue to add content to the `Resources` and `Fun Things` pages as well as my blog.

### Branch Structure

```
+-- master - The live branch.
	|
	+-- dev - The development branch
		|
		+-- administrative - For cleaning up the files and reorganizing the file structure.
		|
		+-- accessibility - For all accessibility implementation.
		|
		+-- content - For modifying content.
		|	|
		|	+-- content_projects - For adjusting number of projects displayed and adding their status (completed, ongoing, working on, etc.).
		|
		+-- script - For all script related logic.
		|
		+-- Revamp2023 - The branch created to update the website in 2023.
			|
			+-- appearance - For modifying the appearance.
			|	|
			|	+-- breakpoint - For implementing breakpoints in the CSS file.
			|		|
			|		+-- breakpoint_mobile - The branch doesn't exist (yet). For implementing a mobile HORIZONTAL breakpoint in the CSS file. The current default styles are for mobile in a vertical orientation.
			|		|
			|		+-- breakpoint_tablet - The branch doesn't exist (yet). For implementing a tablet breakpoint in the CSS file. *** Need to consider horizontal and vertical orientations. ***
			|		|
			|		+-- breakpoint_desktop - The branch doesn't exist (yet). For implementing desktop breakpoint in the CSS file.
			|
			+-- host - For all things host related.
			|	|
			|	+-- host_routed_react_gh-pages - To determine if we can run a react app in gh-pages. If so, we'll make a GraphQL call.
			|		|
			|		+-- host_routed_react_gh-pages_with_graphql_api_call - To see if I can make API calls using the a React app while hosted by gh-pages. **Tabled for now**
			|
			+-- api - For all api related logic.
				|
				+-- api_github - For implementing api calls to GitHub.
```

### Directories and Files

#### Directories

- administrative/

  - Files for organizational purposes.

  - Notes on how to change/improve the site.

  - All documentation not needed to be seen.

- .vscode/

  - See the [Workspace settings](https://code.visualstudio.com/docs/getstarted/settings#:~:text=Note%3A%20A%20VS%20Code%20%22workspace,feature%20called%20Multi%2Droot%20workspaces) in the VS Code documentation.

- assets/

  - The directory for the static resources.

- css/

  - Contains all CSS files.

- html/

  - With the exception of `./index.html`, this directory contains all of the html files. And it contains only html files.

- js/
  - Contains all JavaScript files.

#### Files

- .gitignore

  - Specifies intentionally untracked files. See https://git-scm.com/docs/gitignore

- index.html

  - The landing page. This links to `./html/index.html`.

- README.md

  - This readme file.
