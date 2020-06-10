// ABERTURA E FECHAMENTO DO MENU LATERAL //
function closenav() {
    document.getElementById("mysidebar").style.width = "0";
    document.getElementById("padrao_box_movement").style.marginLeft = "10%";
    document.getElementById("cadastrar_box_movement").style.marginLeft = "15%";
}


function opennav() {
    document.getElementById("mysidebar").style.width = "15%";
    document.getElementById("padrao_box_movement").style.marginLeft = "17%";
    // CONFLITO QUANDO ABRO O CADASTRO, PERGUNTAR SE É POR ESTAR DANDO CONFLITO COM A MESMA TAG
    document.getElementById("cadastrar_box_movement").style.marginLeft = "25%";
}


