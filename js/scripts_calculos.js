/**
 * VALOR FOR ATÉ 100 O CÁLCULO SEJA 10%
 * VALOR ATÉ 101 ATÉ 1000 O CALCULO SEJA 15%
 * ACIMA DE  1000 SEJA O CALCULO SEJA 20%
 */

const calculoPercentual = (valor) =>{
    let valorCalculado = 0.0

    if (valor <= 100){
        valorCalculado = valor * 0.10
    }else if(valor <= 1000){
        valorCalculado = valor * 0.15
    }else{
        valorCalculado = valor *0.2
    }

    return valorCalculado
}

calculoPercentual()

export{calculoPercentual}