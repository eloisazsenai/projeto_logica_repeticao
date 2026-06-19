
function mensagem(){
    console.log('Hello, wolrd!') 
}

mensagem()

function mensagemLinda(txt){
    console.log(txt)
}

mensagemLinda('Haiti vai perder pro Brasil')

function somaNumeros(num1, num2){
    return num1 + num2
}

console.log('A soma dos numeros 10 e 58 é: ', somaNumeros(10,58))

const multiplicacao = function(num1, num2){
    return num1 * num2
}

console.log(multiplicacao(64,5))

console.log('----------> ARROW FUNCTION <-----------')

const msgArrow = () =>{
    console.log('Outra mensagem na arrow function')
}

msgArrow()