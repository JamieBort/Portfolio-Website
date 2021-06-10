const projects =  {
    "robot_employee_database":{
        "div_id": "robot_employee_database_div",
        "title": "Robot Employee Database",
        "description": "Using Express and Express-Mustache to populate cards from a json file. If the employee doesn't have a job, the card says 'Available to hire.'",
        "tech": ["JavaScript", "HTML", "CSS", "Heroku"],
        "project_anchor_href": "https://vast-island-13423.herokuapp.com/",
        "repo_anchor_href": "https://github.com/JamieBort/CreateAUserdirectory",
        "img_src": "../assets/responsive_images/desktop/laptop-svgrepo-com.svg",
        "project_img": "https://robohash.org/blanditiisexercitationemquaerat.png?size=150x150&set=set1",
    },
    "customer_database":{
        "div_id": "customer_database_div",
        "title": "Customer Database",
        "description": "Implementation of Template Literals, DOM manipulation, and pulling data from arrays.",
        "tech": ["JavaScript", "HTML", "CSS"],
        "project_anchor_href": "https://jamiebort.github.io/CustomerDatabase/",
        "repo_anchor_href": "https://github.com/JamieBort/CustomerDatabase",
        "img_src": "../assets/responsive_images/desktop/laptop-svgrepo-com.svg",
        "project_img": "../assets/Project_images/customerdatabase/CustomerDatabase.png",
    },
    // "create_a_site_with_login":{
    //     "div_id": "create_a_site_with_login_div",
    //     "title": "Create A Site With Login",
    //     "description": "Implementation of Node.js packages; specifically validating usernames and passwords.",
    //     "tech": ["JavaScript", "HTML", "CSS"],
    //     "project_anchor_href": "https://jamiebort.github.io/CreateASiteWithALogin/",
    //     "repo_anchor_href": "https://github.com/JamieBort/CreateASiteWithALogin",
    //     "img_src": "../assets/responsive_images/desktop/laptop-svgrepo-com.svg",
    //     "project_img": "../assets/Project_images/customerdatabase/CustomerDatabase.png",
    // },
    "portfolio_website": {
        "div_id": "portfolio_website_div",
        "title": "This Portfolio Website",
        "description": "This may be a little bit meta. But I am learning new skills while building this site. So I wanted to show them off. I chose not to use any JavaScript framework and (few?) libraries to highlight and flex my vanilla JavaScript skills. More detailed information in the README file of the repo,found by selecting the 'Portfolio Website Repo' button below.",
        "tech": ["CSS", "HTML", "JavaScript",],
        // "project_anchor_text": "Portfolio Website Static Site",
        "project_anchor_href": "../index.html#title",
        // "repo_anchor_text": "Portfolio Website Repo",
        // "repo_anchor_href": "https://github.com/JamieBort/jamiebort.github.io",
        "repo_anchor_href": "https://github.com/JamieBort/jamiebort.github.io#welcome-to-the-repo-for-my-portfolio-website",
        // "img_src": "../assets/responsive_images/multiple/responsive-svgrepo-com.svg",
        "img_src": "../assets/responsive_images/desktop/laptop-svgrepo-com.svg",
        // "backgground_image": "../assets/background_image/w-qjCHPZbeXCQ-unsplash.jpg",  // Used for when a background image is used. Rather than when an image is used at the top of the projects_div.
        // "project_img": "../assets/Project_images/Portfolio_Website.png",
        "project_img": "../assets/Project_images/Portfolio_Website2.png",
    },
    "puppy_love": {
        "div_id": "puppy_love_div",
        "title": "Puppy Love",
        "description": "A website incorporating a form and a table using HTML and CSS.",
        "tech": ["CSS", "HTML", "JavaScript",],
        // "project_anchor_text": "Puppy Love Static Site",
        "project_anchor_href": "https://jamiebort.github.io/PuppyLove/",
        // "repo_anchor_text": "Puppy Love Repo",
        "repo_anchor_href": "https://github.com/JamieBort/PuppyLove",
        "img_src": "../assets/responsive_images/multiple/responsive-svgrepo-com.svg",
        // "img_src": "../assets/responsive_images/desktop/laptop-svgrepo-com.svg",
        // "backgground_image": "../assets/background_image/w-qjCHPZbeXCQ-unsplash.jpg", // Used for when a background image is used. Rather than when an image is used at the top of the projects_div.
        "project_img": "../assets/Project_images/Puppy_Love.png",
    },
    "iPhysicist": {
        "div_id": "iPhysicist_div",
        "title": "iPhysicist",
        "description": "A static page created with HTML and stylized with CSS.",
        "tech": ["CSS", "HTML", "JavaScript",],
        // "project_anchor_text": "iPhysicist Static Site",
        "project_anchor_href": "https://jamiebort.github.io/iPhysicist-CSSLayoutFlexbox/",
        // "repo_anchor_text": "iPhysicist Repo",
        "repo_anchor_href": "https://github.com/JamieBort/iPhysicist-CSSLayoutFlexbox",
        // "img_src": "../assets/responsive_images/multiple/responsive-svgrepo-com.svg",
        "img_src": "../assets/responsive_images/desktop/laptop-svgrepo-com.svg",
        // "backgground_image": "../assets/background_image/photo-1579546929518-9e396f3cc809.jpeg", // Used for when a background image is used. Rather than when an image is used at the top of the projects_div.
        "project_img": "../assets/Project_images/iPhysicist_Small.png",
    },
    "form_builder": {
        "div_id": "form_builder_div",
        "title": "Form Builder",
        "description": "A simple form using HTML, CSS, and JavaScript.",
        "tech": ["CSS", "HTML", "JavaScript",],
        // "project_anchor_text": "Form Builder Static Site",
        "project_anchor_href": "https://jamiebort.github.io/FormBuilder/",
        // "repo_anchor_text": "Form Builder Repo",
        "repo_anchor_href": "https://github.com/JamieBort/FormBuilder",
        // "img_src": "../assets/responsive_images/multiple/responsive-svgrepo-com.svg",
        "img_src": "../assets/responsive_images/desktop/laptop-svgrepo-com.svg",
        // "backgground_image": "../assets/background_image/photo-1579546929518-9e396f3cc809.jpeg", // Used for when a background image is used. Rather than when an image is used at the top of the projects_div.
        "project_img": "../assets/Project_images/Form_Builder.png",
    },
    // "the_next_project": {},
}

var project_section = document.getElementById("projects_section"); 

var h2 = document.createElement("h2");
h2.className = "section_title";
h2.innerHTML = "Some of my projects";
project_section.appendChild(h2);

var psd = document.createElement("div");
// psd.className="projects_section_div";
psd.id="projects_section_div";
psd.className="section_div_not_used";
project_section.appendChild(psd);

for (var key in projects) {
	var cod = document.createElement("div");
	cod.className = "card_outside_div";
	// project_section.appendChild(cod);
	psd.appendChild(cod);
	
	var chd = document.createElement("div");
	chd.className = "card_header_div";
	cod.appendChild(chd);
	
	var chi = document.createElement("img");
	chi.className = "card_header_img";
	chi.src = projects[key]["project_img"];
	chd.appendChild(chi);
	
	var cbod = document.createElement("div");
	cbod.className = "card_body_outside_div";
	cod.appendChild(cbod);
	
	var cd = document.createElement("h3");
	cd.className="card_title";
	cd.innerHTML=projects[key]["title"];
	cbod.appendChild(cd);
	
	var cp = document.createElement("p");
	cp.className="card_paragraph";
	cp.innerHTML = projects[key]["description"];
	cbod.appendChild(cp);
	
	var cbid = document.createElement("div");
	cbid.className = "card_body_inside_div";
	cbod.appendChild(cbid);
	
	var cad = document.createElement("div");
	cad.className = "card_a_div";
	cbid.appendChild(cad);
	
	var a = document.createElement("a");
	a.className="card_a";
	a.href = projects[key]["project_anchor_href"];
    a.target="_blank";
	a.innerHTML = "Static Site";
	cad.appendChild(a);
	
	var cbi = document.createElement("img");
	cbi.className="card_body_img";
    cbi.src = projects[key]["img_src"];
	cad.appendChild(cbi);
	
	var a = document.createElement("a");
	a.className="card_a";
    a.href = projects[key]["repo_anchor_href"];
    // taget _blank
    a.target="_blank";
	a.innerHTML = "Git Repo";
	cad.appendChild(a);
	
	var cfd = document.createElement("div");
	cfd.className = "card_footer_div";
	cod.appendChild(cfd);
	
	var cul = document.createElement("ul");
	cul.className="card_unordered_list";
	cfd.appendChild(cul);
	
    // cycle through the list of technologies used for this project
	for (var index = 0; index < projects[key]["tech"].length; index++) {
		var cli = document.createElement("li");
		cli.className="card_list_item";
		cli.innerHTML =  projects[key]["tech"][index];
		cul.appendChild(cli);
	}
}