// ./main.js

// **************************************************
//                  for the navigation
// **************************************************

// const leftHeaderButton = () => (window.location = "#top");

const leftHeaderButton = () => {
  console.log("top fired");
  window.location = "#top";
  closeNavMenu();
};

const rightHeaderButton = () => toggleNavMenu();

const jumpToSection = (param) => {
  window.location = "#" + param;
  toggleNavMenu();
};

const toggleNavMenu = () => {
  console.log("fired");
  const menu = document.getElementById("menu");
  menu.style.display === "none" ? (menu.style.display = "block") : (menu.style.display = "none");
};

const closeNavMenu = () => (document.getElementById("menu").style.display = "none");

// Add event listener to page.
// why false? --> "A boolean value indicating that the listener should be invoked at most once after being added.
// If true, the listener would be automatically removed when invoked. If not specified, defaults to false."
document.getElementById("content").addEventListener("click", closeNavMenu, false);

// **************************************************
//                  for the navigation
// **************************************************

// **************************************************
//                  For the footer
// **************************************************

if (new Date().getFullYear()) var date = new Date().getFullYear();
else var date = "203";
document.getElementById("copyright").appendChild(document.createTextNode(date));

// **************************************************
//                  For the footer
// **************************************************

// var stickyElement = document.querySelector(".header");
// var parent = stickyElement.parentElement;
// while (parent) {
//   var hasOverflow = getComputedStyle(parent).overflow;
//   if (hasOverflow != "visible") {
//     console.log(hasOverflow, parent);
//   } else console.log("not found");
//   parent = parent.parentElement;
// }

// **************************************************
//                  For the translation
// **************************************************

// DEFINE VARIABLES

// Obtain the default language from the website. If it isn't available, set the language.
var language = document.getElementsByTagName("html")[0]["lang"] || languageContent.html[0];
// console.log("language:", language);

// Assign integer based on language string.
var languageValue = language == "en" ? 0 : 1;
// console.log("languageValue:", languageValue);

// The toggle function to toggle between languages.
const toggle = () => {
  // DEFINE VARIABLES
  const h2Array = [];
  const pArray = [];

  // Toggle between Spanish (1) and English (0).
  // console.log("languageValue before:", languageValue);
  languageValue = languageValue == 1 ? 0 : 1;
  // console.log("languageValue after:", languageValue);

  // ASSIGN TEXT BASED ON THE LANGUAGE VALUE
  // *** html tag ***
  // console.log(
  //   "languageContent.html[languageValue]:",
  //   languageContent.html[languageValue],
  // );
  document.getElementById("html").setAttribute("lang", languageContent.html[languageValue]);

  // *** navigation ***
  // console.log(document.getElementsByClassName("desktopHeaderButtons")[0]);
  document.getElementsByClassName("mobileHeaderButtons")[0].innerHTML = languageContent.body.header.idioma[languageValue];
  // console.log(document.getElementsByClassName("desktopHeaderButtons")[0]);
  // console.log(document.getElementsByClassName("desktopHeaderButtons")[0]);
  document.getElementsByClassName("desktopHeaderButtons")[0].innerHTML = languageContent.body.header.idioma[languageValue];

  // *** title tag ***
  // document.getElementById("title").innerHTML =
  //   languageContent.body.content.h1[languageValue];
  document.getElementById("title").innerHTML = languageContent.body.content.top.h1[languageValue];

  // Deconstructing the "content" property of the "body" object:
  const { content } = languageContent.body;

  // Iterating through the "content" object:
  for (const key1 in content) {
    // console.log("key1:", key1);

    // Iterating through the properties of the "content" object:
    for (const key2 in content[key1]) {
      // console.log("key2:", key2);

      // Generating the h2 array
      if (key2 === "h2" && key1 != "top") {
        //   console.log("content[key1][key2]/h2:", content[key1][key2]);
        h2Array.push(content[key1][key2]);
      }

      // Generating the paragraph array
      if (key2 != "h2" && key2 != "h1") {
        // console.log("content[key1][key2]/paragraphs:", content[key1][key2]);
        pArray.push(content[key1][key2]);
      }
    }
  }
  // console.log("h2Array:", h2Array);
  // console.log("pArray:", pArray);

  // console.log(
  //   "document.getElementsByTagName('h2').length:",
  //   document.getElementsByTagName("h2").length,
  // );
  // console.log("h2Array.length:", h2Array.length);
  // console.log("h2Array:", h2Array);

  // console.log(
  //   "document.getElementsByTagName('p').length:",
  //   document.getElementsByTagName("p").length,
  // );
  // console.log("pArray.length:", pArray.length);
  // console.log("pArray:", pArray);
  // for (let index = 0; index < document.getElementsByTagName("p").length; index++) {
  //   // const element = array[index];
  //   console.log("document.getElementsByTagName('p')[index]:", document.getElementsByTagName("p")[index]);
  // }

  // *** h2 tag ***
  for (let index = 0; index < document.getElementsByTagName("h2").length; index++) {
    // console.log("the h2 statements:", h2Array[index][languageSetting]);
    document.getElementsByTagName("h2")[index].innerHTML = h2Array[index][languageValue];
  }

  // *** p tag ***
  // console.log('document.getElementsByClassName("section_p").length', document.getElementsByClassName("section_p").length);
  for (let index = 0; index < document.getElementsByClassName("section_p").length; index++) {
    // console.log("the p statements:", pArray[index][languageValue]);
    document.getElementsByClassName("section_p")[index].innerHTML = pArray[index][languageValue];
  }
};

// ********************************************************
// Don't touch below until I have the toggle above working.
// ********************************************************

// const codeTheDreamAnchor = `<a id="textLink" target="_blank" href="https://codethedream.org/">
//     Code the Dream
//   </a>`;

// const inject = ` I teach and mentor at ${codeTheDreamAnchor}, a software boot camp for underrepresented people.`;
// // console.log(document.getElementsByTagName("p"));
// console.log(document.getElementsByClassName("section_p")[0]);

// document.getElementsByClassName("section_p")[0].innerHTML = inject;

// console.log(
//   "The number of section_p paragraphs:",
//   document.getElementsByClassName("section_p").length,
// );
// console.log("The number of h2's:", document.getElementsByTagName("h2").length);

// const bam = (param) => {
//   // console.log(
//   //   "document.getElementsByTagName",
//   //   document.getElementsByTagName("h2")[3],
//   // );
//   // console.log("languageContent.html[0]:", languageContent.html[0]);
//   // console.log("languageContent.html[1]:", languageContent.html[1]);
//   // const content = languageContent.body.content; // Maybe don't need this.
//   const { content } = languageContent.body;
//   // console.log("content:", content);

//   let languageSetting;
//   if (param === "English") languageSetting = 0;
//   else if (param === "Spanish") languageSetting = 1;

//   // *** html tag ***
//   document
//     .getElementById("html")
//     .setAttribute("lang", languageContent.html[languageSetting]);

//   // *** h1 tag ***
//   document.getElementById("top").innerHTML = content.h1[languageSetting];

//   // *** content tag ***
//   let sectionArray = [];
//   var sectionObject = {};
//   const paragraphArray = [];
//   const h2Array = [];
//   // const { content } = languageContent.body;
//   // console.log("content:", content);
//   for (const key in content) {
//     if (!Array.isArray(content[key])) {
//       // console.log("key:", key);
//       // console.log("object for that property:", content[key]);
//       for (const key2 in content[key]) {
//         //   console.log("key2:", key2);
//         //   console.log("content[key][key2]:", content[key][key2]);
//         if (key2 != "h2") {
//           // console.log("key2:", key2);
//           // console.log("content[key][key2]:", content[key][key2]);
//           // console.log("the h2 is:", content[key]["h2"]);
//           paragraphArray.push(content[key][key2]);
//         } else h2Array.push(content[key][key2]);
//       }
//     }
//   }
//   // console.log("paragraphArray:", paragraphArray);
//   // for (let index = 0; index < paragraphArray.length; index++)
//   //   console.log("paragraphArray:", paragraphArray[index][languageSetting]);

//   // // console.log("h2Array:", h2Array);
//   // for (let index = 0; index < h2Array.length; index++)
//   //   console.log("h2Array:", h2Array[index][languageSetting]);

//   // *** h2 tag ***
//   for (
//     let index = 0;
//     index < document.getElementsByTagName("h2").length;
//     index++
//   ) {
//     // console.log("the h2 statements:", h2Array[index][languageSetting]);
//     document.getElementsByTagName("h2")[index].innerHTML =
//       h2Array[index][languageSetting];
//   }

//   // *** p tag ***
//   for (
//     let index = 0;
//     index < document.getElementsByClassName("section_p").length - 1;
//     index++
//   ) {
//     // console.log("the p statements:", paragraphArray[index][languageSetting]);
//     document.getElementsByClassName("section_p")[index].innerHTML =
//       paragraphArray[index][languageSetting];
//   }
//   // document.getElementsByClassName("section_p").length,
// };

// Variables for the languageContent object.
const CodeTheDreamAnchor = `<a id="textLink" target="_blank" href="https://codethedream.org/">Code the Dream</a>`;
const projectsButton = `<button class="section_button" onclick="jumpToSection('projects')">Projects</button>`;
// Below you will find some of my <button class="section_button" onclick="jumpToSection('projects')">Projects</button>.
const connectWithMeButton = `<button class="section_button" onclick="jumpToSection('ConnectWithMe')">Connect with Me</button>`;

const languageContent = {
  html: ["en", "es"],
  head: "",
  body: {
    header: {
      // TODO: Consider changing the default text "English" in the language toggle button to "Cambia a español"
      // And the text to change it back to "Change to English"
      // Or something to that effect.
      idioma: ["English", "Español"],
      bio: ["English version", "Spanish version"],
      projects: ["English version", "Spanish version"],
      blog: ["English version", "Spanish version"],
      connectWithMe: ["English version", "Spanish version"],
    },
    content: {
      // h1: ["Software Engineer", "Ingeniero en Software"],
      // // top: { h1: ["English version", "Ingeniero en Software"] },

      top: { h1: ["Software Engineer", "Ingeniero en Software"], h2: null },

      bio: {
        h2: ["A little bit about myself", "Spanish version Bio H2"],
        p1: [`I write code and teach at ${CodeTheDreamAnchor}, a software boot camp for underrepresented people.`, "Spanish version bio first paragraph"],
        p2: [`Below you will find some of my ${projectsButton}.`, "Spanish version bio second paragraph"],
        p3: ["When I am not coding I am working on my next presentation or mentoring; both of which push me to learn and grow.", "Spanish version bio third paragraph"],
        p4: [`I invite you to ${connectWithMeButton} on social media below.`, `Spanish version bio fifth paragraph ${connectWithMeButton}`],
      },
      projects: {
        h2: ["English version Projects H2", "Spanish version Projects H2"],
      },
      blog: {
        h2: ["English version Blog H2", "Spanish version Blog H2"],
        p1: ["English version Blog first paragraph", "Spanish version Blog first paragraph"],
        p2: ["English version Blog second paragraph", "Spanish version Blog second paragraph"],
      },
      connectWithMe: {
        h2: ["English version Connect with Me h2", "Spanish version Connect with Me h2"],
      },
    },
    footer: ["English version", "Spanish version"],
  },
};

// **************************************************
//                  For the translation
// **************************************************
