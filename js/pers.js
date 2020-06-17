function closenav() {
    document.getElementById("mysidebar").style.width = "0";
}

function opennav() {
    document.getElementById("mysidebar").style.width = "15%";
}

function escolha() {
    let selecao = classe_cav.value;
    let bronze = document.querySelectorAll('.bronze');
    let prata = document.querySelectorAll('.prata');
    let ouro = document.querySelectorAll('.ouro');
    let outros = document.querySelectorAll('.outros');
    let todos = document.querySelectorAll('.todos');


    // CAVALEIROS BRONZE
    if (selecao == 'c_bronze') {
        for (var i = 0; i < bronze.length && i < prata.length && i < ouro.length && i < outros.length; i++) {
            bronze[i].style.display = "block"
            prata[i].style.display = "none"
            ouro[i].style.display = "none"
            outros[i].style.display = "none"
        }
    } else {
        for (var i = 0; i < bronze.length; i++) {
            bronze[i].style.display = "none"
        }
    }

    // CAVALEIROS PRATA
    if (selecao == 'c_prata') {
        for (var i = 0; i < bronze.length && i < prata.length && i < ouro.length && i < outros.length; i++) {
            prata[i].style.display = "block"
            bronze[i].style.display = "none"
            ouro[i].style.display = "none"
            outros[i].style.display = "none"
        }
    } else {
        for (var i = 0; i < prata.length; i++) {
            prata[i].style.display = "none"
        }
    }

    // CAVALEIROS OURO
    if (selecao == 'c_ouro') {
        for (var i = 0; i < bronze.length && i < prata.length && i < ouro.length && i < outros.length ; i++) {
            ouro[i].style.display = "block"
            prata[i].style.display = "none"
            bronze[i].style.display = "none"
            outros[i].style.display = "none"
        }
    } else {
        for (var i = 0; i < ouro.length; i++) {
            ouro[i].style.display = "none"

        }
    }

    // CAVALEIROS OUTROS
    if (selecao == 'c_outros') {
        for (var i = 0; i < bronze.length && i < prata.length && i < ouro.length && i < outros.length; i++) {
            outros[i].style.display = "block"
            prata[i].style.display = "none"
            ouro[i].style.display = "none"
            bronze[i].style.display = "none"
        }

    } else {
        for (var i = 0; i < outro.length; i++) {
            outros[i].style.display = "none"
        }
    }

    // TODOS CAVALEIROS
    if (selecao == 'c_todos') {
        for (var i = 0; i < bronze.length && i < prata.length && i < ouro.length && i < outros.length; i++) {
            outros[i].style.display = "block"
            prata[i].style.display = "block"
            ouro[i].style.display = "block"
            bronze[i].style.display = "block"
        }
    }
}