# Revamp2023

This file is for keeping track of the `Status` and the tasks that need to be completed (see `Next Steps`) while I rebuild my portfolio website.

## Status

**Note - all the following has been completed in the `accessibility_alt_text_focus` branch.**

- Done.

  > Issues that need to be addressed:

  - ~~Create an `accessibility` branch.~~

    Done.

  - ~~See the `TODO: style the .section_button with .section_button:focus, .section_button:active, .section_button:hover, .section_button:visited, and ???` comments in the `./css/styles.css` file.~~

    Done.

  - With the macos VoiceOver program

    - ~~The social media icons are not dictated. It just says "link" and not "LinkedIn link nor "twitter link" etc. Make sure VoiceOver spells out which link is which.~~

      Addressed.

    - ~~The `<hr>` horizontal rule tag is read out loud. Do I want that to be read? Do I want to keep that but tell the reader to ignore it? Do I want to replace it with something else?~~

      According to https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr and https://www.sarasoueidan.com/blog/horizontal-rules/ I can keep the `<hr>`s. In fact I am using them exactly how it is intended to be used; including for accessibility.

    - ~~The project cards are not announced individually. The "Github repo" button is announced and then the next card title is announced. But we don't know when one card ends and the next one starts.~~

      Addressed.

  - With the tabbing through the page with the tab key (moving focus):

    - Nothing to address.

  - With NaturalReader macos screen reader:

    - **The text in the "Projects"/"Proyectos" and "Connect with me"/"Conectarte Conmigo" buttons are glossed over. It is not read at all.**
    - ~~The screen reader does not read beyond the Bio section of Spanish version of my website.~~

      No longer an issue.

    - ~~The screen reader does not read the "GITHUB REPO" nor the "LIVE SITE" buttons in the cards.~~

      I don't think that is purpose.

    - ~~The screen reader does not read the tech icons in the cards.~~

      I don't think that is purpose.

  - ~~With TalkBack android screen reader:~~

    - ~~Social media anchors/links are named. It just says "link".~~

      Addressed.

  - ~~With android text to speech:~~

    - ~~Social media anchors/links are not dictated.~~

      Addressed.

  - Color issues:

    - ~~Make the colors contrast sufficiently.~~

      Started. Decent first pass.

  - Structure changes

    - ~~Change `<div id="content">` to `<main>` per https://webaim.org/techniques/semanticstructure/#regions~~

      Done.

    - ~~Wrap the "Bio", "Project", and "Connect with me in a `<nav></nav>` element per https://webaim.org/techniques/semanticstructure/#regions~~

      Done.

  - Steps:

    - ~~Analyze the situation. Find what needs to be fixed or improved. Add to the "Issues that need to be addressed" list above.~~

      DONE.

      - ~~MacOS screen reader - Use VoiceOver screen reader to navigate and read my site.~~

        DONE.

      - ~~MacOS navigating with only the keyboard - The first step is to "walk" through the page with just a keyboard. See if I can navigate every button by moving the focus around.~~

        DONE.

      - ~~MacOS text to speech - The next step is to use a desktop text to speech to see if everything is read correctly.~~

        DONE. Nothing to change.

      - ~~Mobile screen reader - Next is to use the TalkBack android screen reader on my phone to see if everything is read correctly.~~

        DONE.

      - ~~Mobile text to speech - Next use text to speech to make sure everything is being found and dictated correctly.~~

        DONE.

**Note - all the following has been completed in the `content_20230328_README` branch.**

- Done.

  > Update the README.md file. So that it is up to date, fun, interesting, etc.

      Created a `content_20230328_README` branch inside the `content_README` branch.

**Note - Done at some point recently just before or during the content_20230328_Spanish_Version branch.**

- Done.

  > Remove the Workflow from

  https://github.com/JamieBort/jamiebort.github.io/tree/master/.github/workflows

**Note - all the following has been completed in the various branches.**

- Done.

  > Merge the `content_20230328_Spanish_Version` branch into the `master` branch.

  - Merge the `content_20230328_Spanish_Version` branch into the `content_20230328` branch.

    - Make a copy of the `content_20230328_Spanish_Version` branch. Call it `content_20230328_Spanish_Version_backup`.

    - Make a copy of the `content_20230328` branch. Call it `content_20230328_backup`.

    - Merge `content_20230328` into `content_20230328_Spanish_Version`.

      NOTE: While in the `content_20230328_Spanish_Version` branch ran `git merge content_20230328` and received `Already up to date.` as a response.

    - Address merge conflicts.

    - Checkout the `content_20230328` branch.

    - Merge `content_20230328_Spanish_Version` into `content_20230328`.

    - **Do NOT** delete the `content_20230328_backup` branch.

    - **Do NOT** delete the `content_20230328_Spanish_Version_backup` branch.

  - Merge the `content_20230328` branch into the `content` branch.

    - Make a copy of the `content` branch. Call it `content_backup`.

    - Merge `content` into `content_20230328`.

      NOTE: While in the `content_20230328` branch ran `git merge content` and received `Already up to date.` as a response.

    - Address merge conflicts.

    - Checkout the `content` branch.

    - Merge `content_20230328` into `content`.

    - **Do NOT** delete the `content_backup` branch.

  - Merge the `content` branch into the `Revamp2023` branch.

    - Make a copy of the `Revamp2023` branch. Call it `Revamp2023_backup`.

    - Merge `Revamp2023` into `content`.

    - Address merge conflicts.

    - Checkout the `Revamp2023` branch.

    - Merge `content` into `Revamp2023`.

    - **Do NOT** delete the `Revamp2023_backup` branch.

  - Merge the `Revamp2023` branch into the `dev` branch.

    - Make a copy of the `dev` branch. Call it `dev_backup`.

    - Merge `dev` into `Revamp2023`.

    - Address merge conflicts.

    - Checkout the `dev` branch.

    - Merge `Revamp2023` into `dev`.

    - **Do NOT** delete the `dev_backup` branch.

  - Merge the `dev` branch into the `master` branch.

    - Make a copy of the `master` branch. Call it `master_backup`.

    - Merge `master` into `dev`.

    - Address merge conflicts.

    - Checkout the `master` branch.

    - Merge `dev` into `master`.

    - **Do NOT** delete the `master_backup` branch.

  - Check to make sure the site is working locally without problems.

  - Check to make sure the live site is working without problems.

  - Delete these branches:

    - `content_20230328_Spanish_Version`

    - `content_20230328_Spanish_Version_backup`

    - `content_20230328_backup`

    - `content_backup`

    - `Revamp2023_backup`

    - `dev_backup`

    - `master_backup`

**Note - all the following has been completed in the `content_20230328_Spanish_Version` branch.**

- Done.

  > Replace the `index.html` file with the `index_spanish.html` file. To that end

  - Rename the `index.html` file as `copy_index.html`.

  - Then rename the `index_spanish.html` file as `index.html`.

  - Verify `index.html` works without issues.

  - **Do NOT** delete the `copy_index.html` file.

  > Comment out or hide the Blog section.

  > Clean up the files. Specifically

  - remove all unnecessary code,

  - remove all unnecessary comments,

  - remove all unnecessary console.log()'s,

  - remove all unnecessary files,

    - remove the `html/old_index_spanish.html` file.

    - remove the `html/index_spanish_copy.html` file.

    - remove the `css/styles_backup.css` file.

  > Address all relevant `TODO`s in the files.

  > Determine which version of the Pinned Projects I want to have on the live website. My options are to

  - not update the projects section of the website. (In other words, comment out or delete that section in this branch.)
  - use that section of this branch as is. (In other words not do anything differently with that section.)
  - or make a new api call and obtain a third version of the Pinned Projects. (See the ./js/ directory and the ./js/README.md file.)

**Note - all the following has been completed in the `desktop_breakpoint` branch.**

- Done.

  > Create an `desktop_breakpoint` branch inside the new `breakpoint` branch.

- Started.

  > Modify files to address the todo items in the `./jamiebort.github.io/DesignChanges/DesignChanges.md` file.

**Note - all the following has been completed in the `content_20230328` branch.**

- Done.

  > for the `content_20230328` branch.

  - Add content to the `Bio` section. Done.

  - Add content to the `Projects` section. Done.

  - Add content to the `Connect with Me` section. Done.

  - Choose between the .png files for the `Connect with Me` icons. And the Font Awesome logos. Done.

    If I remain with the .png files, refactor to use fewer `<div>` tags. Done - not possible.

  - Clean up the styling. Specifically

    - The buttons in the `Bio` section. Done.

    - The `Code the Dream` link in the `Bio` section. Done.

    - The `GitHub Repo` link in the `Projects` section. Done.

  - Refactor the JavaScript to clean it up. Done. Cleaned up but not refactored.

  - Clean up the files: Done.

    - Remove commented code and notes.

  - Address the JSHint error that pops up. Done.

  - (Re-)Add auto-formatting upon save. Done.

  - Add T0-Do plugin. Done.

- Done.

  > Create a `content` branch.

  > Create a `content_20230328` branch.

  > Comment out the email button and possibly disable the logic of the email contact form (until I fix the functionality of the contact me form).

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

- **All accessibility updates**

  - See the "Accessibility Links and Buttons" pinned items in the OneTab Chrome plugin.

    Continue to keep them there? Delete them?

  - Delete the `accessibility_alt_text_focus` branch.

  - Todo (in order from top down):

    - _Create a new branch for this._

    - Research about text size. What's too small for each device? What's too big for each device? Add to the "Issues that need to be addressed" list below.

    - Non-color issues for people who do not see well. Per http://web-accessibility.carnegiemuseums.org/design/color/ "Color as indicator: Color should not be the only indicator for interactive elements. For example, underline links on hover, or mark a required field with an asterisk." Add other changes to button/links besides color changes when ':hover' or ':active' CSS pseudo classes are used/activated.

    - Research color considerations. Make sure my selected colors contrast sufficiently. Add to the "Issues that need to be addressed" list below.

    - Address the things that need to be fixed. See the "Issues that need to be addressed" list below.

    - Test the live site on iPad/tablet.

    - Test the live site on mobile device.

    - Test the live site on my laptop.

    - When the above have been done/addressed, the last thing that needs to be taken care of is to solicit feedback. For that I have created this `Accessibility Issue Questions.md` document.

  - Things that need to be addressed:

    - Text size issues:

      - When I enlarge the page on my large monitor using Chrome to 200% and to 150% on my laptop monitor (as suggested by several online sources), the @media query in the styles file kicks in and displays the mobile version of the header; not the desktop version of the header. Create a new branch to address this issue.

    - Assess whether the color contrasts are sufficient. If not, address this.

    - Assess whether other non-color visual cues need to be used. And are sufficient. If not, address this.

    - Assess whether the following testing criteria pass. See "Testing:" below. If not, address this.

  - Testing:

    - Laptop

      - Screen reader look for
        - reading all the text
        - announcing all the links, buttons, project cards, technology icons.
      - Text to speech look for
        - reading all the text including the text in the buttons.
      - Focus/visual look for
        - buttons and links look differently when hovered, clicked, etc.
        - default text size - is it legible?
        - how does the page respond when I enlarge it 200%?

    - Tablet

      - Screen reader look for
        - Same item(s) as laptop above.
      - Text to speech look for
        - Same item(s) as laptop above.
      - Focus/visual look for
        - Same item(s) as laptop above.

    - Cell
      - Screen reader look for
        - Same item(s) as laptop above.
      - Text to speech look for
        - Same item(s) as laptop above.
      - Focus/visual look for
        - Same item(s) as laptop above.

- Other tasks to address; in a different branch.:

  - **All CSS/Styling**

    - Modify files to address the todo items in the `./jamiebort.github.io/DesignChanges/DesignChanges.md` file.

      _Create a new branch for this._

    - Implement breakpoints in the CSS file. Specifically a mobile HORIZONTAL orientation breakpoint, a tablet horizontal orientation breakpoint, and vertical orientation breakpoint.

      _Create a new branch for this._

    - Create an `tablet_breakpoint` branch inside of a new `breakpoint` branch.

  - **All Content Updates**

  - **API related tasks**

    - Consolidate and organize ALL Trello cards with
      - `API` in the Title.
      - and that come up when searching for `API`

  - **All JavaScript**

    - Address the `ToDo` item in the `<script>` tag in the index.html file.

      _Create a new branch for this._

    - Fix the functionality of the contact me form.

      _Create a new branch for this._

    - Figure out how to update the "Projects" and "Connect with Me" buttons in the "Bio" section so that they say "Proyectos" and "Conectarte Conmigo" respectively.

      _Create a new branch for this._

    - Address this `Uncaught (in promise) Error: A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received index.html#title:1` error.
      It is generated when I navigate to the live https://jamiebort.github.io/html/index.html website.

      _Create a new branch for this._

  - **Do NOT** delete the `Revamp2020` branch until I delete the `Revamp2023` branch

  - Once the `Revamp2023` branch has been merged into the `dev` branch, delete

    - the `Revamp2020` branch,
    - the `branch_for_cleaning_before_pushing_to_master` branch,
    - the `old_styes.css` file,
    - the `./html/old_index.html`, file,
    - and the pre-Revamp2023/ directory,

    Go through them each to make sure I will not be losing anything valuable.

    Each one should (now) be in the `./jamiebort.github.io/old/` directory.

    _Create a new branch for this._

    Also prune or generally clean up all the old branches.

  - Update the list of projects in the Projects section. So that `iPhysicist-CSSLayoutFlexbox` , `PuppyLove`, and `Create-A-User-Directory` are not listed. **Alternatively**, update those three projects.

    _Create a new branch for this._

    Create a `content_projects` branch inside the `content` branch.

    There is one or three other things that I made note of to address with these projects cards. Find them and address them.

    - See the `TODO: Add three Projects buttons to toggle on and off these three features:` comment**s** in the ~~`./html/index_spanish.html`~~ `./html/index.html` file.

  - **All accessibility updates**

    TODO: look into whether this [WebAIM certification[(https://webaim.org/services/certification/) would be worth having on my website(s).

    TODO: Check-in with people on the issues below (under the "Issues that need to be addressed:" section) - the ones created as a result of the todo's throughout this repo.

    - Modify the `<img>`, `<a>`, `<button>`, `<nav>`, and other tags for assistive screen readers.
