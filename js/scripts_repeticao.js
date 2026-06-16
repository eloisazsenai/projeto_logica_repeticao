//ESTRUTURA DE REPETIÇAO
const divFor = document.querySelector('#div-for')

for( i = 0; i < 10; i++){
    divFor.innerHTML += `${i} - Amor<br>`
}

//CONTADOR/ACUMULADOR
const inputNum = document.querySelector('#num')
const brnNum = document.querySelector('#btn-num')
const divContAcum = document.querySelector('#div-cont-acum')

let cont = 0
let acum = 0.0

brnNum.addEventListener('click', (evt)=>{
    let numDigitado = Number(inputNum.value)

    cont++
    acum += numDigitado

    divContAcum.innerHTML = `TOTAL DE NÚMERO DIGITADO É: ${cont} <br> A SOMA DOS NÚMERO É: ${acum}`

    inputNum.value = ''
})