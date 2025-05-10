var list_text = [
    "Aulas personalizadas com foco em alívio de dores,<br>melhora da postura e qualidade de vida",
    'Sessões planejadas para atender suas necessidades<br>com acolhimento e resultados reais' 
];

var index_list = 0;


var current_text = document.getElementById("invite-paragraph")
current_text.innerHTML = list_text[index_list]

function changeText(){
    current_text.innerHTML= list_text[index_list++ % list_text.length];
}

setInterval(changeText, 3500)
