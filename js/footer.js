class Footer extends HTMLElement {
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
                <footer class="footer">

                    <div class="links-rapidos">
                        <h3>Links Rápidos</h3>
                        <ul class="list-links-quickly">
                            <a href="index.html">Home</a>
                            <a href="templates/about.html">Sobre</a>
                            <a href="templates/services.html">Serviços</a>
                            <a href="templates/articles.html">Artigos</a>  
                            <a href="templates/depoimentos.html">Depoimentos</a> 
                        </ul>
                        <a href="https://www.instagram.com/pilatesmarinacarreira/" target="_blank">
                            <img src="img/icone_instagram.png" alt="icone-instagram">
                        </a>
                        <a href="https://api.whatsapp.com/send/?phone=5531993359110&text&type=phone_number&app_absent=0" target="_blank">
                            <img src="img/whatsapp.png" alt="icone-whatsapp">
                        </a>
                        
                    </div>

                    <div class="endereco">
                        <h3>Endereço</h3>
                        <p>Avenida Aggeo Pio Sobrinho, 261, Sala 407 Bairro Buritis, Belo Horizonte - MG</p>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.787084878894!2d-43.97981332388414!3d-19.975454439727375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6bd7e76e2984d%3A0x3db800dbbc9375b7!2sAv.%20Aggeo%20Pio%20Sobrinho%2C%20261%20-%20Buritis%2C%20Belo%20Horizonte%20-%20MG%2C%2030575-834!5e0!3m2!1spt-BR!2sbr!4v1746057323102!5m2!1spt-BR!2sbr" width="800" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                <div class="copywriter">
                    <p>Copyright © 2025 Pilates Marina Carreira. Todos os direitos reservados.</p>
                    <p class="dev">Desenvolvido por Sabino Afonso<br>afonsos@yahoo.com</p>
                </div>
                
                </footer>
                `

        } else {

            this.innerHTML = 
                `
                <footer class="footer">
                    <div class="links-rapidos">
                        <h3>Links Rápidos</h3>
                        <ul class="list-links-quickly">
                            <a href="../index.html">Home</a>
                            <a href="about.html">Sobre</a>
                            <a href="services.html">Serviços</a>
                            <a href="articles.html">Artigos</a> 
                            <a href="depoimentos.html">Depoimentos</a>  
                        </ul>

                        <a href="https://www.instagram.com/pilatesmarinacarreira/" target="_blank">
                            <img src="../img/icone_instagram.png" alt="icone-instagram">
                        </a>

                        <a href="https://api.whatsapp.com/send/?phone=5531993359110&text&type=phone_number&app_absent=0" target="_blank">
                            <img src="../img/whatsapp.png" alt="icone-whatsapp">
                        </a>   
                    </div>

                    <div class="endereco">
                        <h3>Endereço</h3>
                        <p>Avenida Aggeo Pio Sobrinho, 261, Sala 407 Bairro Buritis, Belo Horizonte - MG</p>

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.787084878894!2d-43.97981332388414!3d-19.975454439727375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6bd7e76e2984d%3A0x3db800dbbc9375b7!2sAv.%20Aggeo%20Pio%20Sobrinho%2C%20261%20-%20Buritis%2C%20Belo%20Horizonte%20-%20MG%2C%2030575-834!5e0!3m2!1spt-BR!2sbr!4v1746057323102!5m2!1spt-BR!2sbr" width="800" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <div class="copywriter">
                        <p>Copyright © 2025 Pilates Marina Carreira. Todos os direitos reservados.</p>
                        <p class="dev">Desenvolvido por Sabino Afonso<br>afonsos@yahoo.com</p>
                    </div>

                </footer>
                `
        }
        
    }
}



customElements.define('footer-component', Footer)