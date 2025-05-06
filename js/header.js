class Header extends HTMLElement {
    constructor (){
        super();
    }

    connectedCallback(){
        this.innerHTML = 
            `
            <header class="header">
                <a href="home.html" class="link">
                    <img src="../files/logo.png" alt="logomarca">
                </a> 
            </header>   
            `
    }
}

customElements.define('header-component', Header)
