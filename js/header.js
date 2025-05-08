class Header extends HTMLElement {
    constructor (){
        super();
    }

    connectedCallback(){
        
        var caminho = window.location.pathname
        var index_page = "/C:/Users/bilso/site_pilates/studio_pilates/index.html"

        if (caminho==index_page){
            //alert(caminho)

            this.innerHTML = 
            `
            <header class="header">
                <a href="index.html" class="link">
                    <img src="img/logo.png" alt="logomarca">
                </a> 
            </header>   
            `

        } else {

            this.innerHTML = 
                `
                <header class="header">
                    <a href="../index.html" class="link">
                        <img src="../img/logo.png" alt="logomarca">
                    </a> 
                </header>   
                `
        }
        
    }
}

customElements.define('header-component', Header)
