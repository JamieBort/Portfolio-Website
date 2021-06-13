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
        const JamieBort_anchor="<a id='JamieBort' onClick={console.log('click')} class='nav_a' href='./index.html#title' >Jamie Bort</a>";
        // const JamieBort_anchor= "<a class='nav_a' href='../html/index.html#title'>Jamie Bort</a>";
        // const JamieBort_anchor=  "<a class='nav_a' href='../docs/index.html#title'>Jamie Bort</a>"

        const bio_anchor = "<a class='nav_a active'  href='./index.html#bio_section'>Bio</a>";
        const blog_anchor = "<a class='nav_a'  href='./blog.html#blog'>Blog</a>";
        const projects_anchor = "<a class='nav_a'  href='./index.html#projects_section'>Projects</a>";
        const resources_anchor = "<a id='resources' class='nav_a'  href='./resources.html'>Resources</a>";
        const fun_anchor = "<a class='nav_a'  href='./fun_stuff.html'>Fun Stuff</a>";
        const talks_anchor = "<a class='nav_a'  href='./talks.html'>Talks</a>";
        const connect_anchor = " <a class='nav_a'  href='./index.html#connect_with_me_section'>Connect with me</a>";

        // const resume_anchor = "<a class='nav_a'  href='./resume.html'>Resume</a>";
        const resume_anchor = "<a class='nav_a'  href='./index.html#resume_section'>Resume</a>";
        
        this.innerHTML = `
        <header>
            <nav id="nav">
                <div id="nav_left" class="nav_div">
                    ${JamieBort_anchor}
                </div>
                <div id="nav_right" class="nav_div">
                    ${bio_anchor}
                    ${projects_anchor}
                    ${connect_anchor}
                    ${resume_anchor}
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
        <footer>
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
    var nav_a = right.getElementsByClassName("nav_a");
    for (var i = 0; i < nav_a.length; i++) {
        nav_a[i].addEventListener("click", function () {
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