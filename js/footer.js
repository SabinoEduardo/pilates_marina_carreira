getComponentFooter();

// Pegando o atributo footer no html
function getComponentFooter(){
    var footer_ = document.getElementsByClassName('body');
    
    if (footer_) {
        createFooter(footer_);
    }
}


// Criando elemento Footer
function createFooter(footer_){
    for (const h of footer_) {

        // Criando o Footer
        var footer = document.createElement('footer');

        var div1_ = createDiv1_Footer();
        var div2_ = createDiv2_Footer();
        var div3_ = createDiv3_Footer();

        footer.appendChild(div1_);
        footer.appendChild(div2_);
        footer.appendChild(div3_);
        h.appendChild(footer); 
    }
}


// Criando uma div1 (links rápidos e contatos) para o footer
function createDiv1_Footer(){
    var div1 = document.createElement('div');

    var links_ = createDiv1_1_Footer()
    var contact = createDiv2_1_Footer()

    div1.appendChild(links_)
    div1.appendChild(contact)

    return div1

}


// Criando a div1_1 - Links rápidos
function createDiv1_1_Footer(){

    // Links rápidos
    var div1_1 = document.createElement('div')

    var h3_div1_1 = document.createElement('h3');
    var ul_div1_1 = document.createElement('ul');

    var li1_ul_div1_1 = document.createElement('li');
    var a_li1_ul_div1_1 = document.createElement('span');

    var li2_ul_div1_1 = document.createElement('li');
    var a_li2_ul_div1_1 = document.createElement('span');
    
    var li3_ul_div1_1 = document.createElement('li');
    var a_li3_ul_div1_1 = document.createElement('span');

    var li4_ul_div1_1 = document.createElement('li');
    var a_li4_ul_div1_1 = document.createElement('span');
    
    h3_div1_1.innerHTML = 'Links Rápidos';

    a_li1_ul_div1_1.innerHTML = '<a href="home.html">Home</a>'
    li1_ul_div1_1.appendChild(a_li1_ul_div1_1)

    a_li2_ul_div1_1.innerHTML = '<a href="about.html">Sobre</a>'
    li2_ul_div1_1.appendChild(a_li2_ul_div1_1)

    a_li3_ul_div1_1.innerHTML = '<a href="services.html">Serviços</a>'
    li3_ul_div1_1.appendChild(a_li3_ul_div1_1)

    a_li4_ul_div1_1.innerHTML ='<a href="articles.html">Artigos</a>'
    li4_ul_div1_1.appendChild(a_li4_ul_div1_1)


    ul_div1_1.appendChild(li1_ul_div1_1);
    ul_div1_1.appendChild(li2_ul_div1_1);
    ul_div1_1.appendChild(li3_ul_div1_1);
    ul_div1_1.appendChild(li4_ul_div1_1);

    div1_1.appendChild(h3_div1_1);
    div1_1.appendChild(ul_div1_1);

    return div1_1

}

// Criando a div2_1 - Contactos
function createDiv2_1_Footer(){

    var div2_1  = document.createElement('div');
    var h3_div2_1 = document.createElement('h3');
    var ul_div2_1 = document.createElement('ul');

    var li1_ul_div2_1 = document.createElement('li');

    var li2_ul_div2_1 = document.createElement('li');
    var a_li2_ul_div2_1 = document.createElement('span');


    h3_div2_1.innerHTML = 'Contacto';
    li1_ul_div2_1.innerHTML = '+55 31 993623898';
    a_li2_ul_div2_1.innerHTML = '<a href="https://www.instagram.com/pilatesmarinacarreira/#" target="_blank">icone do instagram</a>'
    li2_ul_div2_1.appendChild(a_li2_ul_div2_1)

    ul_div2_1.appendChild(li1_ul_div2_1)
    ul_div2_1.appendChild(li2_ul_div2_1)

    div2_1.appendChild(h3_div2_1)
    div2_1.appendChild(ul_div2_1)

    return div2_1
}


// Criando a div2- Endereço e mapa
function createDiv2_Footer(){

    var div2 = document.createElement('div');
    var p_div2 = document.createElement('p');
    var iframe_div2 = document.createElement('div');

    p_div2.innerHTML = 'Endereço: Avenida Ageo Pio Sobrinho, 261 - Sala 407, Bairro Buritis, Belo Horizonte - MG';
    iframe_div2.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.787084878894!2d-43.97981332388414!3d-19.975454439727375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6bd7e76e2984d%3A0x3db800dbbc9375b7!2sAv.%20Aggeo%20Pio%20Sobrinho%2C%20261%20-%20Buritis%2C%20Belo%20Horizonte%20-%20MG%2C%2030575-834!5e0!3m2!1spt-BR!2sbr!4v1746057323102!5m2!1spt-BR!2sbr" width="400" height="200" style="border:0;" allowfullscreen="" loading="eager"></iframe>';
    
    div2.appendChild(p_div2);
    div2.appendChild(iframe_div2);

    return div2
}


// Criando a div3 - Copywriter
function createDiv3_Footer(){
    var div3 = document.createElement('div');
    var p1_div3 = document.createElement('p');
    var p2_div3= document.createElement('p');

    p1_div3.innerHTML = 'Copyright © 2025 Pilates Marina Carreira. Todos os direitos reservados.';
    p2_div3.innerHTML =  'Desenvolvido por Sabino Afonso';

    div3.appendChild(p1_div3);
    div3.appendChild(p2_div3);
      
    return div3
}

