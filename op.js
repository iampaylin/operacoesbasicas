function somar() {
    let primeiroNumeroSoma = document.getElementById('primeiroSoma')
    let segundoNumeroSoma = document.getElementById('segundoSoma')
    let somares = document.getElementById('resultadoSoma')

    let n1 = Number(primeiroNumeroSoma.value)
    let n2 = Number(segundoNumeroSoma.value)

    let soma = n1 + n2

    somares.innerHTML = `O resultado da soma é ${soma}`
    somares.style.transition = '300ms'
}

function subtrair() {
    let primeiroNumeroSub = document.getElementById('primeiroSub')
    let segundoNumeroSub = document.getElementById('segundoSub')
    let subres = document.getElementById('resultadoSub')

    let n1 = Number(primeiroNumeroSub.value)
    let n2 = Number(segundoNumeroSub.value)

    let subtra = n1 - n2

    subres.innerHTML = `O resultado da subtração é ${subtra}`
    subres.style.transition = '300ms'
}

function multiplicar() {
    let primeiroNumeroMult = document.getElementById('primeiroMult')
    let segundoNumeroMult = document.getElementById('segundoMult')
    let multres = document.getElementById('resultadoMult')

    let n1 = Number(primeiroNumeroMult.value)
    let n2 = Number(segundoNumeroMult.value)

    let multip = n1 * n2

    multres.innerHTML = `O resultado da multiplicação é ${multip}`
    multres.style.transition = '300ms'
}

function dividir() {
    let primeiroNumeroDiv = document.getElementById('primeiroDiv')
    let segundoNumeroDiv = document.getElementById('segundoDiv')
    let divres = document.getElementById('resultadoDiv')

    let n1 = Number(primeiroNumeroDiv.value)
    let n2 = Number(segundoNumeroDiv.value)

    let divis = n1 / n2

    divres.innerHTML = `O resultado da divisão é ${divis}`
    divres.style.transition = '400ms'
}