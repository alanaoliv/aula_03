const leia = require('readline-sync')

//Entrada dos Valores
let numA = leia.questionInt("Digite o valor de A: ");
let numB = leia.questionInt("\nDigite o valor de B: ");
let numC = leia.questionInt("\nDigite o valor de C: ");

let resultado = numA + numB

//Laço Condicional
if (numA + numB > numC){
    console.log(`\nA Soma de A [${numA}] + B [${numB}] é ${resultado}, sendo assim, é Maior do que C [${numC}].`)
}else if(numA + numB < numC){
    console.log(`\nA Soma de A [${numA}] + B [${numB}] é ${resultado}, sendo assim, é Menor do que C [${numC}].`)
}else{
    console.log(`\nA Soma de A [${numA}] + B [${numB}] é ${resultado}, sendo assim, é Igual a C [${numC}].`)
}

//Fim