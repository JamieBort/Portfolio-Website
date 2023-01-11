# Revamp2020
## contact_page branch

This file started as README.md in the `preliminaryExploration` branch.

To that end, this README file outlines what I plan on doing with my [portfolio website](https://jamiebort.github.io/) as I revamp it.

### Status
* Created a `preliminaryExploration` branch.
Last left off working there. Am about to start this [ReusableComponentsTutorial](https://github.com/JamieBort/LearningDirectory/tree/master/WebComponents/ReusableComponentsTutorial) tutorial to use for this site. <- **not sure what the status of this is**.

* Am working on the [Work on accessibility issues](https://trello.com/c/QiXs2V0r/164-work-on-accessibility-issues) Trello card. <- **not sure what the status of this is**.

* per the `Content to add or change` section below I am working on this `https://github.com/JamieBort/CreateAUserdirectory` repo.
	* specifically I am working on getting it hosted on Netlify.
	* next I will work on finishing that project per the `Progress.md` file in that repo.

### Next Steps

0. Work on the https://github.com/JamieBort/jamiebort.github.io/tree/Revamp2020/WebsiteRevamp2023 directory. 
	See that README.md file.

1. ~~[Have the cards themselves created populated based on the pinned items in github](https://trello.com/c/RyfM5Z0E/1124-have-the-cards-themselves-created-populated-based-on-the-pinned-items-in-github). (from the `functionality to address` section below. ). See the Trello card for status.~~ **Done.**
	* use postman to make api calls to my repo to get the info to the pinned items
		* to that end do 
			* find the endpoint to the pinned items (or the end points to the individual items) 
			* then create an temporary html page to make the api call(s) with.
			* then use that logic in the `/js/projects.js` file.
			* tactic/plan of attack/procedure:
				* leaving the `/js/projects.js` file alone.
				* create the `/js/temp_project_page.js` file as a copy of the `/js/projects.js` file. **Done.**
				* got the `/js/temp_project_page.js` file to make api calls as needed. **Done.**
				* create the `/js/copy_temp_project_page.js` file as a copy of the `/js/temp_project_page.js` file. **Done.**
				* start editing the `/js/temp_project_page.js` file so that the cards in the `/html/index.html` file look the same as when projects.js is is referenced in the the `/html/index.html` file. (the `/js/temp_project_page.js` file is referenced in the `/js/temp_project_page.js` file.) **Done.**
				* rename the `/js/projects.js` file as `/js/old_projects.js`. **Done.**
				* rename the `/js/temp_project_page.js` file as `/js/projects.js`. **Done.**

	* If necessary, set up the `.env` environment to authenticate with github. **Not necessary** (yet).
		* create .env file
		* install `dotEnv` with npm.
		* test out variables using `console.log()`.

2. Add one or all of the apps (listed in `Content to add or change` below) to the portfolio.
3. Fix appearance for mobile design. Specifically
	* the **overall appearance** of the `project cards`
	* add my **resume**
		* ~~the `Resume` button in the navigation section loads the `Resume` page~~. Done
		* from there you'll be able to read the long form resume (not yet created)
		* ~~add old resume in interim~~. Done
		* or download a pdf of the resume (also not yet created)
		* work on the resume page. see:
			* `The content of the resume page needs to be added.` below.
			* and `The appearance of the resume page needs to be addressed.` below.
	* (later on) navigation header 
		* should be replaced with a hamburger menu.
		* and/or change the layout so that the projects section is to the right of the bio. And the connect with me is to the right of the projects section.
	* possibly more

	To this end the
	* ~~then create the `project_card_api` branch~~.
	* ~~then the necessary project card changes will be made in the project_card branch. (this branch will have to push to the heroku site periodically: `git push heroku yourbranch:master`)~~
	* ~~then the changes will be merged into the `Revamp2020` branch. Or the `dev` branch to be tested.~~
	* ~~lastly delete the `project_card_api` branch.~~

	* then curate the pinned projects in GitHub so that I have more and better work to show/display on my portfolio site.
	
	* then create the `project_card_appearance` branch.
	* then the necessary contact page changes will be made in the project_card branch. (this branch will have to push to the heroku site periodically: `git push heroku yourbranch:master`)
	* then the changes will be merged into the `Revamp2020` branch. Or the `dev` branch to be tested.
	* lastly delete the `project_card_appearance` branch.
	* then create the `resume_card` branch.
	* then the necessary resume page changes will be made in the project_card branch. (this branch will have to push to the heroku site periodically: `git push heroku yourbranch:master`)
	* then the changes will be merged into the `Revamp2020` branch. Or the `dev` branch to be tested.
	* lastly delete the `resume_card` branch.
	* then create the `navigation_header` branch.
	* then the necessary resume page changes will be made in the project_card branch. (this branch will have to push to the heroku site periodically: `git push heroku yourbranch:master`)
	* then the changes will be merged into the `Revamp2020` branch. Or the `dev` branch to be tested.
	* lastly delete the `navigation_header` branch.

### To Do

- [ ] [Give survey for portfolio site](https://trello.com/c/RF2s2gkE/567-create-survey-for-portfolio-site) Trello card.

- [ ] [How to look at websites or apps I am developing on my phone before they are live](https://trello.com/c/svOMzdnt/535-how-to-look-at-websites-or-apps-i-am-developing-on-my-phone-before-they-are-live) Trello card.

- [ ] [Look into dev tools for mobile](https://trello.com/c/WmVM46ii/575-look-into-dev-tools-for-mobile) Trello card.

- [ ] [Practice seo search engine optimization for my portfolio website](https://trello.com/c/7h8xq1Qs/529-practice-seo-search-engine-optimization-for-my-portfolio-website) Trello card.

- [ ] [Change the name of this repo to Portfolio Website](https://trello.com/c/pQzTccx3/514-change-the-name-of-this-repo-to-portfolio-website) Trello card.

- [ ] [Listen to this podcast on hosting a website and make necessary notes](https://trello.com/c/QTWzA4bv/480-list-to-this-podcast-on-hosting-a-website-and-make-necessary-notes) Trello card.

- [ ] Figure out what content to add to the portfolio website.
	- [ ] Review other portfolio websites to:
		- [ ] [Explore ways to show off my skills on my portfolio website](https://trello.com/c/2oLiIllY/481-explore-ways-to-show-of-my-skills-on-my-portfolio-website) Trello card.
		- [ ] [Decide on a layout and design for my portfolio website](https://trello.com/c/8Xdj7duH/482-decide-on-a-layout-and-design-for-my-portfolio-website) Trello card.
		- [ ] [See how social media is linked to on the portfolio website](https://trello.com/c/oVKNGjvm/488-see-how-social-media-is-linked-to-on-the-portfolio-website) of other people's portfolio sites.
		- [ ] [See how to display my social media posts on the portfolio website](https://trello.com/c/pj0lfx00/489-see-how-to-display-my-social-media-posts-on-the-portfolio-website)) Trello card.
		- [ ] [See which languages and frameworks other people are creating their websites with](https://trello.com/c/EwC3EB2S/525-see-which-languages-and-frameworks-other-people-are-creating-their-websites-with) Trello card.
		- [X] ~~[Place this with other examples of portfolio websites to get ideas for my own](https://trello.com/c/1JHiHOMI/485-place-this-with-other-examples-of-portfolio-websites-to-consider) Trello card.~~
		- [X] ~~[Decide whether to create my portfolio site using React or React Native](https://trello.com/c/sLJ1fEBe/486-decide-whether-to-create-my-portfolio-site-using-react-or-react-native) Trello card.~~

	- [ ] [Explicitly list the content of the portfolio website 202010](https://trello.com/c/adJl19pT/496-explicitly-list-the-content-of-the-portfolio-website-202010) Trello card.
	- [ ] [Compile content for portfolio website](https://trello.com/c/VxCIvza2/530-compile-content-for-portfolio-website) Trello card.

- [ ] [Wireframe the desktop and mobile layout](https://trello.com/c/3xtKwRIm/491-wireframe-the-desktop-and-mobile-layout-for-portfolio-website) Trello card.
	- [ ] [Learn how to use Figma](https://trello.com/c/AnQb9Ewl/495-learn-how-to-use-figma) Trello card.
	- [ ] Figure out aesthetics
		- [ ] [Style the project cards for the portfolio website](https://trello.com/c/U2wEY2Od/579-style-the-project-cards-for-the-portfolio-website) Trello card.
		- [ ] [Decide on Favicon](https://trello.com/c/cVnMamJ4/578-decide-on-favicon) Trello card.
		- [ ] [Decide on colors](https://trello.com/c/mXqq3kaO/526-decide-on-colors) Trello card.
		- [ ] [Decide on logo](https://trello.com/c/aBiOmqZd/499-decide-on-logo) Trello card.
		- [ ] [Decide on fonts](https://trello.com/c/WmfzueWk/498-decide-on-fonts) Trello card.
		- [ ] [Find source for all the logos that I need for portfolio website](https://trello.com/c/3pgamqFg/589-list-of-logos-needed-for-portfolio-website) Trello card.
		- [ ] [Style the skills section](https://trello.com/c/y03gI5oR/556-style-the-skills-section) Trello card.
		- [ ] [What needs to change with the mobile version of the Portfolio Website](https://trello.com/c/kBNxrjBe/557-what-needs-to-change-with-the-mobile-version-of-the-portfolio-website) Trello card.
		- [ ] [What needs to change with the tablet version of the Portfolio Website](https://trello.com/c/viKpMCuc/559-what-needs-to-change-with-the-tablet-version-of-the-portfolio-website) Trello card.
		- [ ] [What needs to change with the desktop version of the Portfolio Website](https://trello.com/c/d10h6NWq/558-what-needs-to-change-with-the-desktop-version-of-the-portfolio-website) Trello card.
		- [X] [Style the project_divs](https://trello.com/c/kgiNSde6/555-style-the-projectdivs) Trello card.
		- [X] [Be deliberate with the css units for the Portfolio Website project](https://trello.com/c/HVuqs695/563-be-deliberate-with-the-css-units-for-the-portfolio-website-project) Trello card.
	- [X] ~~[Obtain wireframe app](https://trello.com/c/ogulw2aZ/492-obtain-wireframe-app?menu=filter&filter=due:incomplete) Trello card.~~

- [ ] Build the site.
	- [ ] Content to add or change
		- [ ] [Polish this Create a User Directory project](https://trello.com/c/J21B72Na/591-polish-this-create-a-user-directory-project) Trello card.
		- [ ] Add this [Week4iTunesMusicSearch](https://github.com/JamieBort/Week4iTunesMusicSearch) to this portfolio website.
		- [ ] Add this [Code Snippet Organizer](https://github.com/JamieBort/CodeSnippetOrganizer) to this portfolio website.
		- [ ] Add this [github calendar](https://github.com/IonicaBizau/github-calendar) to my portfolio site. [Or somewhere else? and/or:](https://github.com/fullcalendar/fullcalendar)
		- [ ] Add this [CreateASiteWithALogin](https://github.com/JamieBort/CreateASiteWithALogin)
		- [ ] Add this [ReturnToRobots](https://github.com/JamieBort/ReturnToRobots)

			See also: [Descriptions of the Return to Robots program](https://docs.google.com/document/d/1q-ZE0Q0Si-YTMIl12HzOczL3DMyiyv6Zbr45xVkIndU/edit#)
		- [ ] [consider replacing section tag with article tag for my portfolio website](https://trello.com/c/ARthlAv7/554-consider-replacing-section-tag-with-article-tag-for-my-portfolio-website) Trello card.
		- [ ] [Modify devsatrtp image in Portfolio Website](https://trello.com/c/865I1iOD/565-modify-devsatrtp-image-in-portfolio-website) Trello card.
		- [ ] [Update the portfolio website readme file](https://trello.com/c/k2H77o6L/576-update-the-portfolio-website-readme-file) Trello card. (NOT THE SAME AS [Update the portfolio website README file](https://trello.com/c/hCRC1EG6/483-update-the-portfolio-website-readme-file) Trello card; which is already completed.)
		- [ ] The content of the [resume page](file:///Users/jamiebort/Documents/DevFiles/personal_projects/jamiebort.github.io/html/resume.html) needs to be added.
		- [ ] The `Static Site` on the Project Cards needs to change to `Website` or the like - some of the projects are no longer static...
		- [X] ~~[Update the portfolio website README file](https://trello.com/c/hCRC1EG6/483-update-the-portfolio-website-readme-file) Trello card.~~ (NOT THE SAME AS [Update the portfolio website readme file](https://trello.com/c/k2H77o6L/576-update-the-portfolio-website-readme-file) Trello card; which isn't completed (yet).)
		- [X] ~~[Fix header and footer for my portfolio website](https://trello.com/c/CCtUbXY7/541-fix-header-and-footer-for-my-portfolio-website) Trello card.~~
		- [X] ~~Remove this [old/20181126](https://github.com/JamieBort/jamiebort.github.io/tree/master/old/20181126) directory.~~
		- [x] ~~[Fix branch issues with portfolio site](https://trello.com/c/PxEFMj5s/374-fix-branch-issues-with-portfolio-site) Trello card.~~
		- [X] ~~[edit README files for the portfolio website](https://trello.com/c/ntfMYze3/552-edit-readme-files-for-the-portfolio-website) Trello card.~~
		- [X] ~~[remove all button tags on my portfolio website](https://trello.com/c/9mD1AzSI/551-remove-all-button-tags-on-my-portfolio-website) Trello card.~~

	- [ ] Functionality to address
		- [ ] ~~[Have the description in the project cards dynamically update from the github repo](https://trello.com/c/qcwpK1Gd/586-have-the-description-in-the-project-cards-dynamically-update-from-the-github-repo) Trello card~~. (taken care of with `Have the cards themselves created populated based on the pinned items in github` below.)
		- [ ] [Have the tech in the project cards dynamically update from the github repo](https://trello.com/c/qoEQZkfH/588-have-the-tech-in-the-project-cards-dynamically-update-from-the-github-repo) Trello card~~. (taken care of with `Have the cards themselves created populated based on the pinned items in github` below.)
		- [ ] [Have the cards themselves created populated based on the pinned items in github](https://trello.com/c/RyfM5Z0E/1124-have-the-cards-themselves-created-populated-based-on-the-pinned-items-in-github) Trello card.
		- [ ] [Implement smooth navigation](https://trello.com/c/rjsuhabM/539-implement-smooth-navigation) Trello card.
		- [ ] Make website accessible - see the [Accessibility](https://github.com/JamieBort/LearningDirectory/tree/master/Accessibility) directory of the LearningDirectory repo  
			* ~~[Work on accessibility issues](https://trello.com/c/QiXs2V0r/164-work-on-accessibility-issues) Trello card and~~
			* ~~https://github.com/JamieBort/LearningDirectory/tree/master/Accessibility~~
		- [ ] [Portfolio Website Web Component Issues](https://trello.com/c/M2Bneiy9/1128-portfolio-website-web-component-issues) Trello Card.
			- [ ] [Refactor the web_components file](https://trello.com/c/nGQ8jQea/1126-refactor-the-webcomponents-file) Trello card. Refactor the `js/web_components.js` file such that the string literal(s) are replaced with variables consisting of the same string content.
			- [ ] Implement the `head-web-component` so that each html file needs only that line of code.
			- [ ] [ ] this `Uncaught TypeError: Cannot read property 'getElementsByClassName' of null at new scripts (web_components.js:88)` error is addressed. It **might** be happening because the constructor is loaded before the `const` variables that assign the `nav_a` class. As a result, the card list items are not populated.
		- [ ] [Address Bio button in Navigation](https://trello.com/c/gUtXuVRL/1131-address-bio-button-in-navigation) Trello card.
		- [ ] The "Let's" section in the "connect_with_me_section" section isn't centered properly. To complicate maters each time that changes the center moves left or right. Address this so that it's always centered.
		- [ ] Make CSS selectors more uniform. Have them make sense/be semantic. This has been started. But could be improved upon.
		- [ ] This might help with the email form. For example, the subject doesn't get added to an email (yet): https://github.com/JamieBort/CodeTheDream/tree/main/RedEclipseIntroToProgramming/Lesson4_3/ And the readme file there.
		- [ ] [Hide the scroll bar in the desktop view](https://trello.com/c/J4Uxs71X/1132-hide-the-scroll-bar-in-the-desktop-view) Trello card.
		- [ ] Have the project cards slide left and right. Rather than have them stacked one on to of the next. 
		
			**NOTE:** this might be a bad idea if one card is very tall and the next is very short.
		- [ ] See the `what needs to change with the ...` Trello cards listed above in the `Figure out aesthetics` section.
		- [ ] The content under the `Message` section in the email generated by the contact form is not formatted at all. In particular, the string is all in one line even when the message body in the contact form is written across several lines.Functionality to address
		- [ ] Refactor the `/js/projects.js` file so that
			* I am making one api call to load the page (rather than three).
				* to this end, look into [GitHub GraphQL](https://www.google.com/search?sxsrf=ALeKk032cASkHeoC6IJgH8NTkfSUPhzVBw:1624712248860&q=github+graphql&spell=1&sa=X&ved=2ahUKEwjmgdLjrLXxAhVRpZ4KHYPOBhEQBSgAegQIARAw&biw=1280&bih=666). See: https://github.com/JamieBort/LearningDirectory/tree/master/API/GraphQL Also see: https://teamtreehouse.com/library/how-ajax-works-2
			* I am not using this `https://gh-pinned-repos-5l2i19um3.vercel.app/?username=jamiebort` fetch api to get my pinned repos. (see the `gh-pinned-repos` comments in the [Have the cards themselves created populated based on the pinned items in github](https://trello.com/c/RyfM5Z0E/1124-have-the-cards-themselves-created-populated-based-on-the-pinned-items-in-github) Trello card.)
			* the `projects` object in the `/js/projects.js` file will be used to populate the projects cards in the `/html/index.html` file for when the api call fails.
			* this error `Uncaught (in promise) TypeError: Cannot read property 'appendChild' of undefined at projects.js:306` is addressed. It occurs here `c_u_l[index1].appendChild(cli);` in the `/js/projects.js` file.
		- [ ] Reorganize the `assets` directory so that 
			* There is a directory for the icons in the `connect with me` section.
			* And the `connect with me` icons are in it.
			* The icons that are not used are removed.
		- [ ] The order of the pinned repos in github effect the information displayed in the project cards on the Portfolio website - if I change the order of the pinned repos, then some of the header images do not line up with the correct cards.
		- [ ] The `Static Website` link (soon to be the `Website` link) need to pull from an api call. Maybe parse the README file for that URL?

	- [ ] Styling to address 
	
		A lot of good info here. But not organized nor noted (yet): 
		
		(The completed) [Be deliberate with the css units for the Portfolio Website project](https://trello.com/c/HVuqs695/563-be-deliberate-with-the-css-units-for-the-portfolio-website-project) Trello card.
		- [ ] Address the css units - Based on what I learned about `em`, `rem`, and the other css units, they may need to change. [Address the css units for the portfolio website](https://trello.com/c/0x0av6IA/1130-address-the-css-units-for-the-portfolio-website) Trello card.
		- [ ] [Style Links](https://trello.com/c/AsOQKQjI/562-style-links-and) Trello card.
		- [ ] [Style buttons for my portfolio website](https://trello.com/c/Fny58qFO/538-style-buttons-for-my-portfolio-website) Trello card. Tabling this one for now. Not necessarily completed. See card.
		- [ ] See the `what needs to change with the ...` Trello cards listed above in the `Figure out aesthetics` section.
		- [ ] The appearance of the [resume page](file:///Users/jamiebort/Documents/DevFiles/personal_projects/jamiebort.github.io/html/resume.html) needs to be addressed.

	- [ ] [Design the basic architecture](https://trello.com/c/CyUFSwY3/522-design-the-basic-architecture) Trello card.
	
	- [ ] Bug test.
	- [ ] ~~Maybe [Rebuild very simple static site using HTML and CSS](https://trello.com/c/FDIB9ePE/163-rebuild-very-simple-static-site-using-html-and-css) Trello card.~~ `Retiring this card. No longer needed. Not worked on. Moving to Completed.`

- [ ] consider renaming the Heroku URL for this site from `damp-reaches-12115` to `Portfolio-Website-Heroku` (or the like). This will require renaming or [updating the Git Remotes](https://devcenter.heroku.com/articles/renaming-apps#updating-git-remotes).

- [ ] How does the [H-educate-Send mail Sheet](https://docs.google.com/spreadsheets/d/1fyGDL1Ev2T-Wfi46Upix16ObMnZFySc5RsDlMJyRdws/edit#gid=0) Google Drive spreadsheet file work? When I get the subject working, will that show up in this file too? How do I make it show up? Background found [here](https://docs.google.com/document/d/1C26IEYlVEnyKCIoI79r_AsTM5bL3BqolVfweZ9H6j2I/edit#heading=h.m1unndreopk5).
	
- [X] ~~[Read up on functional versus business requirements](https://trello.com/c/CGFYOG9p/494-read-up-on-functional-versus-business-requirements) Trello card.~~

- [ ] ~~[Share link for portfolio website with others](https://trello.com/c/D5iXcGcX/531-share-link-for-portfolio-website-with-others) Trello card.~~ Redundant. Replaced with `Give survey for portfolio site`.

- [x] ~~[Redirect my other domains to jamiebort.github.io](https://trello.com/c/Q7faEc6N/527-redirect-my-other-domains-to-jamiebortgithubio) Trello card.~~

### Types fo Content
(see the [Explicitly list the content of the portfolio website 202010](https://trello.com/c/adJl19pT/496-explicitly-list-the-content-of-the-portfolio-website-202010) Trello card for content to list in this section.)

To add to the website.

* Blog post(s)

* Social Media
  * LinkedIn
  * Twitter

### Associated Links
* [Update Portfolio Website](https://calendar.google.com/calendar/r/search?q=Update%20Portfolio%20Website) recurring calendar event.
* [Portfolio Website](https://drive.google.com/drive/folders/1NchtYmGJ1wiZ6bEiqElTtK_IA84awWIo) Google Drive directory.
* Chrome bookmark for this project: `chrome://bookmarks/?id=1300`
* [Update Portfolio Website](https://trello.com/c/dJHqhhfU/90-update-portfolio-website) Trello card.
* Make sure all URLs and links point to one url (http://www.jamiebort.com/) [Have all links and urls pointing to my portfolio website point to this url](https://trello.com/c/Ng3Fg14h/1125-have-all-links-and-urls-pointing-to-my-portfolio-website-point-to-this-url) (http://www.jamiebort.com/) Trello card.
(not sure where this should be - settled on here rather than the [Update Portfolio Website](https://trello.com/c/dJHqhhfU/90-update-portfolio-website) Trello card.)

### Branches
* Revamp2020
* branch_for_cleaning_before_pushing_to_master
* dev
* master
* remotes/heroku/master
* remotes/origin/HEAD -> origin/master
* remotes/origin/Revamp2020
* remotes/origin/branch_for_cleaning_before_pushing_to_master
* remotes/origin/dev
* remotes/origin/master
