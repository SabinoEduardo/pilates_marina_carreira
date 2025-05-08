class Nav extends HTMLElement {
    constructor (){
        super();
    }

    connectedCallback(){

        var caminho = window.location.pathname
        var index_page = "index.html"

        alert(caminho)

        if (caminho.includes(index_page) || caminho=="/") {

            this.innerHTML = 
            `
            <nav class="nav">
                <div class="nav-links">
                    <a href="templates/about.html" class="nav-link">Sobre</a>
                    <a href="templates/services.html" class="nav-link">Serviços</a>
                    <a href="templates/articles.html" class="nav-link">Artigos</a>
                </div>
            </nav>
            `
        } else {

            this.innerHTML = 
            `
            <nav class="nav">
                <div class="nav-links">
                    <a href="about.html" class="nav-link">Sobre</a>
                    <a href="services.html" class="nav-link">Serviços</a>
                    <a href="articles.html" class="nav-link">Artigos</a>
                </div>
            </nav>
            `
        }
       
    }
}

customElements.define('nav-component', Nav)


