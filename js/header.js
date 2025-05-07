class Header extends HTMLElement {
    constructor (){
        super();
    }

    connectedCallback(){
        this.innerHTML = 
            `
            <header class="header">
                <a href="index.html" class="link">
                    <img src="../img/logo.png" alt="logomarca">
                </a> 
            </header>   
            `
    }
}

customElements.define('header-component', Header)
