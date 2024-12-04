const leia = require('readline-sync')

console.log("Descubra se o numero é positivo ou negativo, par ou ímpar");

//Entrada do Valor
let num = leia.questionInt("\nDigite um numero: ");

//Laço Condicional
if(num % 2 === 0 && num >= 0 ){
    console.log(`\nO número ${num} é par e positivo!`)
}else if(num % 2 === 0 && num < 0 ){
    console.log(`\nO número ${num} é par e negativo!`)
}else if(num % 2 != 0 && num < 0 ){
    console.log(`\nO número ${num} é ímpar e negativo!`)
}else{
    console.log(`\nO número ${num} é ímpar e positivo!`)
}

//Fim