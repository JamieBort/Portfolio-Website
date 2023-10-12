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
        <button class="mobileHeaderButtons" id="headerButtonLeft" onclick="toggle()">Español</button>
        <button class="mobileHeaderButtons" id="headerButtonCenter" onclick="leftHeaderButton()">Jamie Bort</button>
        <button class="mobileHeaderButtons" id="headerButtonRight" onclick="rightHeaderButton()">Nav</button>
      </div>
      <nav id="menu" style="display: none">
        <button class="menu_button" onclick="jumpToSection('bio')">Bio</button>
        <button class="menu_button" onclick="jumpToSection('projects')">Projects</button>
        <button id="blogButton" class="menu_button" onclick="jumpToSection('blog')">Blog</button>
        <button class="menu_button" onclick="jumpToSection('connectWithMe')">Connect With Me</button>
      </nav>
    </header>

    <!-- TODO: Consider making all the desktop navigation buttons equal in width to the widest one. -->
    <header id="desktopHeader">
      <button class="desktopHeaderButtons" onclick="toggle()">Español</button>
      <button class="desktopHeaderButtons" onclick="leftHeaderButton()">Jamie Bort</button>
      <button class="desktopHeaderButtons" onclick="jumpToSection('bio')">Bio</button>
      <button class="desktopHeaderButtons" onclick="jumpToSection('projects')">Projects</button>
      <button id="blogButton" class="desktopHeaderButtons" onclick="jumpToSection('blog')">Blog</button>
      <button class="desktopHeaderButtons" onclick="jumpToSection('connectWithMe')">Connect With Me</button>
    </header>
    `;
    // this.style.color = "red";
  }
}
customElements.define("navigation-element", Navigation);
