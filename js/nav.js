class Nav extends HTMLElement {
    constructor (){
        super();
    }

    connectedCallback(){

        var caminho = window.location.pathname
        var index_page = "index.html"

        if (caminho.includes(index_page) || caminho=="/") {

            this.innerHTML = 
            `
            <nav class="nav" id="nav">
                <div class="nav-links">
                    <button onclick="toogleSidebar()" class="btn-icon-nav">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </button>
                    
                    <a href="templates/about.html" class="nav-link">Sobre</a>
                    <a href="templates/services.html" class="nav-link">Serviços</a>
                    <a href="templates/articles.html" class="nav-link">Artigos</a>
                    <a href="templates/depoimentos.html" class="nav-link">Depoimentos</a>
                </div>
            </nav>
            `
        } else {

            this.innerHTML = 
            `
            <nav class="nav" id="nav">
                <div class="nav-links">
                    <button onclick="toogleSidebar()" class="btn-icon-nav">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </button>

                    <a href="about.html" class="nav-link">Sobre</a>
                    <a href="services.html" class="nav-link">Serviços</a>
                    <a href="articles.html" class="nav-link">Artigos</a>
                    <a href="depoimentos.html" class="nav-link">Depoimentos</a>
                </div>
            </nav>
            `
        }
       
    }

    
}

customElements.define('nav-component', Nav)


