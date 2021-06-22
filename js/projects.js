// the `projects` object below will be used for when the api call fails.
// It will be hard coded info.
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

var pinned_array = [];
const static_site_urls = {
    first: "https://vast-island-13423.herokuapp.com/",
    second: "https://jamiebort.github.io/PersonalDashboard/",
    third: "../index.html#title",
    fourth: "https://jamiebort.github.io/iPhysicist-CSSLayoutFlexbox/",
    fifth: "https://jamiebort.github.io/PuppyLove/",
    // fourth: "https://jamiebort.github.io/PuppyLove/",
    // fifth: "https://jamiebort.github.io/iPhysicist-CSSLayoutFlexbox/",
    six: "https://jamiebort.github.io/FormBuilder/",
}
const images = {
    first: "../assets/learningimage/pexels-negative-space-34592_640_106.jpeg",
    second: "../assets/learningimage/dashboard/PIXNIO-344890-640x106.jpeg",
    third: "../assets/Project_images/Portfolio_Website2.png",
    fourth: "../assets/Project_images/iPhysicist_Small.png",
    fifth: "../assets/Project_images/Puppy_Love.png",
    six: "../assets/Project_images/Form_Builder.png",
}
const responsive_images = {
    first: "../assets/responsive_images/desktop/laptop-svgrepo-com.svg",
    second: "../assets/responsive_images/desktop/laptop-svgrepo-com.svg",
    third: "../assets/responsive_images/desktop/laptop-svgrepo-com.svg",
    fourth: "../assets/responsive_images/multiple/responsive-svgrepo-com.svg",
    fifth: "../assets/responsive_images/desktop/laptop-svgrepo-com.svg",
    six: "../assets/responsive_images/desktop/laptop-svgrepo-com.svg",
}

// The `static_assets` object below is to replace the `static_site_urls`, `images`, and `responsive_images` objects above.
const static_assets = {
    first: {
        static_site_url: "https://vast-island-13423.herokuapp.com/",
        header_image: "",
        responsive_image: "",
    },
    second: {
        static_site_url: "https://jamiebort.github.io/CustomerDatabase/",
        header_image: "../assets/Project_images/customerdatabase/CustomerDatabase.png",
        responsive_image: "",
    },
    third: {
        static_site_url: "../index.html#title",
        header_image: "../assets/Project_images/Portfolio_Website2.png",
        responsive_image: "",
    },
    fourth: {
        static_site_url: "https://jamiebort.github.io/PuppyLove/",
        header_image: "../assets/Project_images/Puppy_Love.png",
        responsive_image: "../assets/Project_images/Puppy_Love.png",
    },
    fifth: {
        static_site_url: "https://jamiebort.github.io/iPhysicist-CSSLayoutFlexbox/",
        header_image: "../assets/Project_images/iPhysicist_Small.png",
        responsive_image: "../assets/Project_images/iPhysicist_Small.png",
    },
    six: {
        static_site_url: "https://jamiebort.github.io/FormBuilder/",
        header_image: "../assets/Project_images/Form_Builder.png",
        responsive_image: "../assets/Project_images/Form_Builder.png",
    },
}
// console.log(static_assets);
// console.log("static_assets.first.static_site_url: ",static_assets.first.static_site_url);
// console.log("static_assets['first']['static_site_url']: ",static_assets["first"]["static_site_url"]);

var project_section = document.getElementById("projects_section");

var h2 = document.createElement("h2");
h2.className = "section_title";
h2.innerHTML = "Some of my projects";
project_section.appendChild(h2);

var psd = document.createElement("div");
psd.id = "projects_section_div";
psd.className = "section_div_class";
project_section.appendChild(psd);

async function myFetch() {
    // Note:
    // For the following api call using this repo:
    // https://github.com/egoist/gh-pinned-repos
    // more info on it found here:
    // https://trello.com/c/RyfM5Z0E/1124-have-the-cards-themselves-created-populated-based-on-the-pinned-items-in-github
    const response = await fetch("https://gh-pinned-repos-5l2i19um3.vercel.app/?username=jamiebort")
    // .then(response => response.json())
    // .then(data => {
    //     // console.log("data: ", data);
    //     for (let index = 0; index < data.length; index++) {
    //         pinned_array.push(data[index]['repo']);
    //     }

    // });

    // console.log(response);

    const repo_names = await response.json();
    return repo_names;

}


myFetch().then(repo_names => {
    // console.log("repo_names: ",repo_names);
    for (let index = 0; index < repo_names.length; index++) {
        pinned_array.push(repo_names[index]['repo']);
    }


    // console.log("pinned_array: ", pinned_array);

    //     console.log("pinned_array: ", data);

    for (let index1 = 0; index1 < pinned_array.length; index1++) {
        // var body = document.getElementsByTagName("body")[0];

        fetch('https://api.github.com/repos/jamiebort/' + pinned_array[index1])
            .then(response => response.json())
            .then(data => {
                // console.log("data: ", data);
                // console.log("data.name: ", data.name);
                // console.log("data.html_url: ", data.html_url);
                // console.log("data.description: ", data.description);

                var cod = document.createElement("div");
                cod.className = "card_outside_div";
                // project_section.appendChild(cod);
                psd.appendChild(cod);

                var chd = document.createElement("div");
                chd.className = "card_header_div";
                cod.appendChild(chd);

                var chi = document.createElement("img");
                chi.className = "card_header_img";
                // console.log("Object.keys(data)[index1]: ", Object.keys(images)[index1]);
                // console.log("images[Object.keys(images)[index1]]: ", images[Object.keys(images)[index1]]);
                chi.src = images[Object.keys(images)[index1]]
                chd.appendChild(chi);

                var cbod = document.createElement("div");
                cbod.className = "card_body_outside_div";
                cod.appendChild(cbod);

                var cd = document.createElement("h3");
                cd.className = "card_title";
                cd.innerHTML = data.name;
                cbod.appendChild(cd);

                var cp = document.createElement("p");
                cp.className = "card_paragraph";
                cp.innerHTML = data.description;
                cbod.appendChild(cp);

                var cbid = document.createElement("div");
                cbid.className = "card_body_inside_div";
                cbod.appendChild(cbid);

                var cad = document.createElement("div");
                cad.className = "card_a_div";
                cbid.appendChild(cad);

                var site_anchor = document.createElement("a");
                site_anchor.setAttribute("class", "card_a site_link");
                // a.href = projects[key]["project_anchor_href"];
                // site_anchor.href = "https://github.com/JamieBort/jamiebort.github.io#welcome-to-the-repo-for-my-portfolio-website";
                // site_anchor.href = "data.html_url";
                site_anchor.href = static_site_urls[Object.keys(static_site_urls)[index1]];
                site_anchor.target = "_blank";
                site_anchor.innerHTML = "Static Site";
                cad.appendChild(site_anchor);

                var cbi = document.createElement("img");
                cbi.className = "card_body_img";
                // cbi.src = projects[key]["img_src"];
                cbi.src = responsive_images[Object.keys(responsive_images)[index1]];
                // cbi.src = "../assets/under_construction/website-construction.jpg";
                cad.appendChild(cbi);

                var repo_anchor = document.createElement("a");
                repo_anchor.setAttribute("class", "card_a repo_link");
                // repo_anchor.className = "card_a";
                // repo_anchor.setAttribute("id", "repo_link");
                // repo_anchor.href = projects[key]["repo_anchor_href"];
                // repo_anchor.href = "https://github.com/JamieBort/jamiebort.github.io#welcome-to-the-repo-for-my-portfolio-website";
                repo_anchor.href = data.html_url;

                repo_anchor.target = "_blank";
                repo_anchor.innerHTML = "Git Repo";
                cad.appendChild(repo_anchor);

                var cfd = document.createElement("div");
                cfd.className = "card_footer_div";
                cod.appendChild(cfd);

                var cul = document.createElement("ul");
                // cul.className="card_unordered_list";
                cul.setAttribute("class", "card_unordered_list");
                cul.setAttribute("id", "aaaa");
                cfd.appendChild(cul);

            });
        fetch('https://api.github.com/repos/JamieBort/' + pinned_array[index1] + '/languages')
            .then(response => response.json())
            .then(data => {
                c_u_l = document.getElementsByClassName("card_unordered_list");

                // console.log("Object.keys(data).length: ", Object.keys(data).length);
                // console.log("data: ", data);
                for (let index2 = 0; index2 < Object.keys(data).length && index2 < 4; index2++) {
                    // console.log("Object.keys(data)[index2]: ", Object.keys(data)[index2]);

                    var cli = document.createElement("li");
                    cli.className = "card_list_item";
                    // cli.innerHTML =  projects[key]["tech"][index];
                    cli.innerHTML = Object.keys(data)[index2];
                    // cli.innerHTML =  "Object.keys(data)[index2]";
                    c_u_l[index1].appendChild(cli);
                }
            });
    };

});