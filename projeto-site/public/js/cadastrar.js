function closenav() {
    document.getElementById("mysidebar").style.width = "0";
   
}
function opennav() {
    document.getElementById("mysidebar").style.width = "15%";
   
}

// FORMULARIO DA PAGINA CADASTRO // 
function SignoMudar() {
    if ((document.frmCadastro.DiaNascimentoCadastro.selectedIndex > 0) && (document.frmCadastro.MesNascimentoCadastro.selectedIndex > 0)) {
        if (((document.frmCadastro.DiaNascimentoCadastro.value >= 21) && (document.frmCadastro.MesNascimentoCadastro.value == 3)) || ((document.frmCadastro.DiaNascimentoCadastro.value <= 20) && (document.frmCadastro.MesNascimentoCadastro.value == 4))) { document.frmCadastro.SignoCadastro.value = "\u00c1ries"; }
        if (((document.frmCadastro.DiaNascimentoCadastro.value >= 21) && (document.frmCadastro.MesNascimentoCadastro.value == 4)) || ((document.frmCadastro.DiaNascimentoCadastro.value <= 20) && (document.frmCadastro.MesNascimentoCadastro.value == 5))) { document.frmCadastro.SignoCadastro.value = "Touro"; }
        if (((document.frmCadastro.DiaNascimentoCadastro.value >= 21) && (document.frmCadastro.MesNascimentoCadastro.value == 5)) || ((document.frmCadastro.DiaNascimentoCadastro.value <= 20) && (document.frmCadastro.MesNascimentoCadastro.value == 6))) { document.frmCadastro.SignoCadastro.value = "Gêmeos"; }
        if (((document.frmCadastro.DiaNascimentoCadastro.value >= 21) && (document.frmCadastro.MesNascimentoCadastro.value == 6)) || ((document.frmCadastro.DiaNascimentoCadastro.value <= 21) && (document.frmCadastro.MesNascimentoCadastro.value == 7))) { document.frmCadastro.SignoCadastro.value = "Câncer"; }
        if (((document.frmCadastro.DiaNascimentoCadastro.value >= 22) && (document.frmCadastro.MesNascimentoCadastro.value == 7)) || ((document.frmCadastro.DiaNascimentoCadastro.value <= 22) && (document.frmCadastro.MesNascimentoCadastro.value == 8))) { document.frmCadastro.SignoCadastro.value = "Leão"; }
        if (((document.frmCadastro.DiaNascimentoCadastro.value >= 23) && (document.frmCadastro.MesNascimentoCadastro.value == 8)) || ((document.frmCadastro.DiaNascimentoCadastro.value <= 22) && (document.frmCadastro.MesNascimentoCadastro.value == 9))) { document.frmCadastro.SignoCadastro.value = "Virgem"; }
        if (((document.frmCadastro.DiaNascimentoCadastro.value >= 23) && (document.frmCadastro.MesNascimentoCadastro.value == 9)) || ((document.frmCadastro.DiaNascimentoCadastro.value <= 22) && (document.frmCadastro.MesNascimentoCadastro.value == 10))) { document.frmCadastro.SignoCadastro.value = "Libra"; }
        if (((document.frmCadastro.DiaNascimentoCadastro.value >= 23) && (document.frmCadastro.MesNascimentoCadastro.value == 10)) || ((document.frmCadastro.DiaNascimentoCadastro.value <= 21) && (document.frmCadastro.MesNascimentoCadastro.value == 11))) { document.frmCadastro.SignoCadastro.value = "Escorpião"; }
        if (((document.frmCadastro.DiaNascimentoCadastro.value >= 22) && (document.frmCadastro.MesNascimentoCadastro.value == 11)) || ((document.frmCadastro.DiaNascimentoCadastro.value <= 21) && (document.frmCadastro.MesNascimentoCadastro.value == 12))) { document.frmCadastro.SignoCadastro.value = "Sagitário"; }
        if (((document.frmCadastro.DiaNascimentoCadastro.value >= 22) && (document.frmCadastro.MesNascimentoCadastro.value == 12)) || ((document.frmCadastro.DiaNascimentoCadastro.value <= 20) && (document.frmCadastro.MesNascimentoCadastro.value == 1))) { document.frmCadastro.SignoCadastro.value = "Capricórnio"; }
        if (((document.frmCadastro.DiaNascimentoCadastro.value >= 21) && (document.frmCadastro.MesNascimentoCadastro.value == 1)) || ((document.frmCadastro.DiaNascimentoCadastro.value <= 19) && (document.frmCadastro.MesNascimentoCadastro.value == 2))) { document.frmCadastro.SignoCadastro.value = "Aquário"; }
        if (((document.frmCadastro.DiaNascimentoCadastro.value >= 20) && (document.frmCadastro.MesNascimentoCadastro.value == 2)) || ((document.frmCadastro.DiaNascimentoCadastro.value <= 20) && (document.frmCadastro.MesNascimentoCadastro.value == 3))) { document.frmCadastro.SignoCadastro.value = "Peixes"; }
    } else { document.frmCadastro.SignoCadastro.value = "indefinido"; }
}
