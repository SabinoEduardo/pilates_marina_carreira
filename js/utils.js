getComponentHeader();
getComponentFooter();


function getComponentHeader(){
    var header_ = document.getElementsByClassName('header');
    
    if (header_) {
        createHeader(header_);
    }

}


function createHeader(header_){
    for (const h of header_) {
        var header = document.createElement('header');
        var img = document.createElement('image');
        img.innerHTML = '<img src="../files/logo_studio.jpeg" alt="Descrição da imagem">';
        header.appendChild(img);
        h.appendChild(header); 
    }
    
}




function getComponentFooter(){
    var footer_ = document.getElementsByClassName('footer');

    
    if (footer_) {
        createFooter(footer_);
    }

}


function createFooter(footer_){
    for (const h of footer_) {

        // Criando o Footer
        var footer = document.createElement('footer');

        // Implementando a div 1
        var div1 = document.createElement('div');
        var p_div1 = document.createElement('p');
        var iframe_div1 = document.createElement('div');

        p_div1.innerHTML = 'Endereço: Avenida Ageo Pio Sobrinho, 261 - Sala 407<br>Bairro Buritis<br>Belo Horizonte - MG';
        iframe_div1.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.787084878894!2d-43.97981332388414!3d-19.975454439727375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6bd7e76e2984d%3A0x3db800dbbc9375b7!2sAv.%20Aggeo%20Pio%20Sobrinho%2C%20261%20-%20Buritis%2C%20Belo%20Horizonte%20-%20MG%2C%2030575-834!5e0!3m2!1spt-BR!2sbr!4v1746057323102!5m2!1spt-BR!2sbr" width="400" height="200" style="border:0;" allowfullscreen="" loading="eager"></iframe>';
        
        div1.appendChild(p_div1);
        div1.appendChild(iframe_div1);


        // Criando a div 2
        var div2 = document.createElement('div');


        // Implementação da peimeira div da div 2 - Links rápidos
        var div2_1 = document.createElement('div');

        var h3_div2_1 = document.createElement('h3');
        var ul_div2_1 = document.createElement('ul');

        var li1_ul_div2_1 = document.createElement('li');
        var a_li1_ul_div2_1 = document.createElement('span');

        var li2_ul_div2_1 = document.createElement('li');
        var a_li2_ul_div2_1 = document.createElement('span');
        
        var li3_ul_div2_1 = document.createElement('li');
        var a_li3_ul_div2_1 = document.createElement('span');

        var li4_ul_div2_1 = document.createElement('li');
        var a_li4_ul_div2_1 = document.createElement('span');
       
        h3_div2_1.innerHTML = 'Links Rápidos';

        a_li1_ul_div2_1.innerHTML = '<a href="index.html">Home</a>'
        li1_ul_div2_1.appendChild(a_li1_ul_div2_1)

        a_li2_ul_div2_1.innerHTML = '<a href="about.html">Sobre</a>'
        li2_ul_div2_1.appendChild(a_li2_ul_div2_1)

        a_li3_ul_div2_1.innerHTML = '<a href="services.html">Serviços</a>'
        li3_ul_div2_1.appendChild(a_li3_ul_div2_1)

        a_li4_ul_div2_1.innerHTML ='<a href="contacts.html">Artigos</a>'
        li4_ul_div2_1.appendChild(a_li4_ul_div2_1)


        ul_div2_1.appendChild(li1_ul_div2_1);
        ul_div2_1.appendChild(li2_ul_div2_1);
        ul_div2_1.appendChild(li3_ul_div2_1);
        ul_div2_1.appendChild(li4_ul_div2_1);

        div2_1.appendChild(h3_div2_1);
        div2_1.appendChild(ul_div2_1);

        div2.appendChild(div2_1);


        // Implementação da segunda div do div 2 - Contacto
        var div2_2  = document.createElement('div');
        var h3_div2_2 = document.createElement('h3');
        var ul_div2_2 = document.createElement('ul');

        var li1_ul_div2_2 = document.createElement('li');

        var li2_ul_div2_2 = document.createElement('li');
        var a_li2_ul_div2_2 = document.createElement('span');


        h3_div2_2.innerHTML = 'Contacto';
        li1_ul_div2_2.innerHTML = '+55 31 993623898';
        a_li2_ul_div2_2.innerHTML = '<a href="https://www.instagram.com/pilatesmarinacarreira/#" target="_blank">icone do instagram</a>'
        li2_ul_div2_2.appendChild(a_li2_ul_div2_2)

        ul_div2_2.appendChild(li1_ul_div2_2)
        ul_div2_2.appendChild(li2_ul_div2_2)

        div2_2.appendChild(h3_div2_2)
        div2_2.appendChild(ul_div2_2)

        div2.appendChild(div2_2)


        // Implementação da div3 - copywriter

        var div3 = document.createElement('div');
        var p1_div3 = document.createElement('p');
        var p2_div3= document.createElement('p');

        p1_div3.innerHTML = 'Copyright © 2025 Pilates Marina Carreira. Todos os direitos reservados.'
        p2_div3.innerHTML =  'Desenvolvido por Sabino Afonso'

        div3.appendChild(p1_div3)
        div3.appendChild(p2_div3)
      

        // Adicionando todos os componetentes no footer

        footer.appendChild(div1);
        footer.appendChild(div2)
        footer.appendChild(div3)
        h.appendChild(footer); 
    }
    
}
