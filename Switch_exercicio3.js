const leia = require('readline-sync')

console.log("_______Código_______|_______Operação_______")
console.log("         1          |        Soma          ")
console.log("         2          |        Subtração     ")
console.log("         3          |        Multiplicação ")
console.log("         4          |        Divisão       ")

//Entrada
let num1 = leia.questionFloat("\nDigite o primeiro numero: ")
let num2 = leia.questionFloat("\nDigite o segundo numero: ")
let op = leia.questionInt("\nDigite o Codigo desejado: ");

//Switch
switch(op){
    case 1: 
        console.log(`\n${num1} + ${num2} = ${num1 + num2}`);
        break;
    case 2:
        console.log(`\n${num1} - ${num2} = ${num1 - num2}`)
        break;
    case 3:
        console.log(`\n${num1} * ${num2} = ${num1 * num2}`)
        break;
    case 4:
        console.log(`\n${num1} / ${num2} = ${num1 / num2}`)
        break;
    default:
        console.log("Operação Inválida!")
        process.exit(0)
}

//Fim