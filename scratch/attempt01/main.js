// ./main.js

// **************************************************
//                  for the navigation
// **************************************************

// const leftHeaderButton = () => (window.location = "#top");

const leftHeaderButton = () => {
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
  menu.style.display === "none"
    ? (menu.style.display = "block")
    : (menu.style.display = "none");
};

const closeNavMenu = () =>
  (document.getElementById("menu").style.display = "none");

// Add event listener to page.
// why false? --> "A boolean value indicating that the listener should be invoked at most once after being added.
// If true, the listener would be automatically removed when invoked. If not specified, defaults to false."
document
  .getElementById("content")
  .addEventListener("click", closeNavMenu, false);

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
