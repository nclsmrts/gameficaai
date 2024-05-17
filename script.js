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

const carregarcases = () => {
    fetch("http://localhost:3000/cases")

        .then(resposta => resposta.json())
        .then((dados) => {
            listadecases = dados
            renderizarcases()
        })
}

const solicitaroracmento = (event) => {
    // pegar valores dos imputs

    let valornome = document.getElementById("campo-nome").value
    let valoremail = document.getElementById("campo-email").value
    let valordescicao = document.getElementById("campo-descricao").value

    // organizar objetos com os valores
    let dadosform = {
        nome: valornome,
        email: valoremail,
        descricao: valordescicao
    }

    // enviar requisição para API
    fetch("http://localhost:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosform)

    })
        .then(resposta => {
            console.log(resposta)

            // limoar campos

            document.querySelector("#contato form").reset()

            // mostrar alert com mensagem de sucesso
            alert("Solicitação cadastrada")

        })
        .catch(erro => {
            // caso erro mostrar alert com mensagem erro
            console.log(erro)
            alert("Erro desconhecido")
        })

    event.preventDefault()

}