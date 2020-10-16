// for header
class Header extends HTMLElement{
    connectedCallback() {
        this.innerHTML=`
        <div class="header">
            <div id="header-cont">
                <div id="left">
                    <p>Name</p>
                </div>
                <div id="right">
                    <button>Bio</button>
                    <button>Blog</button>
                    <button>Projects</button>
                    <button>Resources</button>
                    <button>Fun Stuff</button>
                    <button>Contact Form</button>
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
        Footer
    </div>
                        `;
                    }
                }

// last lines
customElements.define('header-web-component', Header);
customElements.define('footer-web-component', Footer);