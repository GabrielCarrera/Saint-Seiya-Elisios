// ABERTURA E FECHAMENTO DO MENU LATERAL //
function closenav() {
    document.getElementById("mysidebar").style.width = "0";
    document.getElementById("box_anime").style.marginLeft = "12%";
    document.getElementById("box_manga").style.marginLeft = "12%";
    document.getElementById("box_intro").style.marginLeft = "12%";
}

function opennav() {
    document.getElementById("mysidebar").style.width = "15%";
    document.getElementById("box_anime").style.marginLeft = "17%";
    document.getElementById("box_manga").style.marginLeft = "17%";
    document.getElementById("box_intro").style.marginLeft = "17%";
}

function escolha(){

        if(tipo_conteudo.value == '1'){
            box_intro.style.display = 'none';
            box_manga.style.display = 'none';
            box_anime.style.display = 'block';
        } else if (tipo_conteudo.value == '2'){
            box_intro.style.display = 'none';
            box_manga.style.display = 'block';
            box_anime.style.display = 'none';
        } else {
            alert ('Por favor, escolha uma opção válida!')
            box_intro.style.display = 'block';
            box_manga.style.display = 'none';
            box_anime.style.display = 'none';
        }

}