function somar() {
    var n1 = document.getElementById('n1')
    var n2 = document.getElementById('n2')
    var res = document.getElementById('res')
    var num1 = Number(n1.value)
    var num2 = Number(n2.value)
    var soma = num1 + num2
    res.style.textAlign = 'center'
    res.style.marginTop = '20px'
    res.innerHTML = `A soma dos dois valores é <strong>${soma}</strong>`
}

function subtrair() {
    var n1 = document.getElementById('n1')
    var n2 = document.getElementById('n2')
    var res = document.getElementById('res')
    var num1 = Number(n1.value)
    var num2 = Number(n2.value)
    var sub = num1 - num2
    res.style.textAlign = 'center'
    res.style.marginTop = '20px'
    res.innerHTML = `A subtração dos dois valores é <strong>${sub}</strong>`
}

function multiplicar() {
    var n1 = document.getElementById('n1')
    var n2 = document.getElementById('n2')
    var res = document.getElementById('res')
    var num1 = Number(n1.value)
    var num2 = Number(n2.value)
    var mult = num1 * num2
    res.style.textAlign = 'center'
    res.style.marginTop = '20px'
    res.innerHTML = `A multiplicação dos dois valores é <strong>${mult}</strong>`
}

function dividir() {
    var n1 = document.getElementById('n1')
    var n2 = document.getElementById('n2')
    var res = document.getElementById('res')
    var num1 = Number(n1.value)
    var num2 = Number(n2.value)
    var div = num1 / num2
    res.style.textAlign = 'center'
    res.style.marginTop = '20px'
    res.innerHTML = `A divisão dos dois valores é <strong>${div}</strong>`
}