# Tasks

To-Do items that need to be addressed.

## Administrative

- Update the remote backend branch name from `backend` to `back_end`.

- Research whether Render.com needs `./frontend/.gitignore` and `./backend/.gitignore` files. Or if I can use just `./.gitignore`.

- See the list found in this `./administrative/fullstack_cleanup_branch_TODO.md` file.

## API

- Consolidate and organize ALL Trello cards with

  - `API` in the Title.

  - and that come up when searching for `API`

## Accessibility

TODO: look into whether this [WebAIM certification[(https://webaim.org/services/certification/) would be worth having on my website(s).

TODO: Check-in with people on the issues below (under the "Issues that need to be addressed:" section) - the ones created as a result of the todo's throughout this repo.

- Modify the `<img>`, `<a>`, `<button>`, `<nav>`, and other tags for assistive screen readers.

- Todo (in order from top down):

  - Research color considerations. Make sure my selected colors contrast sufficiently. Add to the "Issues that need to be addressed" list below.

  - Address the things that need to be fixed. See the "Issues that need to be addressed" list below.

  - Test the live site on iPad/tablet.

  - Test the live site on mobile device.

  - Test the live site on my laptop.

  - When the above have been done/addressed, the last thing that needs to be taken care of is to solicit feedback.

    For that I have created this `Accessibility Issue Questions.md` document.

    Two people to contact:

    - https://trello.com/c/53VtZ4o9/ (see #comment-65400e100c632c7fda83a67f)

    - and https://trello.com/c/PeariN22/

  - Issues that need to be addressed:

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

  - Each time an accessibility change is made, not just during this iteration in this branch, solicit feedback from an accessibility expert.

  - The next time I address (read: improve the accessibility) of my website,

    - incorporate the changes found in this [5 Accessibility Quick Wins You Can Implement Today](https://css-tricks.com/5-accessibility-quick-wins-you-can-implement-today/) css-tricks\.com article by Daniel Yuschick on Feb 23, 2022.

    - Make it so pinch zoom on the mobile keeps the header within the width of the window (so you don't have to nor cant pan left/right).

      Simply make it so the text gets bigger and pushes down further.

      Search for something to the effect of "trigger media query with pinch zoom".

## Back End

### To Do

### Back End To Do

None.

### Back End Status

#### Back End Status Next Steps

None.

### Status

## Content

## CSS/Styling

- Modify files to address the todo items in the `./jamiebort.github.io/DesignChanges/DesignChanges.md` file.

  _Create a new branch for this._

- Implement breakpoints in the CSS file. Specifically a mobile HORIZONTAL orientation breakpoint, a tablet horizontal orientation breakpoint, and vertical orientation breakpoint.

  _Create a new branch for this._

- Create an `tablet_breakpoint` branch inside of a new `breakpoint` branch.

## Front End

### Front End To Do

Rebuild front end with Svelt Vite using TypeScript.

**Maybe** when I build the blog or when I roll out another feature such as the contact me form.

See the two files in this https://github.com/JamieBort/LearningDirectory/tree/master/Languages/JavaScript/Frameworks/Svelte directory.

### Front End Status

Successfully deployed backend via the `back_end_express` branch.

### Front End Status Next Steps React + Vite

None.

## Hosting

### Hosting To Do

- Research where to host it.

  - See https://github.com/JamieBort/LearningDirectory/tree/master/Hosting

    Particularly this https://github.com/JamieBort/LearningDirectory/blob/master/Hosting/hosting_research/notes.md#valuable-info section.

- Set up hosting.

### Hosting Status

Chose Render.com to host the project. See the [Render](https://github.com/JamieBort/LearningDirectory/tree/master/Hosting/Render) directory in my LearningDirectory repo.

Researched the file structure needed and other aspects.

- Side: Among other sources I found this [How to deploy frontend and backend on Render?](https://community.render.com/t/how-to-deploy-frontend-and-backend-on-render/7449/2) post which says:

  > Every project is different, so you will know what commands are required to get your app up and running. If you have a frontend and backend in the same repo, that’s a “monorepo” and Render has support for that: [Monorepo Support](https://docs.render.com/monorepo-support)

  > In general terms - and this may not be specific to your projects - a common pattern for what you’ve described would be to have the frontend app as a [Static Site](https://docs.render.com/static-sites) and the backend as a [Web Service](https://docs.render.com/web-services), using the Node [Native Environment](https://docs.render.com/native-runtimes). So two services, both linked to the same repo with settings like (but amended to your required values):

  > - A Web Service for the backend
  >   - Root Directory: “your_backend_dir”
  >   - Build Command: “npm install; npm run build;” (some backends don’t need to be built - will depend on what you’ve built)
  >   - Start Command: “node server.js” (or whatever file within “your_backend_dir” that starts your backend app)

  > - A Static Site for the frontend
  >   - Root Directory: “your_frontend_dir”
  >   - Build Command: “npm run build” (static sites auto-install dependencies)
  >   - Publish Directory: “public” (this is Create React Apps default build directory, amend as required for your own project/framework)

- Furthermore, this `How to organise file structure of backend and frontend in MERN` Stack overflow post from the [Valuable Info](https://github.com/JamieBort/LearningDirectory/blob/master/Hosting/hosting_research/notes.md#valuable-info) section of my hosting_research notes of my Learning Directory repo mentions using `concurrently`, which allows you to

  > ...start both your frontend and backend at the same time.

  **It goes on in detail how to use it.**

Deployed the backend with little issue.

Ready to deploy front end.

This [Render Quickstarts](https://docs.render.com/) documentation is [full of Quickstart guides for various languages/frameworks](https://community.render.com/t/how-to-deploy-frontend-and-backend-on-render/7449/3).

Under the `STATIC SITES` section lists various JavaScript libraries and no options for vanilla JavaScript.

So I am pausing here to create a React front end to make the GraphQL api call.

### Hosting Next Steps

## JavaScript

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
