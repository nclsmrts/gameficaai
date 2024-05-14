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
    iconebarras, style.display = "none"
}

// função carrossel

let slides = [
    'primeiro-banner',
    'segundo-banner',
    'terceiro-banner'
]

let slideatual = 0
let numerodeslides = slides.length

let banner = document.querySelector(".banner")

banner.classList.add(slides[slideatual])


const mostrarproximoslide = () => {
    banner.classList.remove(slides[slideatual])

    if (slideatual < (numerodeslides - 1)) {
        slideatual++
    } else {
        slideatual = 0
    }

    banner.classList.add(slides[slideatual])
}

const mostrarslideanterior = () => {
    banner.classList.remove(slides[slideatual])

    if(slideatual > 0){
        slideatual--
    }else{ 
        slideatual = numerodeslides - 1
    }
    
    // slideatual--
    banner.classList.add(slides[slideatual])
}