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

    if (slideatual > 0) {
        slideatual--
    } else {
        slideatual = numerodeslides - 1
    }

    // slideatual--
    banner.classList.add(slides[slideatual])
}

const selecionarslide = (indiceslide) => {
    slides.forEach(slide => banner.classList.remove(slide))
    slideatual = indiceslide
    banner.classList.add(slides[indiceslide])
}

let listadecases = [
    {
        imagem: "https://unsplash.it/640/425?image=69",
        descricao: "Uma empresa de tecnologian lança um desafio de gamificação onde os funcionarios devem propor e implementar ideias"
    },

    {
        imagem: "https://unsplash.it/640/425?image=25",
        descricao: "Uma empresa de consultoria cria uma narrativa de gamificação para seu programa de treinamento"
    },

    {  
        imagem: "https://unsplash.it/640/425?image=24",
        descricao: "Uma empresa de vendas implementa uma competição gamificada entre equipes que competem pelo topo do ranking"
    },

    {
        imagem: "https://unsplash.it/640/425?image=15",
        descricao: "Uma empresa de saúde promove o bem estar deos funcionarios atraveés de um desafio de gamificação de condicionamento físico"
    }

]

const renderizarcases = () => {
    let elementolista = document.getElementById("lista-cards")
    let template = ""

    listadecases.forEach(cardcase => {
        template += ` <div class="card">
            <img src="${cardcase.imagem}" alt="">
            <p>"${cardcase.descricao}"</p>
            <button>Ver mais</button>
        </div>`
    })

    elementolista.innerHTML = template
}
