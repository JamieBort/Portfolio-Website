// created for the api calls in the project_card_api branch

// the following egoist_array was creating using this api call:
// https://gh-pinned-repos-5l2i19um3.vercel.app/?username=jamiebort
// using this repo:
// https://github.com/egoist/gh-pinned-repos
// more info on it found here:
// https://trello.com/c/RyfM5Z0E/1124-have-the-cards-themselves-created-populated-based-on-the-pinned-items-in-github?menu=filter&filter=label:none

var pinned_array = [];
const static_site_urls = {
    first: "https://vast-island-13423.herokuapp.com/",
    second: "https://jamiebort.github.io/CustomerDatabase/",
    third: "../index.html#title",
    fourth: "https://jamiebort.github.io/PuppyLove/",
    fifth: "https://jamiebort.github.io/iPhysicist-CSSLayoutFlexbox/",
    six: "https://jamiebort.github.io/FormBuilder/",
}
const images = {
    first: "https://robohash.org/blanditiisexercitationemquaerat.png?size=150x150&set=set1",
    second: "../assets/Project_images/customerdatabase/CustomerDatabase.png",
    third: "../assets/Project_images/Portfolio_Website2.png",
    fourth: "../assets/Project_images/Puppy_Love.png",
    fifth: "../assets/Project_images/iPhysicist_Small.png",
    six:  "../assets/Project_images/Form_Builder.png",
}

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









                // var div = document.createElement("div");
                // // body.appendChild(div);
                // // project_section.appendChild(div);

                // cod.appendChild(div);


                var chd = document.createElement("div");
                chd.className = "card_header_div";
                cod.appendChild(chd);

                var chi = document.createElement("img");
                chi.className = "card_header_img";
                // chi.src = projects[key]["project_img"];
                // for (let indexx = 0; indexx < 6; indexx++) {
                    // chi = document.createElement("img");
                    // chi.className = "card_header_img";
                    console.log("Object.keys(data)[index1]: ", Object.keys(images)[index1]);
                    console.log("images[Object.keys(images)[index1]]: ", images[Object.keys(images)[index1]]);
                    chi.src=images[Object.keys(images)[index1]]
                // }
                // chi.src = images["second"];
                // chi.src = "../assets/under_construction/website-construction.jpg";
                chd.appendChild(chi);

                var cbod = document.createElement("div");
                cbod.className = "card_body_outside_div";
                cod.appendChild(cbod);

                var cd = document.createElement("h3");
                cd.className = "card_title";
                // cd.innerHTML=projects[key]["title"];
                cd.innerHTML = data.name;
                cbod.appendChild(cd);

                // var li1 = document.createElement("li");
                // li1.innerHTML = data.name;
                // cbod.appendChild(li1);




                // var ul = document.createElement("ul");
                // ul.setAttribute("class", "first_ul");
                // // div.appendChild(ul);
                // chd.appendChild(ul);





                var cp = document.createElement("p");
                cp.className = "card_paragraph";
                // cp.innerHTML = projects[key]["description"];
                cp.innerHTML = data.description;
                cbod.appendChild(cp);



                // var li2 = document.createElement("li");
                // li2.innerHTML = data.description;
                // ul.appendChild(li2);



                var cbid = document.createElement("div");
                cbid.className = "card_body_inside_div";
                cbod.appendChild(cbid);

                var cad = document.createElement("div");
                cad.className = "card_a_div";
                cbid.appendChild(cad);

                var site_anchor = document.createElement("a");
                site_anchor.setAttribute("class", "card_a site_link");
                // a.href = projects[key]["project_anchor_href"];
                site_anchor.href = "https://github.com/JamieBort/jamiebort.github.io#welcome-to-the-repo-for-my-portfolio-website";
                // site_anchor.href = "data.html_url";
                site_anchor.target = "_blank";
                site_anchor.innerHTML = "Static Site";
                cad.appendChild(site_anchor);

                var cbi = document.createElement("img");
                cbi.className = "card_body_img";
                // cbi.src = projects[key]["img_src"];
                cbi.src = "../assets/under_construction/website-construction.jpg";
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












                // var li3 = document.createElement("li");
                // li3.innerHTML = "languages";
                // ul.appendChild(li3);

                // second_ul = document.createElement("ul");
                // second_ul.setAttribute("class", "second_ul");
                // li3.appendChild(second_ul);

            });
        fetch('https://api.github.com/repos/JamieBort/' + pinned_array[index1] + '/languages')
            .then(response => response.json())
            .then(data => {
                c_u_l = document.getElementsByClassName("card_unordered_list");

                // console.log("Object.keys(data).length: ", Object.keys(data).length);
                // console.log("data: ", data);
                for (let index2 = 0; index2 < Object.keys(data).length && index2 < 6; index2++) {
                    console.log("Object.keys(data)[index2]: ", Object.keys(data)[index2]);

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