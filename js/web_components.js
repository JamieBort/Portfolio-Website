// for head
class Head extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="utf-8">
    `;
    }
}

// for header
class Header extends HTMLElement {
    
    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav>
                <div id="nav_left">
                    <a id="JamieBort" onClick={console.log("click")} class="head_a" href="./index.html#title">Jamie Bort</a>
                    `
            // <a class="head_a" href="../html/index.html#title">Jamie Bort</a>
            //  <a class="head_a" href="../docs/index.html#title">Jamie Bort</a>
            + `
                    </div>
                <div id="nav_right">
                    <a id="bio_link" class="head_a active"  href="./index.html#bio_section">Bio</a>
    `            // below is commented out because the Blog is not ready to show to the public.
            // <a class="head_a"  href="./blog.html#blog">Blog</a>
            + `
                    <a class="head_a"  href="./index.html#projects_section">Projects</a>
                        `+
            // below is commented out because the Resources is not ready to show to the public.
            // <a id="resources" class="head_a"  href="./resources.html">Resources</a>

            // below is commented out because the Fun Stuff is not ready to show to the public.
            // <a class="head_a"  href="./fun_stuff.html">Fun Stuff</a>

            // below is commented out because the Resume page is not ready to show to the public.
            // <a class="head_a"  href="./resume.html">Resume </a>

            // below is commented out because the Talks page is not ready to show to the public.
            // <a class="head_a"  href="./talks.html">Resume </a>
            `
                   <a class="head_a"  href="./index.html#connect_with_me_section">Connect with me</a>
                   
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

// script

class scripts extends HTMLElement {
constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const s = document.createElement('script');

    // s.textContent = 'alert("hello");';
    // s.textContent = 'console.log("hello");';
    
    var right = document.getElementById("right");
    var a = right.getElementsByClassName("head_a");
    for (var i = 0; i < a.length; i++) {
        a[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }

    var JamieBort = document.getElementById("JamieBort");
    JamieBort.addEventListener("click", function () {
        var bio_link = document.getElementById("bio_link");
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        bio_link.className += " active";
    });
    
    // var resources = document.getElementById("resources");
    //     resources.addEventListener("click", function () {
    //         var resources = document.getElementById("resources");
    //         var current = document.getElementsByClassName("active");
    //         // var current = document.getElementById("bio_link");
    //         current[0].className = current[0].className.replace(" active", "");
    //         // resources.className += " active";
    //         this.className += " active";
    //     });

shadow.appendChild(s);

  }
}

// last lines
customElements.define('head-web-component', Head);
customElements.define('header-web-component', Header);
customElements.define('footer-web-component', Footer);
customElements.define('blog-entry-web-component', BlogEntry);
customElements.define('scripts-web-component', scripts);


// For the copyright
var copyright = document.getElementById('copyright');
copyright.innerHTML = `&copy` + new Date().getFullYear();
// var date = new Date()
// document.write(d.getFullYear())
// var fullYearDate = date.getFullYear()
// copyright.innerHTML=`&copy` + fullYearDate