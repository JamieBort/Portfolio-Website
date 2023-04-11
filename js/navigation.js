// ./js/indexOne.js

// Navigation component.

class Navigation extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <link rel="stylesheet" href="./../css/styles.css">

    <header id="mobileHeader">
      <div id="mobileHeaderDiv">
        <button
          id="headerButtonLeft"
          class="mobileHeaderButtons"
          onclick="leftHeaderButton()"
        >
          Jamie Bort
        </button>
        <button
          id="headerButtonRight"
          class="mobileHeaderButtons"
          onclick="rightHeaderButton()"
        >
          Nav
        </button>
      </div>
      <nav id="menu" style="display: none">
        <button class="menu_button" onclick="jumpToSection('bio')">Bio</button>
        <button class="menu_button" onclick="jumpToSection('projects')">
          Projects
        </button>
        <button class="menu_button" onclick="jumpToSection('blog')">
          Blog
        </button>
        <button class="menu_button" onclick="jumpToSection('ConnectWithMe')">
          Connect With Me
        </button>
        <button class="menu_button" onclick="jumpToSection('ConnectWithMe')">
          Resume
        </button>
      </nav>
    </header>

    <!-- TODO: make the width of the Bio and Projects buttons equal to that of the ConnectWithME button. -->
    <header id="desktopHeader">
      <button class="desktopHeaderButtons" onclick="leftHeaderButton()">
        Jamie Bort
      </button>
      <button class="desktopHeaderButtons" onclick="jumpToSection('bio')">
        Bio
      </button>
      <button class="desktopHeaderButtons" onclick="jumpToSection('projects')">
        Projects
      </button>
      <button class="desktopHeaderButtons" onclick="jumpToSection('blog')">
        Blog
      </button>
      <button
        class="desktopHeaderButtons"
        onclick="jumpToSection('connectWithMe')"
      >
        Connect With Me
      </button>
      <button class="desktopHeaderButtons" onclick="jumpToSection('blog')">
        Resume
      </button>
    </header>
    `;
    // this.style.color = "red";
  }
}
customElements.define("navigation-element", Navigation);
