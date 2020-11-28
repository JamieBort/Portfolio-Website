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
    "create_a_site_with_login":{
        "div_id": "create_a_site_with_login_div",
        "title": "Create A Site With Login",
        "description": "Implementation of Node.js packages; specifically validating usernames and passwords.",
        "tech": ["JavaScript", "HTML", "CSS"],
        "project_anchor_href": "https://jamiebort.github.io/CreateASiteWithALogin/",
        "repo_anchor_href": "https://github.com/JamieBort/CreateASiteWithALogin",
        "img_src": "../assets/responsive_images/desktop/laptop-svgrepo-com.svg",
        "project_img": "../assets/Project_images/customerdatabase/CustomerDatabase.png",
    },
    "portfolio_website": {
        "div_id": "portfolio_website_div",
        "title": "This Portfolio Website",
        "description": "This may be a little bit meta. But I am learning new skills while building this site. So I wanted to show them off. I chose not to use any JavaScript framework and (few?) libraries to highlight and flex my vanilla JavaScript skills. More detailed information in the README file of the repo,found by selecting the 'Portfolio Website Repo' button below.",
        "tech": ["CSS", "HTML", "JavaScript",],
        // "project_anchor_text": "Portfolio Website Static Site",
        "project_anchor_href": "../index.html#title",
        // "repo_anchor_text": "Portfolio Website Repo",
        "repo_anchor_href": "https://github.com/JamieBort/jamiebort.github.io",
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

var project_section = document.getElementById("projects"); 

var h2 = document.createElement("h2");
h2.className = "section_title";
h2.innerHTML = "Some of my projects";
project_section.appendChild(h2);

var temp_div = document.createElement("div");
temp_div.className="projects_container";
project_section.appendChild(temp_div);

for (var key in projects) {
	var card_outside_div = document.createElement("div");
	card_outside_div.className = "card_outside_div";
	// project_section.appendChild(card_outside_div);
	temp_div.appendChild(card_outside_div);
	
	var card_header_div = document.createElement("div");
	card_header_div.className = "card_header_div";
	card_outside_div.appendChild(card_header_div);
	
	var card_header_img = document.createElement("img");
	card_header_img.className = "card_header_img";
	card_header_img.src = projects[key]["project_img"];
	card_header_div.appendChild(card_header_img);
	
	var card_body_outside_div = document.createElement("div");
	card_body_outside_div.className = "card_body_outside_div";
	card_outside_div.appendChild(card_body_outside_div);
	
	var card_title = document.createElement("h3");
	card_title.className="card_title";
	card_title.innerHTML=projects[key]["title"];
	card_body_outside_div.appendChild(card_title);
	
	var card_paragraph = document.createElement("p");
	card_paragraph.className="card_paragraph";
	card_paragraph.innerHTML = projects[key]["description"];
	card_body_outside_div.appendChild(card_paragraph);
	
	var card_body_inside_div = document.createElement("div");
	card_body_inside_div.className = "card_body_inside_div";
	card_body_outside_div.appendChild(card_body_inside_div);
	
	var card_a_div = document.createElement("div");
	card_a_div.className = "card_a_div";
	card_body_inside_div.appendChild(card_a_div);
	
	var a = document.createElement("a");
	a.className="card_a";
	a.href = projects[key]["project_anchor_href"];
    // taget _blank
    a.target="_blank";
	a.innerHTML = "Static Site";
	card_a_div.appendChild(a);
	
	var card_body_img = document.createElement("img");
	card_body_img.className="card_body_img";
    card_body_img.src = projects[key]["img_src"];
	card_a_div.appendChild(card_body_img);
	
	var a = document.createElement("a");
	a.className="card_a";
    a.href = projects[key]["repo_anchor_href"];
    // taget _blank
    a.target="_blank";
	a.innerHTML = "Git Repo";
	card_a_div.appendChild(a);
	
	var card_footer_div = document.createElement("div");
	card_footer_div.className = "card_footer_div";
	card_outside_div.appendChild(card_footer_div);
	
	var card_unordered_list = document.createElement("ul");
	card_unordered_list.className="card_unordered_list";
	card_footer_div.appendChild(card_unordered_list);
	
// 	cycle through the list of technologies used for this project
	for (var index = 0; index < projects[key]["tech"].length; index++) {
		var card_list_item = document.createElement("li");
		card_list_item.className="card_list_item";
		card_list_item.innerHTML =  projects[key]["tech"][index];
		card_unordered_list.appendChild(card_list_item);
	}
}