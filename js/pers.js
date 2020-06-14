function closenav() {
    document.getElementById("mysidebar").style.width = "0";
}

function opennav() {
    document.getElementById("mysidebar").style.width = "15%";
}

function escolha(){
    let selecao = classe_cav.value;
    
    if (selecao == '1'){ 
        document.getElementById("bronze").style.display = "block";
        document.getElementById("prata").style.display = "none";
        document.getElementById("ouro").style.display = "none";
        document.getElementById("outros").style.display = "none";
    } 
    else if (selecao == '2'){
        document.getElementById("bronze").style.display = "none";
        document.getElementById("prata").style.display = "block";
        document.getElementById("ouro").style.display = "none";
        document.getElementById("outros").style.display = "none";
    }else if (selecao =='3'){
        document.getElementById("bronze").style.display = "none";
        document.getElementById("prata").style.display = "none";
        document.getElementById("ouro").style.display = "block";
        document.getElementById("outros").style.display = "none";
    }else if (selecao == '4'){
        document.getElementById("bronze").style.display = "none";
        document.getElementById("prata").style.display = "none";
        document.getElementById("ouro").style.display = "none";
        document.getElementById("outros").style.display = "block";
    }else if(selecao == '5'){
        document.getElementById("bronze").style.display = "block";
        document.getElementById("prata").style.display = "block";
        document.getElementById("ouro").style.display = "block";
        document.getElementById("outros").style.display = "block";
    } else {
        alert('Escolha uma classe válida!')
    }

}