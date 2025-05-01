getComponentNavBar();


function getComponentNavBar(){
    var body_ = document.getElementsByClassName('body');
    
    if (body_) {
        createNav(body_);
    }

}


function createNav(body_){
    for (const b of body_) {
        var nav = document.createElement('nav');
        var ul_nav = document.createElement('ul');

        var li1_ul_nav = document.createElement('li');
        var a_li1_ul_nav = document.createElement('span')

        var li2_ul_nav = document.createElement('li');
        var a_li2_ul_nav = document.createElement('span')

        var li3_ul_nav = document.createElement('li');
        var a_li3_ul_nav = document.createElement('span')

        var li4_ul_nav = document.createElement('li');
        var a_li4_ul_nav = document.createElement('span')

        
        a_li1_ul_nav.innerHTML = '<a href="about.html">Sobre</a>'
        a_li2_ul_nav.innerHTML = '<a href="services.html">Serviços</a>'
        a_li3_ul_nav.innerHTML = '<a href="articles.html">Atigos</a>'
        a_li4_ul_nav.innerHTML = '<a href="contacts.html">Contacto</a>'

        li1_ul_nav.appendChild(a_li1_ul_nav)
        li2_ul_nav.appendChild(a_li2_ul_nav)
        li3_ul_nav.appendChild(a_li3_ul_nav)
        li4_ul_nav.appendChild(a_li4_ul_nav)

        ul_nav.appendChild(li1_ul_nav)
        ul_nav.appendChild(li2_ul_nav)
        ul_nav.appendChild(li3_ul_nav)
        ul_nav.appendChild(li4_ul_nav)

        nav.appendChild(ul_nav)
        b.appendChild(nav)
    }
    
}
