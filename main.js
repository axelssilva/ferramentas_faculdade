const formulario = document.querySelector('#form')
const divDado = document.querySelector('.dado')
const divCalculo = document.querySelector('.calcular')
const resultado = document.querySelector('#res')

divDado.style.display = 'none'

function opcao(radio) {
    if (radio.value === 'metodo1') {
        divDado.style.display = 'none'
        divCalculo.style.display = 'block'

    } else if (radio.value === 'metodo2') {
        divDado.style.display = 'block'
        divCalculo.style.display = 'none'
    }
}

formulario.addEventListener('submit', function(e) {
    e.preventDefault()

    let semanas = Number(formulario.querySelector('#semanas').value)
    let creditosSemana = Number(formulario.querySelector('#creditos').value)
    let crediSemana = semanas * creditosSemana
    let creditoSemestre = Number(formulario.querySelector('#total').value)
    let total = 0
    
    if (crediSemana > total) {
        total = crediSemana
    } 
    
    if (creditoSemestre > total) {
        total = creditoSemestre
    }

    const faltas = total * 0.25
    const msg = `Os créditos de semestre são: ${total}.
    Você pode faltar ${faltas} créditos.`
    
    window.alert(msg)
})

function criarP() {
    let p = document.createElement('p')
    return p
}



