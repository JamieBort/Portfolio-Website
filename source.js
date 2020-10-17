// for header
class Header extends HTMLElement{
    connectedCallback() {
        this.innerHTML=`
        <div class="header">
            <div id="header-cont">
                <div id="left">
                    <p><a href="./index.html#welcome">Jamie Bort</a></p>
                </div>
                <div id="right">
                    <button><a href="./index.html#bio">Bio</a></button>
                    <button><a href="./blog.html#blog">Blog</a></button>
                    <button><a href="./index.html#projects">Projects</a></button>
                    <button><a href="./index.html#resources">Resources</a></button>
                    `
                    // <button><a href="./resources.html">Resources</a></button>
                    +`
                    <button><a href="./index.html#fun_stuff">Fun Stuff</a></button>
                    <button><a href="./index.html#connect_with_me">Connect with me</a></button>
                </div>
            </div>
        </div>
                            `;
                        }
                    }

// for footer
class Footer extends HTMLElement{
    connectedCallback() {
        this.innerHTML=`
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
copyright.innerHTML=`&copy` + new Date().getFullYear();
// var date = new Date()
// document.write(d.getFullYear())
// var fullYearDate = date.getFullYear()
// copyright.innerHTML=`&copy` + fullYearDate