# Revamp2023

This file is for keeping track of the `Status` and the tasks that need to be completed (see `Next Steps`) while I rebuild my portfolio website.

## Status

**Note - all the following has been completed in the `host_routed_react_gh-pages_with_graphql_api_call` branch.**

- Done. Attempted to see if I could make API calls using the hosted React app while hosted by gh-pages.

  To that end, I was going to use GitHubPinnedRepositoriesReactNextJsGitHubGraphQLAPI https://github.com/JamieBort/API-Playground/tree/main/GitHubPinnedRepositoriesReactNextJsGitHubGraphQLAPI/my-pinned-repos

  However I wasn't able to access the github secret using GitHub Actions. See https://github.com/JamieBort/GitHub-Actions-Learning-repo

  **I will table this task for now.** And will focus on rebuilding the site WITHOUT making an API call.

  > API related tasks

  - Make api call to github for my project info.

    Start with this https://github.com/JamieBort/API-Playground/tree/main/GitHubPinnedRepositoriesReactNextJsGitHubGraphQLAPI

    Then attempt to do the same with vanilla JavaScript.

    For example: [github REST API v3 Crash Course with Vanilla Javascript (No dependencies)](https://www.youtube.com/watch?v=5QlE6o-iYcE) YouTube video.

    And [GitHub REST APIs with vanilla JavaScript](https://raajnadar.medium.com/github-rest-apis-with-vanilla-javascript-63f568814b8d) tutorial.

    **Findings**

    Not able to make a rest api call to the pinned items. There is not an endpoint for this. Therefore I need to make a GraphQL call for that info.

    Furthermore I need to authenticate for that info.

    Which means I need use environment variables.

    Which means I need to learn how to host the page on Gh-pages with environment variables.

    This is a second step - first get it working locally.

    To that end, see ~~WorkingWithGraphQLusingVanillaJS in https://github.com/JamieBort/API-Playground#directories~~ GitHubPinnedRepositoriesReactNextJsGitHubGraphQLAPI https://github.com/JamieBort/API-Playground/tree/main/GitHubPinnedRepositoriesReactNextJsGitHubGraphQLAPI/my-pinned-repos

    Now that I am going to use this "Add GitHub Pinned Repositories to React & Next.js with the GitHub GraphQL API" YouTube video, **I am going to switch branches and make sure I can host a React site in gh-pages**.

    This is working: https://github.com/JamieBort/react-gh-pages-tutorial

    And this will suite me better since I'll have navigation: https://github.com/JamieBort/routed-react-app-gh-pages

**Note - all the following has been completed in the `api_github` branch.**

- Done.

  > Create an `api_github` branch.

**Note - all the following has been completed in the `api` branch.**

- Done.

  > Create an `api` branch.

**Note - all the following has been completed in the `Revamp2023` branch.**

- Done.

  > General housekeeping

  > > Modify the https://github.com/JamieBort/jamiebort.github.io/tree/basic_framework#branch-structure, https://github.com/JamieBort/jamiebort.github.io/tree/dev#branch-structure, https://github.com/JamieBort/jamiebort.github.io/tree/Revamp2023#branch-structure and sections to reflect the new branches.

  > > Add the `Revamp2023.md` file to the `dev` branch. Add it to the `master` branch too.

  > > > So that as I/someone looks at the master branch they know the status of this project.

- Done

  > Delete the ~~Close out this~~ `basic_framework` branch.

**Note - all the following has been completed in the `modify_basic_framework` branch.**

- Done.

  > Clean up the `./html/index.html` and `./styles.css` files. Specifically,

      Create a new branch. Call the branch `modify_basic_framework`.

      **This branch is for styling the website and further developing the skeleton of it. Specifically, for adding the framework for the project cards.**

  > Deliberately choose units.

      See https://trello.com/c/0x0av6IA/1130-address-the-css-units-for-the-portfolio-website

- Started with https://trello.com/c/0x0av6IA/1130-address-the-css-units-for-the-portfolio-website

  But I am still working on https://trello.com/c/0x0av6IA/1130-address-the-css-units-for-the-portfolio-website#comment-6414aed791ebc1e0f42a2208,

  https://trello.com/c/0x0av6IA/1130-address-the-css-units-for-the-portfolio-website#comment-6414b0004939687655d5ea9a,

  and https://trello.com/c/0x0av6IA/1130-address-the-css-units-for-the-portfolio-website#comment-6414b35c73d541512e92936c

  > Deliberately choose units.

- Done.

  > Link to the fonts locally. So they'll be used when the user of offline.

  > Chose font family.

  > Deliberately choose text sizes. Tags that I need to be aware of: header, nav, button, span, h1, h2, h3, p, footer, span

  > Style the mobile navigation menu.

  > Add Connect links - 2 side-by-side in mobile view.

  > Add Project Cards for my the Projects section. One over the other in mobile view.

  (Side note - consider having a more basic card that brings the user to a dedicated page. Or just a more simple card...) This will be done in the API branch.

- Done.

  > Clean up the `id` and `class` names.
  > Clean up the html tags - change any that are not appropriate for that part or purpose of the website.

- Done.
  > Create a new branch. Call the branch `modify_basic_framework`. This branch is for styling the website and further developing the skeleton of it. Specifically, for adding the framework for the project cards.

**Note - all the following has been completed in the `Revamp2023` branch.**

- Done.

  > Add this `Revamp2023.md` file to the `Revamp2023` branch.
  > Then modify the `Status` and `Next Steps` sections of it.

  Also, updated the `Branch Structure`, `Directories`, and `Files` sections of the `./README.md`.

**Note - all the following has been completed in the `basic_framework` branch.**

- Done.

  > Use media queries to implement the navigation differently for laptop/desktop.

- Done.

  > Create an event listener for the toggleFunction() so that when the user taps outside of the navigation menu, the navigation menu disappears.

- Done. Sufficient for now.

  > Improve the styling before moving on to the next task.

- Done.

  > Modify the CSS so that the navigation menu overlays over the content of the website, no matter where the user is currently in the website. (at the moment, the user needs to scroll to the top of the website in order to see the navigation menu.)
  > If necessary, modify the CSS and/or JavaScript so that the navigation menu disappears after a button in the navigation menu is selected.

  Also, **created a new `index.html` file** and **rebuilt the page using a different flexbox example**. The old index file was renamed as `old_index.html`

- Implemented the menu navigation. But the navigation menu is not overlaying over the content of the website properly.

  > Implement the basic JavaScript functionality to display and hid an html element by toggling the button.

- With commit 20cf11710ea8067d5ce3c119e5265b726300f123 just created the basic framework for the website.

### Next Steps

- Other tasks to address; in a different branch.:

  - API related tasks

    - Consolidate and organize ALL Trello cards with
      - `API` in the Title.
      - and that come up when searching for `API`

  - Working on the Project Cards.

    Use this https://css-tricks.com/aspect-ratio-boxes/

    **Create a new branch for this.**

  - Address the `ToDo` item in the `<script>` tag in the index.html file.

    **Create a new branch for this.**

  - When the above is complete, write CSS for tablet breakpoint.

    - Create an `tablet_breakpoint` branch inside of a new `breakpoint` branch.

  - When the above is complete, write CSS for desktop breakpoint.

    - Create an `desktop_breakpoint` branch inside the new `breakpoint` branch.

  - Do not delete the `Revamp2020` branch until I delete the `Revamp2023` branch

  - Make my website accessible.

    - **This should be done once all of the content has been added.**
    - Create an `accessibility` branch.
    - Modify the `<img>`, `<a>`, `<button>`, `<nav>`, and other tags for assistive screen readers.

  - Once the `Revamp2023` branch has been merged into the `dev` branch delete

    - the `Revamp2020` branch,
    - the `branch_for_cleaning_before_pushing_to_master` branch,
    - the `old_styes.css` file,
    - the `./html/old_index.html`, file,
    - and the pre-Revamp2023/ directory,

    Go through them each to make sure I will not be losing anything valuable.

    Each one should (now) be in the `./jamiebort.github.io/old/` directory.

  - Remove the Workflow from

    https://github.com/JamieBort/jamiebort.github.io/tree/master/.github/workflows
