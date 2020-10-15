// for header
class Header extends HTMLElement{
    connectedCallback() {
        this.innerHTML=`
                            <header>
                                    <div id="left">
                                        <div>Jamie Bort</div>
                                    </div>
                                    <div id="right">
                                        <button><a href="./index.html">Bio</a></button>
                                        <button><a href="./blog.html">Blog</a></button>
                                        <button><a href="./index.html">Projects</a></button>
                                        <button><a href="./index.html">Fun Stuff</a></button>
                                        <button><a href="./index.html">Contact Form</a></button>
                                    </div>
                                </header>
                            `;
                        }
                    }

// for footer
class Footer extends HTMLElement{
    connectedCallback() {
        this.innerHTML=`
                            <footer id="footer"><span>Copyright info</span></footer>
                        `;
                    }
                }

// last lines
customElements.define('header-web-component', Header);
customElements.define('footer-web-component', Footer);