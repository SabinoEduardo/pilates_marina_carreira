class Header extends HTMLElement {
    constructor (){
        super();
    }

    connectedCallback(){
        
        var caminho = window.location.pathname
        var index_page = "index.html"

        if (caminho.includes(index_page)){
            //alert(caminho)

            this.innerHTML = 
            `
            <header class="header" id="header">
                <button  onclick="toogleSidebar()" class="btn-icon-header">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                </button>

                <a href="index.html" class="link">
                    <img src="img/logo.png" alt="logomarca">
                </a> 
            </header>   
            `

        } else {

            this.innerHTML = 
                `
                <header class="header" id="header">

                    <button onclick="toogleSidebar()" class="btn-icon-header">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </button>

                    <a href="../index.html" class="link">
                        <img src="../img/logo.png" alt="logomarca">
                    </a> 
                </header>   
                `
        }
        
    }

}

customElements.define('header-component', Header)
