const projects = {
    "portfolio_website": {
        "div_id": "portfolio_website_div",
        "title": "This Portfolio Website",
        "description": "This may be a little bit meta. But I am learning new skills while building this site. So I wanted to show them off. I chose not to use any JavaScript framework and (few?) libraries to highlight and flex my vanilla JavaScript skills.",
        "tech": ["CSS", "HTML", "JavaScript"],
        "project_anchor_text": "Portfolio Website Static Site",
        "project_anchor_href": "./index.html#title",
        "repo_anchor_text": "Portfolio Website Repo",
        "repo_anchor_href": "https://github.com/JamieBort/jamiebort.github.io",
        "img_src": "../assets/responsive_images/multiple/responsive-svgrepo-com.svg",
        // "backgground_image":"../assets/background_image/download.jpeg", // Used for when a background image is used. Rather than when an image is used at the top of the projects_div.
        "backgground_image": "../assets/background_image/w-qjCHPZbeXCQ-unsplash.jpg",  // Used for when a background image is used. Rather than when an image is used at the top of the projects_div.
        "project_img": "../assets/Project_images/Portfolio_Website.png",
    },
    "puppy_love": {
        "div_id": "puppy_love_div",
        "title": "Puppy Love",
        "description": "A website incorporating a form and a table using HTML and CSS.",
        "tech": ["CSS", "HTML", "JavaScript"],
        "project_anchor_text": "Puppy Love Static Site",
        "project_anchor_href": "https://jamiebort.github.io/PuppyLove/",
        "repo_anchor_text": "Puppy Love Repo",
        "repo_anchor_href": "https://github.com/JamieBort/PuppyLove",
        "img_src": "../assets/responsive_images/multiple/responsive-svgrepo-com.svg",
        "backgground_image": "../assets/background_image/w-qjCHPZbeXCQ-unsplash.jpg", // Used for when a background image is used. Rather than when an image is used at the top of the projects_div.
        "project_img": "../assets/Project_images/Puppy_Love.png",
    },
    "iPhysicist": {
        "div_id": "iPhysicist_div",
        "title": "iPhysicist",
        "description": "A static page created with HTML and stylized with CSS.",
        "tech": ["CSS", "HTML", "JavaScript"],
        "project_anchor_text": "iPhysicist Static Site",
        "project_anchor_href": "https://jamiebort.github.io/iPhysicist-CSSLayoutFlexbox/",
        "repo_anchor_text": "iPhysicist Repo",
        "repo_anchor_href": "https://github.com/JamieBort/iPhysicist-CSSLayoutFlexbox",
        "img_src": "../assets/responsive_images/multiple/responsive-svgrepo-com.svg",
        "backgground_image": "../assets/background_image/photo-1579546929518-9e396f3cc809.jpeg", // Used for when a background image is used. Rather than when an image is used at the top of the projects_div.
        "project_img": "../assets/Project_images/iPhysicist_Small.png",
    },
    "form_builder": {
        "div_id": "form_builder_div",
        "title": "Form Builder",
        "description": "A simple form using HTML, CSS, and JavaScript.",
        "tech": ["CSS", "HTML", "JavaScript"],
        "project_anchor_text": "Form Builder Static Site",
        "project_anchor_href": "https://jamiebort.github.io/FormBuilder/",
        "repo_anchor_text": "Form Builder Repo",
        "repo_anchor_href": "https://github.com/JamieBort/FormBuilder",
        "img_src": "../assets/responsive_images/multiple/responsive-svgrepo-com.svg",
        // "backgground_image":"../assets/background_image/download (1).jpeg",
        "backgground_image": "../assets/background_image/photo-1579546929518-9e396f3cc809.jpeg", // Used for when a background image is used. Rather than when an image is used at the top of the projects_div.
        "project_img": "../assets/Project_images/Form_Builder.png",
    },
    // "portfolio_website_hosted_on_heroku": {
    //     "div_id": "dummy_div",
    //     "title": "Portfolio Website on Heroku",
    //     "description": "A simple form using HTML, CSS, and JavaScript.",
    //     "tech": ["CSS", "HTML", "JavaScript", "Node"],
    //     "project_anchor_text": "Portfolio Website on Heroku Static Site",
    //     "project_anchor_href": "",
    //     "repo_anchor_text": "Portfolio Website on Heroku Repo",
    //     "repo_anchor_href": "",
    //     "img_src": "../assets/responsive_images/multiple/responsive-svgrepo-com.svg",
    //     "backgground_image": "../assets/background_image/abstract-orange-background-260nw-323746937.webp", // Used for when a background image is used. Rather than when an image is used at the top of the projects_div.
    //     "project_img": "../assets/Project_images/iPhysicist_Large.png",
    // },
}

var project_section = document.getElementById("projects");

var h2 = document.createElement("h2");
h2.className = "section_title";
h2.innerHTML = "Some of my projects";
project_section.appendChild(h2);

var projects_section_div = document.createElement("div");
projects_section_div.id = "projects_section_div";
projects_section_div.className = "section_div_not_used";
project_section.appendChild(projects_section_div);

for (var key in projects) {
    var div1 = document.createElement("div");
    div1.className = "projects_div";
    div1.id = projects[key]["div_id"];
    projects_section_div.appendChild(div1);


    // Note: the below two were created so that  background image could be used behind the text.
    // var img = document.createElement("img");
    // img.className = "projects_background_img";
    // img.src = projects[key]["backgground_image"];
    // div1.appendChild(img);

    // var div2 = document.createElement("div");
    // div2.className="background_img_div";
    // div1.appendChild(div2);
    // Note: the above two were created so that  background image could be used behind the text.


    var img = document.createElement("img");
    img.className = "projects_img"; // change to project_img?
    img.src = projects[key]["project_img"];
    // div2.appendChild(img); // Used for when a background image is used. Rather than when an image is used at the top of the projects_div.
    div1.appendChild(img);

    var h3 = document.createElement("h3");
    h3.className = "subtitle";
    h3.innerHTML = projects[key]["title"];
    // div2.appendChild(h3); // Used for when a background image is used. Rather than when an image is used at the top of the projects_div.
    div1.appendChild(h3);

    var p = document.createElement("p");
    p.className = "projects_p";
    p.innerHTML = projects[key]["description"];
    // div2.appendChild(p); // Used for when a background image is used. Rather than when an image is used at the top of the projects_div.
    div1.appendChild(p);



    var div3 = document.createElement("div");
    div3.className = "list_div";
    div1.appendChild(div3);

    for (var index = 0; index < projects[key]["tech"].length; index++) {
        // console.log("index: ", projects[key]["tech"][index]);
        var li = document.createElement("li");
        li.className = "projects_tech";
        // li.innerHTML = projects[key]["tech"]; // I need a function to list these items in the array. Rather than simply add the whole array to the paragraph. This causes issues with the resonsiveness when viewing the page on a smaller screen.
        // div2.appendChild(p); // Used for when a background image is used. Rather than when an image is used at the top of the projects_div.
        li.innerHTML = projects[key]["tech"][index];
        // div1.appendChild(li);
        div3.appendChild(li);
    }

    var div4 = document.createElement("div");
    div4.className = "bottom_div";
    div1.appendChild(div4);

    var div5 = document.createElement("div");
    // div5.className = "anchor_div";
    div5.className = "img_div";
    div4.appendChild(div5);

    var a = document.createElement("a");
    a.className = "projects_a";
    a.innerHTML = projects[key]["project_anchor_text"];
    a.href = projects[key]["project_anchor_href"];
    // div2.appendChild(a); // Used for when a background image is used. Rather than when an image is used at the top of the projects_div.
    // div1.appendChild(a);
    div5.appendChild(a);

    var a = document.createElement("a");
    a.className = "projects_a";
    a.innerHTML = projects[key]["repo_anchor_text"];
    a.href = projects[key]["repo_anchor_href"];
    // div2.appendChild(a); // Used for when a background image is used. Rather than when an image is used at the top of the projects_div.
    // div1.appendChild(a);
    div5.appendChild(a);

    var img = document.createElement("img");
    img.className = "responsive_img";
    img.src = projects[key]["img_src"];
    // div2.appendChild(img); // Used for when a background image is used. Rather than when an image is used at the top of the projects_div.
    // div1.appendChild(img);

    div4.appendChild(img);

}