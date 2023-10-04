// ./js/indexOne.js

// Navigation component.

// TODO: Consider changing the default text "English" in the language toggle button to "Cambia a español"
// And the text to change it back to "Change to English"
// Or something to that effect.

class Navigation extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <link rel="stylesheet" href="./../css/styles.css">

    <header id="mobileHeader">
      <div id="mobileHeaderDiv">
        <button class="mobileHeaderButtons" id="headerButtonLeft" onclick="toggle()">English</button>
        <button class="mobileHeaderButtons" id="headerButtonCenter" onclick="leftHeaderButton()">Jamie Bort</button>
        <button class="mobileHeaderButtons" id="headerButtonRight" onclick="rightHeaderButton()">Nav</button>
      </div>
      <nav id="menu" style="display: none">
        <button class="menu_button" onclick="jumpToSection('bio')">Bio</button>
        <button class="menu_button" onclick="jumpToSection('projects')">Projects</button>
        <button class="menu_button" onclick="jumpToSection('blog')">Blog</button>
        <button class="menu_button" onclick="jumpToSection('ConnectWithMe')">Connect With Me</button>
        <button class="menu_button" onclick="jumpToSection('ConnectWithMe')">Resume</button>
      </nav>
    </header>

    <!-- TODO: make the width of the Bio and Projects buttons equal to that of the ConnectWithME button. -->
    <header id="desktopHeader">
      <button class="desktopHeaderButtons" onclick="toggle()">English</button>
      <button class="desktopHeaderButtons" onclick="leftHeaderButton()">Jamie Bort</button>
      <button class="desktopHeaderButtons" onclick="jumpToSection('bio')">Bio</button>
      <button class="desktopHeaderButtons" onclick="jumpToSection('projects')">Projects</button>
      <button class="desktopHeaderButtons" onclick="jumpToSection('blog')">Blog</button>
      <button class="desktopHeaderButtons" onclick="jumpToSection('connectWithMe')">Connect With Me</button>
      <button class="desktopHeaderButtons" onclick="jumpToSection('blog')">Resume</button>
    </header>
    `;
    // this.style.color = "red";
  }
}
customElements.define("navigation-element", Navigation);
