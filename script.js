let menu = document.getElementById("menu")
let iconebarras = document.getElementById("icone-barras")
let iconex = document.getElementById("icone-x")

function abrirfecharmenu() {

    if (menu.classList.contains("menu-fechado")) {

        menu.classList.remove("menu-fechado")
        iconex.style.display = "inline"
        iconebarras.style.display = "none"

    } else {
        menu.classList.add("menu-fechado")
        iconex.style.display = "none"
        iconebarras.style.display = "inline"
    }
}

onresize = () => {
    menu.classList.remove("menu-fechado")
    iconex.style.display = "inline"
    iconebarras,style.display = "none"
}