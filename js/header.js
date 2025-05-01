getComponentHeader();


function getComponentHeader(){
    var header_ = document.getElementsByClassName('body');
    
    if (header_) {
        createHeader(header_);
    }

}


function createHeader(header_){
    for (const h of header_) {
        var header = document.createElement('header');
        var img = document.createElement('div');
        img.innerHTML = '<img src="../files/log2.png" alt="Descrição da imagem" width="200" height="120px">';
        header.appendChild(img);
        header.style.backgroundColor = '#5f809b';
        header.style.textAlign = 'center'
        h.appendChild(header); 
    }
    
}
