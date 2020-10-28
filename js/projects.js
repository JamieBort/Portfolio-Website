const projects = {
    "portfolio_website": {
        "div_id": "portfolio_website_div",
        "title": "This Portfolio Website",
        "description": "This may be a little bit meta. But I am learning new skills while building this site. So I wanted to show them off. I chose not to use any JavaScript framwork and (few?) libraries to highlight and flex my vanillia JavaScript skills.",
        "tech": ["CSS", "HTML", "JavaScript"],
        "project_anchor_text": "Portfolio Website Static Site",
        "project_anchor_href": "./index.html#title",
        "repo_anchor_text": "Portfolio Website Repo",
        "repo_anchor_href": "https://github.com/JamieBort/jamiebort.github.io",
        "img_src": "../assets/Projects/clipart1656353.png",
        // "backgground_image":"../assets/background_image/download.jpeg",
        "backgground_image": "../assets/background_image/w-qjCHPZbeXCQ-unsplash.jpg",
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
        "img_src": "../assets/Projects/clipart1656353.png",
        "backgground_image": "../assets/background_image/w-qjCHPZbeXCQ-unsplash.jpg",
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
        "img_src": "../assets/Projects/clipart1656353.png",
        "backgground_image": "../assets/background_image/photo-1579546929518-9e396f3cc809.jpeg",
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
        "img_src": "../assets/Projects/clipart1656353.png",
        // "backgground_image":"../assets/background_image/download (1).jpeg",
        "backgground_image": "../assets/background_image/photo-1579546929518-9e396f3cc809.jpeg",
    },
    "dummy": {
        "div_id": "dummy_div",
        "title": "Dummy",
        "description": "A simple form using HTML, CSS, and JavaScript.",
        "tech": ["CSS", "HTML", "JavaScript"],
        "project_anchor_text": "dummy Static Site",
        "project_anchor_href": "",
        "repo_anchor_text": "dummy Repo",
        "repo_anchor_href": "",
        "img_src": "../assets/Projects/clipart1656353.png",
        "backgground_image": "../assets/background_image/abstract-orange-background-260nw-323746937.webp",
    },
}

var project_section = document.getElementById("projects");

var h2 = document.createElement("h2");
h2.className = "section_title";
h2.innerHTML = "Some of my projects";
project_section.appendChild(h2);

var projects_section_div = document.createElement("div");
projects_section_div.id = "projects_section_div";
projects_section_div.className = "section_div";
project_section.appendChild(projects_section_div);

for (var key in projects) {
    // console.log("key: ", key);
    // console.log("div_id: ", projects[key]["div_id"]);
    // console.log("title: ", projects[key]["title"]);

    var div1 = document.createElement("div");
    div1.className = "projects_div";
    div1.id = projects[key]["div_id"];
    projects_section_div.appendChild(div1);



    var img = document.createElement("img");
    img.className = "projects_background_img";
    img.src = projects[key]["backgground_image"];
    div1.appendChild(img);

    var div2 = document.createElement("div");
    div2.className="middle";
    div1.appendChild(div2);




    var h3 = document.createElement("h3");
    h3.className = "projects_title";
    h3.innerHTML = projects[key]["title"];
    div2.appendChild(h3);
    // div1.appendChild(h3);

    var p = document.createElement("p");
    p.className = "projects_p";
    p.innerHTML = projects[key]["description"];
    div2.appendChild(p);
    // div1.appendChild(p);

    var p = document.createElement("p");
    p.className = "projects_tech";
    p.innerHTML = projects[key]["tech"];
    div2.appendChild(p);
    // div1.appendChild(p);

    var a = document.createElement("a");
    a.className = "projects_a";
    a.innerHTML = projects[key]["project_anchor_text"];
    a.href = projects[key]["project_anchor_href"];
    div2.appendChild(a);
    // div1.appendChild(a);

    var a = document.createElement("a");
    a.className = "projects_a";
    a.innerHTML = projects[key]["repo_anchor_text"];
    a.href = projects[key]["repo_anchor_href"];
    div2.appendChild(a);
    // div1.appendChild(a);

    var img = document.createElement("img");
    img.className = "projects_img";
    img.src = projects[key]["img_src"];
    div2.appendChild(img);
    // div1.appendChild(img);

}