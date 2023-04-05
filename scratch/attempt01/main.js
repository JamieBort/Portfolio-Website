// ./main.js

const leftHeaderButton = () => (window.location = "#top");

// const leftHeaderButton = () => {
//   window.location = "#top";
//   closeNavMenu();
// };

const rightHeaderButton = () => toggleNavMenu();

const jumpToSection1 = () => {
  window.location = "#section01";
  toggleNavMenu();
};
const jumpToSection2 = () => {
  window.location = "#section02";
  toggleNavMenu();
};
const jumpToSection3 = () => {
  window.location = "#section03";
  toggleNavMenu();
};
const toggleNavMenu = () => {
  const menu = document.getElementById("menu");
  menu.style.display === "none"
    ? (menu.style.display = "block")
    : (menu.style.display = "none");
};

const closeNavMenu = () =>
  (document.getElementById("menu").style.display = "none");

// // Add event listener to page.
// const el = document.getElementById("content");
// el.addEventListener("click", closeNavMenu, false); // why false? --> "A boolean value indicating that the listener should be invoked at most once after being added. If true, the listener would be automatically removed when invoked. If not specified, defaults to false."

// Add event listener to page.
document
  .getElementById("content")
  .addEventListener("click", closeNavMenu, false); // why false? --> "A boolean value indicating that the listener should be invoked at most once after being added. If true, the listener would be automatically removed when invoked. If not specified, defaults to false."
