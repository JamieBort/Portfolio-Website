// for header
class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="header">
            <div id="header-cont">
                <div id="left">
                    <button class="head_button">
                        <a class="head_a" href="../html/index.html#title">Jamie Bort</a>
                    </button>
                </div>
                <div id="right">
                    <button class="head_button">
                        <a class="head_a"  href="./index.html#bio">Bio</a>
                    </button>
                    `
            // below is commented out because the Blog is not ready to show to the public.
            // <button class="head_button"><a class="head_a"  href="./blog.html#blog">Blog</a></button>
            + `
                    
                    <button class="head_button">
                        <a class="head_a"  href="./index.html#projects">Projects</a>
                    </button>
                    `
            // below is commented out because the Resources is not ready to show to the public.
            // <button class="head_button"><a class="head_a"  href="./resources.html">Resources</a></button>
            + `
                    `
            // below is commented out because the Fun Stuff is not ready to show to the public.
            // <button class="head_button"><a class="head_a"  href="./fun_stuff.html">Fun Stuff</a></button>
            + `
                    `
            // below is commented out because the Resume page is not ready to show to the public.
            // <button class="head_button">
            // <a class="head_a"  href="./resume.html">Resume </a>
            // </button>
            + `
                    
                    <button class="head_button">
                        <a class="head_a"  href="./index.html#connect_with_me">Connect with me</a>
                    </button>
                </div>
            </div>
        </div>
                            `;
    }
}

// for footer
class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="footer">
            <span id="copyright">This should give the copyright date.</span>
    </div>
                        `;
    }
}

// last lines
customElements.define('header-web-component', Header);
customElements.define('footer-web-component', Footer);


// For the copyright
var copyright = document.getElementById('copyright');
copyright.innerHTML = `&copy` + new Date().getFullYear();
// var date = new Date()
// document.write(d.getFullYear())
// var fullYearDate = date.getFullYear()
// copyright.innerHTML=`&copy` + fullYearDate