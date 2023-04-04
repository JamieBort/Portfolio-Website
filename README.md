# Welcome to the repo for my [Portfolio Website](https://jamiebort.github.io/)

### Notable Features

Notable features of this site (that I have created/written) using

- vanilla JavaScript:
- and using these libraries:
- contact me form
- web components

### Aspirations

This site will have a blog, a resources page, and a fun stuff page. All of which will have content that can be filtered.
By a text field and by drop-down menus. One for title. One for date. One for keep subjects (css, debugging, back end, etc.)

This README file will serve as the documentation for future employers. It will be linked to from my portfolio website.

I'll fill this out more as the website progresses.

### Business Requirements

The site shall:

- share information about me.

  - on the website itself
    - display my involvement with Devs@rtp and other similar organizations,
    - provide the user with a way to easily find, look at, and download my resume
    - display to the user all of the projects that I wish them to see.
    - show my interests as they pertain to my career and technical abilities.
    - show off my skills to the user without them having to navigate to my projects.
    - display in a graph, chart, or other visual representation my level of skills for each technology.
  - via links to other sites that I use such as
    - social media and
    - github

- have way(s) to contact me
  - bare minimum by email

### Functional Requirements

- allow the user to send me a message via a form that goes into my email inbox, (and maybe texts me?)
- follow accessibility standards.
- be responsive (works on screens of varying sizes.)

### Branch Structure

    +-- master - The live branch.
    	|
    	+-- dev - The development branch
    		|
    		+-- Revamp2023 - The branch created to update the website in 2023.
    			|
    			+-- content - For adding content.
    			|	|
    			|	+-- content_20230328 - Content updated as of 20230328.
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
    			|	+-- script_header - For fixing the header. It disappears when viewing the site on a mobile device.
    			|
    			+-- breakpoint - For implementing breakpoints in the CSS file.
    			|	|
    			|	+-- breakpoint_tablet - For implementing a tablet breakpoint in the CSS file.
    			|	|
    			|	+-- breakpoint_desktop - For implementing desktop breakpoint in the CSS file.
    			|
    			+-- accessibility - For all accessibility implementation.
    			|
    			+-- other feature branches

### Directories and Files

#### Directories

- .vscode/ - See https://code.visualstudio.com/docs/getstarted/settings#:~:text=Note%3A%20A%20VS%20Code%20%22workspace,feature%20called%20Multi%2Droot%20workspaces.

- assets/ - The directory for the static resources.

- css/ - Contains all CSS files.

- DesignChanges/ - A directory for the list of things that need to change with the website.

- html/ - With the exception of `./index.html`, this directory contains all of the html files. And it contains only html files.

- js/ - Contains all JavaScript files.

- old/ - Contains files and directories that are no longer used. But are not ready to be deleted.

#### Files

- .gitignore - Specifies intentionally untracked files. See https://git-scm.com/docs/gitignore

- FutureFeatures.md - Future features section of the repo. Here is listed the things I plan on adding to the repo.

- index.html - The landing page. This links to `./html/index.html`.

- README.md - This readme file.

- Revamp2023.md - This file is for keeping track of the status and the tasks that need to be completed while I rebuild my portfolio website.
