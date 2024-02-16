// ./js/indexOne.js

// Navigation component.

// NOTE:  The "hidden" attribute didn't work for the mobile blog button below.
//        So I'm using id="blogButton" and applying "display:none; in the css file."

class Navigation extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <link rel="stylesheet" href="./../css/styles.css">

    <header id="mobileHeader">
      <div id="mobileHeaderDiv">
        <button class="mobileHeaderButtons" id="headerButtonLeft" onclick="toggleLanguage()" aria-pressed="false">Español</button>
        <button class="mobileHeaderButtons" id="headerButtonCenter" onclick="leftHeaderButton()">Jamie Bort</button>
        <button class="mobileHeaderButtons" id="headerButtonRight" onclick="rightHeaderButton()" aria-pressed="false">Nav</button>
      </div>
      <nav id="menu" style="display: none">
        <button class="mobile_nav_button menu_button" onclick="jumpToSection('bio')">Bio</button>
        <button class="mobile_nav_button menu_button" onclick="jumpToSection('projects')">Projects</button>
        <button id="blogButton" class="mobile_nav_button menu_button" onclick="jumpToSection('blog')">Blog</button>
        <button class="mobile_nav_button menu_button" onclick="jumpToSection('connectWithMe')">Connect With Me</button>
      </nav>
    </header>

    <!-- TODO: Consider making all the desktop navigation buttons equal in width to the widest one. -->
    <!-- TODO: For accessability purposes, have the screen reader dictate "English" when English is displayed. And "Spanish" when Spanish is displayed. It currently reads the text on the button, which is the OPPOSITE of what is displayed. -->
    <header id="desktopHeader">
      <button class="desktopHeaderChildren desktopHeaderButtons" onclick="toggleLanguage()" aria-pressed="false">Español</button>
      <button class="desktopHeaderChildren desktopHeaderButtons" onclick="leftHeaderButton()">Jamie Bort</button>
      <nav class="desktopHeaderChildren">
        <button class="desktop_nav_button desktopHeaderButtons" onclick="jumpToSection('bio')">Bio</button>
        <button class="desktop_nav_button desktopHeaderButtons" onclick="jumpToSection('projects')">Projects</button>
        <button id="blogButton" class="desktop_nav_button desktopHeaderButtons" onclick="jumpToSection('blog')">Blog</button>
        <button class="desktop_nav_button desktopHeaderButtons" onclick="jumpToSection('connectWithMe')">Connect With Me</button>
      </nav>
    </header>
    `;
    // this.style.color = "red";
  }
}
customElements.define("navigation-element", Navigation);
