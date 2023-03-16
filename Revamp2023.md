# Revamp2023

This file is for keeping track of the `Status` and the tasks that need to be completed (see `Next Steps`) while I rebuild my portfolio website.

## Status

**Note - all the following has been completed in the `modify_basic_framework` branch.**

- Done.

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

- Clean up the `./html/index.html` and `./styles.css` files. Specifically,

  - Create a new branch. Call the branch `modify_basic_framework`.

    **This branch is for styling the website and further developing the skeleton of it. Specifically, for adding the framework for the project cards.**

  - Deliberately choose units.

  - Link to the fonts locally. So they'll be used when the user of offline.

- Other tasks to address; ~~maybe~~ in a different branch.:

  - Modify the https://github.com/JamieBort/jamiebort.github.io/tree/basic_framework#branch-structure, https://github.com/JamieBort/jamiebort.github.io/tree/dev#branch-structure, https://github.com/JamieBort/jamiebort.github.io/tree/Revamp2023#branch-structure and sections to reflect the new branches.
  - Add the `Revamp2023.md` file to the `dev` branch. ~~Maybe add~~ Add it to the `master` branch too.

    So that as I/someone looks at the master branch they know the status of this project.

  - Close out this `basic_framework` branch.
  - Address the `ToDo` item in the `<script>` tag in the index.html file.
  - API related tasks
    - Make api call to github for my project info.
    - Consolidate and organize ALL Trello cards with
      - `API` in the Title.
      - and that come up when searching for `API`
  - Make my website accessible.
    - Create an `accessibility` branch.
    - Modify the `<img>`, `<a>`, `<button>`, `<nav>`, and other tags for assistive screen readers.
