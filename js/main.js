// ./main.js

// **************************************************
//                  For the navigation
// **************************************************

const leftHeaderButton = () => {
  // console.log("leftHeaderButton");
  // window.location = "#top";
  window.location = "#title";
  closeNavMenu();
};

const rightHeaderButton = () => toggleNavMenu();

const jumpToSection = (param) => {
  window.location = "#" + param;
  toggleNavMenu();
};

const toggleNavMenu = () => {
  // console.log("toggleNavMenu");
  const menu = document.getElementById("menu");
  menu.style.display === "none" ? (menu.style.display = "block") : (menu.style.display = "none");

  // *** For accessability ***
  const mobileNavButton = document.getElementsByClassName("mobileHeaderButtons")[2];
  mobileNavButton["ariaPressed"] == "false" ? mobileNavButton.setAttribute("aria-pressed", "true") : mobileNavButton.setAttribute("aria-pressed", "false");
  // console.log("mobileNavButton:", mobileNavButton);
};

const closeNavMenu = () => (document.getElementById("menu").style.display = "none");

// Add event listener to page.
// why false? --> "A boolean value indicating that the listener should be invoked at most once after being added.
// If true, the listener would be automatically removed when invoked. If not specified, defaults to false."
// document.getElementById("content").addEventListener("click", closeNavMenu, false);
// console.log('document.getElementsByTagName("main")[0]:', document.getElementsByTagName("main")[0]); // TODO: Delete this line.
document.getElementsByTagName("main")[0].addEventListener("click", closeNavMenu, false);
// document.getElementById("content").addEventListener("click", closeNavMenu, false); // TODO: Delete this line.
// console.log('document.getElementById("content"):', document.getElementById("content")); // TODO: Delete this line.

// **************************************************
//                  For the navigation
// **************************************************
// --------------------------------------------------

// --------------------------------------------------
// **************************************************
//                  For the footer
// **************************************************

if (new Date().getFullYear()) var date = new Date().getFullYear();
else var date = 2023;
document.getElementById("copyright").appendChild(document.createTextNode(date));

// **************************************************
//                  For the footer
// **************************************************
// --------------------------------------------------

// --------------------------------------------------
// **************************************************
//                  For the translation
// **************************************************

// DEFINE VARIABLES

// Obtain the default language from the website. If it isn't available, set the language.
let language = document.getElementsByTagName("html")[0]["lang"] || languageContent.html[0];

// Assign integer based on language string. 0 for English. 1 for Spanish.
var languageValue = language == "en" ? 0 : 1;

// The toggle function to toggle between languages.
const toggleLanguage = () => {
  // DEFINE VARIABLES
  // Variables for the collecting the h2 and p tags from the languageContent object.
  const h2Array = [];
  const pArray = [];

  // Variables for the languageContent object.
  const codeTheDreamAnchor = `<a id="unused_textLink" target="_blank" href="https://codethedream.org/">Code the Dream</a>`;
  const projectsButtonEnglish = `<button class="section_button" onclick="jumpToSection('projects')" aria-label="Projects">Projects</button>`;
  const projectsButtonSpanish = `<button class="section_button" onclick="jumpToSection('projects')" aria-label="Proyectos">Proyectos</button>`;
  const connectWithMeButtonEnglish = `<button class="section_button" onclick="jumpToSection('connectWithMe')" aria-label="Connect with Me">Connect with Me</button>`;
  const connectWithMeButtonSpanish = `<button class="section_button" onclick="jumpToSection('connectWithMe')" aria-label="Conectarte Conmigo">Conectarte Conmigo</button>`;

  const languageContent = {
    html: ["en", "es"],
    head: "",
    body: {
      header: {
        idioma: ["Español", "English"],
        bio: ["Bio", "Bio"],
        projects: ["Projects", "Proyectos"],
        blog: ["Blog", "Blog"],
        connectWithMe: ["Connect With Me", "Contáctame"],
      },
      content: {
        // h1: ["Software Engineer", "Ingeniero en Software"],
        // top: { h1: ["English version", "Ingeniero en Software"] },
        top: { h1: ["Software Engineer", "Ingeniero en Software"], h2: null },

        bio: {
          // NOTE: commented this out because I don't want to use the content in languageContent.body.header.bio
          // h2: {0: function () {return languageContent.body.header.bio[0];},1: function () {return languageContent.body.header.bio[1];},},
          h2: ["A little bit about myself", "Un poco sobre mi"],
          // p1: [
          //   `I write code and teach at ${codeTheDreamAnchor}, a software boot camp for underrepresented people.`,`Escribo código y enseno en ${codeTheDreamAnchor}, un campo de entrenamiento de software para personas subrepresentadas.`,],
          // Danni's translation.
          p1: [
            `I write code and teach at ${codeTheDreamAnchor}, a software boot camp for underrepresented people.`,
            `Escribo código y enseno en ${codeTheDreamAnchor}, un campo de entrenamiento de software para personas con escasa representación.`,
          ],
          // p2: [`Below you will find some of my ${projectsButtonEnglish}.`, `En la parte de abajo encontrarás algunos de mis ${projectsButtonSpanish}.`],
          // Danni's translation.
          p2: [`Below you will find some of my ${projectsButtonEnglish}.`, `Aquí encontrarás algunos de mis ${projectsButtonSpanish}.`],
          // p3: ["When I am not coding I am working on my next presentation or mentoring; both of which push me to learn and grow.","Cuando no estoy codificando, estoy trabajando en mi próxima presentación o soy mentor; lo cual me empuja a aprender y a crecer.",],
          // Danni's translation.
          p3: [
            "When I am not coding I am working on my next presentation or mentoring; both of which push me to learn and grow.",
            "Cuando no estoy codificando estoy trabajando en mi próxima presentación o para mis citas como mentor, ambos de los cuales me empujan a aprender y crecer.",
          ],
          // p4: [`I invite you to ${connectWithMeButtonEnglish} on social media below.`, `Te invito a ${connectWithMeButtonSpanish} en las redes sociales a continuación.`],
          // Danni's translation.
          p4: [`I invite you to ${connectWithMeButtonEnglish} on social media below.`, `Te invito a ${connectWithMeButtonSpanish} en las redes sociales.`],
          // p4: [`I invite you to ${connectWithMeButton} on social media below.`, `Te invito a Conectarte Conmigo ${connectWithMeButton} en las redes sociales a continuación.`],
          // p4: [connectWithMeFunction(), `Te invito a Conectarte Conmigo ${connectWithMeButton} en las redes sociales a continuación.`],
        },
        projects: {
          h2: {
            0: function () {
              return languageContent.body.header.projects[0];
            },
            1: function () {
              return languageContent.body.header.projects[1];
            },
          },
          // h2: ["Projects", "Proyectos"],
        },
        blog: {
          h2: {
            0: function () {
              return languageContent.body.header.blog[0];
            },
            1: function () {
              return languageContent.body.header.blog[1];
            },
          },
          // h2: ["Blog", "Spanish version Blog H2"],
          p1: ["English version Blog first paragraph", "Spanish version Blog first paragraph"],
          p2: ["English version Blog second paragraph", "Spanish version Blog second paragraph"],
        },
        connectWithMe: {
          h2: {
            0: function () {
              return languageContent.body.header.connectWithMe[0];
            },
            1: function () {
              return languageContent.body.header.connectWithMe[1];
            },
          },
          // h2: ["Connect with Me", "Contáctame"],
        },
      },
      footer: ["English version", "Spanish version"],
    },
  };

  // Toggle between Spanish (1) and English (0).
  languageValue = languageValue == 1 ? 0 : 1;

  // ASSIGN TEXT BASED ON THE LANGUAGE VALUE
  // *** html tag ***
  document.getElementById("html").setAttribute("lang", languageContent.html[languageValue]);

  // *** header ***

  // *** mobile header ***
  const mobileLanguageButton = document.getElementsByClassName("mobileHeaderButtons")[0];
  mobileLanguageButton.innerHTML = languageContent.body.header.idioma[languageValue];

  // *** For accessability ***
  mobileLanguageButton["ariaPressed"] == "false" ? mobileLanguageButton.setAttribute("aria-pressed", "true") : mobileLanguageButton.setAttribute("aria-pressed", "false");

  for (let index = 0; index < document.getElementsByClassName("menu_button").length; index++) {
    // console.log(document.getElementsByClassName("menu_button")[index]);
    // console.log(Object.keys(languageContent.body.header)[index]);
    document.getElementsByClassName("menu_button")[index].innerHTML = languageContent.body.header[Object.keys(languageContent.body.header)[index + 1]][languageValue];
  }

  // *** desktop header ***
  const desktopLanguageButton = document.getElementsByClassName("desktopHeaderButtons")[0];
  desktopLanguageButton.innerHTML = languageContent.body.header.idioma[languageValue];

  // *** For accessability ***
  desktopLanguageButton["ariaPressed"] == "false" ? desktopLanguageButton.setAttribute("aria-pressed", "true") : desktopLanguageButton.setAttribute("aria-pressed", "false");

  for (let index = 1; index < document.getElementsByClassName("desktopHeaderButtons").length - 1; index++) {
    // console.log(document.getElementsByClassName("desktopHeaderButtons")[index]);
    // console.log(Object.keys(languageContent.body.header)[index]);
    document.getElementsByClassName("desktopHeaderButtons")[index + 1].innerHTML = languageContent.body.header[Object.keys(languageContent.body.header)[index]][languageValue];
  }

  // *** title tag ***
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
  // // // console.log("h2Array[0]:", h2Array[0]);
  // // console.log("h2Array[1]['english']():", h2Array[1]["english"]());
  // // console.log("h2Array[1]['spanish']():", h2Array[1]["spanish"]());
  // console.log("pArray:", pArray);

  // *** h2 tag ***
  for (let index = 0; index < document.getElementsByTagName("h2").length; index++) {
    // console.log(typeof h2Array[index][languageValue] === "string");
    if (typeof h2Array[index][languageValue] === "string") document.getElementsByTagName("h2")[index].innerHTML = h2Array[index][languageValue];
    else document.getElementsByTagName("h2")[index].innerHTML = h2Array[index][languageValue]();
  }

  // *** p tag ***
  for (let index = 0; index < document.getElementsByClassName("section_p").length; index++) {
    document.getElementsByClassName("section_p")[index].innerHTML = pArray[index][languageValue];
  }
};

// **************************************************
//                  For the translation
// **************************************************
