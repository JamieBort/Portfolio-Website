// ./js/main.js

// ToDo: use JavaScript to name section_01, section01, and Bio, as only Bio in one location.




// **************************************************
//                  for the navigation 
// **************************************************

// this toggles the hidden nav window to appear or disappear
function toggleMenu(){
    console.log("inside the toggleMenu function");
    var element = document.getElementById('menu');
    if(element.style.display === "none"){
        element.style.display = "block";
    }else{
        // element.style.display = "none";
        closeMenu();
    }
};

// this navigates to a specific section of the page
function section(param){
    // console.log("param:", param)
    if(param>0) window.location = '#section0'+param;
    else window.location = '#top'; 
}

// for when the user taps off of the navigation menu, the navigation menu needs to close
function closeMenu() {
    console.log("event listener firing");
    var element = document.getElementById('menu');
    element.style.display = "none";
}

// Add event listener to page.
const el = document.getElementById("content");
el.addEventListener("click", closeMenu, false); // why false? --> "A boolean value indicating that the listener should be invoked at most once after being added. If true, the listener would be automatically removed when invoked. If not specified, defaults to false."

function mobileHeaderButton(){
    closeMenu();
    section(0)
}

// **************************************************
// **************************************************



// **************************************************
//                  For the footer
// **************************************************

const copyright = document.getElementById('copyright');
if(new Date().getFullYear()) var date = new Date().getFullYear();
else var date = "2023";
document.getElementById('copyright').appendChild(document.createTextNode(date));

// **************************************************
// **************************************************



// **************************************************
//                  pinned project 
// **************************************************

// generated from the following using https://docs.github.com/en/graphql/overview/explorer

//     {
//   user(login: "jamiebort") {
//     pinnedItems(first: 6) {
//       totalCount
//       edges {
//         node {
//           ... on Repository {
//             id
//             name
//             url
//             stargazerCount
//             description
//             languages(first: 6) {
//               totalCount
//               edges {
//                 node {
//                   name
//                 }
//               }
//             }
//             homepageUrl
//             forkCount
//           }
//         }
//       }
//     }
//   }
// }

const pinnedProjects = 
{
"data": {
"user": {
"pinnedItems": {
  "totalCount": 6,
  "edges": [
    {
      "node": {
        "id": "MDEwOlJlcG9zaXRvcnkxNjI0Njg1MjA=",
        "name": "LearningDirectory",
        "url": "https://github.com/JamieBort/LearningDirectory",
        "stargazerCount": 3,
        "description": "The purpose of this directory is to house all the code I write as I learn new technologies and hone my skills. This is to help keep my GitHub account organized.",
        "languages": {
          "totalCount": 20,
          "edges": [
            {
              "node": {
                "name": "HTML"
              }
            },
            {
              "node": {
                "name": "JavaScript"
              }
            },
            {
              "node": {
                "name": "CSS"
              }
            },
            {
              "node": {
                "name": "PHP"
              }
            },
            {
              "node": {
                "name": "Java"
              }
            },
            {
              "node": {
                "name": "Groovy"
              }
            }
          ]
        },
        "homepageUrl": null,
        "forkCount": 0
      }
    },
    {
      "node": {
        "id": "MDEwOlJlcG9zaXRvcnkxNjI2NTg4ODM=",
        "name": "PersonalDashboard",
        "url": "https://github.com/JamieBort/PersonalDashboard",
        "stargazerCount": 0,
        "description": "A website for displaying important daily data. Such as blood glucose numbers and upcoming events. By using API calls, databases, authentication, etc.",
        "languages": {
          "totalCount": 3,
          "edges": [
            {
              "node": {
                "name": "CSS"
              }
            },
            {
              "node": {
                "name": "HTML"
              }
            },
            {
              "node": {
                "name": "JavaScript"
              }
            }
          ]
        },
        "homepageUrl": "",
        "forkCount": 0
      }
    },
    {
      "node": {
        "id": "MDEwOlJlcG9zaXRvcnk5NjcwOTAwNg==",
        "name": "jamiebort.github.io",
        "url": "https://github.com/JamieBort/jamiebort.github.io",
        "stargazerCount": 0,
        "description": "My Portfolio Website. This is where I share a bit about myself, showcase what I've been working on, host my blog, and more.",
        "languages": {
          "totalCount": 4,
          "edges": [
            {
              "node": {
                "name": "CSS"
              }
            },
            {
              "node": {
                "name": "HTML"
              }
            },
            {
              "node": {
                "name": "JavaScript"
              }
            },
            {
              "node": {
                "name": "PHP"
              }
            }
          ]
        },
        "homepageUrl": "",
        "forkCount": 0
      }
    },
    {
      "node": {
        "id": "MDEwOlJlcG9zaXRvcnkxMDg4MDk5NzM=",
        "name": "iPhysicist-CSSLayoutFlexbox",
        "url": "https://github.com/JamieBort/iPhysicist-CSSLayoutFlexbox",
        "stargazerCount": 0,
        "description": "Finish the styling for the 'i Physicist' blog mockup. Skills using CSS, HTML, GitHub, Bash.",
        "languages": {
          "totalCount": 2,
          "edges": [
            {
              "node": {
                "name": "HTML"
              }
            },
            {
              "node": {
                "name": "CSS"
              }
            }
          ]
        },
        "homepageUrl": null,
        "forkCount": 0
      }
    },
    {
      "node": {
        "id": "MDEwOlJlcG9zaXRvcnkxMDg3NzA5MDQ=",
        "name": "PuppyLove",
        "url": "https://github.com/JamieBort/PuppyLove",
        "stargazerCount": 0,
        "description": "An exercise in styling with CSS.",
        "languages": {
          "totalCount": 3,
          "edges": [
            {
              "node": {
                "name": "HTML"
              }
            },
            {
              "node": {
                "name": "CSS"
              }
            },
            {
              "node": {
                "name": "JavaScript"
              }
            }
          ]
        },
        "homepageUrl": "",
        "forkCount": 0
      }
    },
    {
      "node": {
        "id": "MDEwOlJlcG9zaXRvcnk5OTU3Mzc4MQ==",
        "name": "Create-A-User-Directory",
        "url": "https://github.com/JamieBort/Create-A-User-Directory",
        "stargazerCount": 0,
        "description": "A directory using the Express framework and the Mustache-Express templating engine to implement MVC.",
        "languages": {
          "totalCount": 3,
          "edges": [
            {
              "node": {
                "name": "CSS"
              }
            },
            {
              "node": {
                "name": "JavaScript"
              }
            },
            {
              "node": {
                "name": "Mustache"
              }
            }
          ]
        },
        "homepageUrl": "",
        "forkCount": 0
      }
    }
  ]
}
}
}
}

const projects=[];
pinnedProjects.data.user.pinnedItems.edges.map((project)=>projects.push(project));

// I want
// [
//   {
//     name: "",
//     description:"",
//     url: "",
//     languages:[
//       language1,
//       language2,
//       language3,
//       language4,
//       language5,
//     ]
//   },
//   {
//     name: "",
//     description:"",
//     url: "",
//     languages:[
//       language1,
//       language2,
//       language3,
//       language4,
//       language5,
//     ]
//   },
// ]

// console.log(projects);
// console.log(projects[0].node);

// console.log("The length of pinnedProjects.data.user.pinnedItems.edges:", pinnedProjects.data.user.pinnedItems.edges.length)

projects.forEach(element=>{
  console.log("========");
  // console.log(element.node.name);
  // console.log(element.node.url);
  // console.log(element.node.description);
  console.log(element.node.languages);
  console.log("Length of element.node.languages.edges:",element.node.languages.edges.length);
  console.log(element.node.languages.edges[0].node.name);
});

// get the div by id: card_container
// for each pinned project:
// create a <div>
// give the div a class=card
// create a <h3>
// Insert the title into the <h3>
// create a first <p>
// Insert the description into the first <p>
// create a second <p>
// Insert the technologies into the second <p>
// append the <div> to the card_container.
// append the <h3> to the div.
// append the first <p> to the div.
// append the second <p> to the div.

projects.forEach(element=>{

  const card_container = document.getElementById("card_container");

  const div_tag = document.createElement("div");
  div_tag.setAttribute("class", "card");

  const a_tag = document.createElement("a");
  a_tag.setAttribute("target", "_blank");
  a_tag.setAttribute("href", element.node.url);

  const h3_tag = document.createElement("h3");
  h3_tag.innerHTML = element.node.name;

  const p1_tag = document.createElement("p");
  p1_tag.innerHTML = element.node.description;

  const p2_tag = document.createElement("p");
  p2_tag.innerHTML = "languages in p2";

  card_container.appendChild(div_tag);
  div_tag.appendChild(a_tag);
  a_tag.appendChild(h3_tag);
  a_tag.appendChild(p1_tag);
  a_tag.appendChild(p2_tag);

});
