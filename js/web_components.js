// for header
class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav>
                <div id="left">
                    <a class="head_a" href="../html/index.html#title">Jamie Bort</a>
                </div>
                <div id="right">
                    <a class="head_a"  href="./index.html#bio">Bio</a>
    `            // below is commented out because the Blog is not ready to show to the public.
                // <a class="head_a"  href="./blog.html#blog">Blog</a></button>
                +`
                    <a class="head_a"  href="./index.html#projects">Projects</a>
                        `+
                // below is commented out because the Resources is not ready to show to the public.
                // <a class="head_a"  href="./resources.html">Resources</a>

                // below is commented out because the Fun Stuff is not ready to show to the public.
                // <a class="head_a"  href="./fun_stuff.html">Fun Stuff</a>
                
                // below is commented out because the Resume page is not ready to show to the public.
                // <a class="head_a"  href="./resume.html">Resume </a>

                // below is commented out because the Talks page is not ready to show to the public.
                // <a class="head_a"  href="./talks.html">Resume </a>
                `
                   <a class="head_a"  href="./index.html#connect_with_me">Connect with me</a>
                </div>
            </nav>
        </header>
`;
    }
}

// for footer
class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
            <span id="copyright">This should give the copyright date.</span>
    </footer>
                        `;
    }
}

// for blog entries
class BlogEntry extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                            <h1 id="name"></h1>
                            <p id="date"></p>
                            <div>
                                <p>this is my blog entry</p>
                            </div>
                        `;
    }
}

// last lines
customElements.define('header-web-component', Header);
customElements.define('footer-web-component', Footer);
customElements.define('blog-entry-web-component', BlogEntry);


// For the copyright
var copyright = document.getElementById('copyright');
copyright.innerHTML = `&copy` + new Date().getFullYear();
// var date = new Date()
// document.write(d.getFullYear())
// var fullYearDate = date.getFullYear()
// copyright.innerHTML=`&copy` + fullYearDate