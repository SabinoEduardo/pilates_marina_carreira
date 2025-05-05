class Nav extends HTMLElement {
    constructor (){
        super();
    }

    connectedCallback(){
        this.innerHTML = 
            `
            <nav class="nav">
                <div class="nav-links">
                    <a href="about.html" class="link">Sobre</a>
                    <a href="services.html" class="link">Serviços</a>
                    <a href="articles.html" class="link">Artigos</a>
                </div>
            </nav>
            `
    }
}

customElements.define('nav-component', Nav)


