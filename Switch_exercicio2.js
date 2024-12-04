const leia = require('readline-sync')

let nome = leia.question("\nDigite seu nome: ")

console.log("_________________Calculo de reajuste do Salário______________________")

//Menu para Switch
console.log("____Código do Cargo____|______Cargo_________|_Percentual de Reajuste_")
console.log("           1           | Gerente            |           10%          ")
console.log("           2           | Vendedor           |           7%           ")
console.log("           3           | Supervisor         |           9%           ")
console.log("           4           | Motorista          |           6%           ")
console.log("           5           | Estoquista         |           5%           ")
console.log("           6           | Técnico de TI      |           8%           ")

//Entrada de Dados
let cargo = leia.questionInt("\nDigite o codigo do seu Cargo: ");
let salario = leia.questionFloat("\nDigite o valor do Salario Atual: ");
let porcentagem;
let nomeCargo;

//Laço Switch
switch(cargo){
    case 1:
        porcentagem = 0.10 
        nomeCargo = "Gerente"
        break;
    case 2:
        porcentagem = 0.07
        nomeCargo = "Vendedor"
        break;
    case 3:
        porcentagem = 0.09
        nomeCargo = "Supervisor"
        break;
    case 4:
        porcentagem = 0.06
        nomeCargo = "Motorista"
        break;
    case 5:
        porcentagem = 0.05
        nomeCargo = "Estoquista"
        break;
    case 6:
        porcentagem = 0.08
        nomeCargo = "Técnico de TI"
        break;
    default:
        console.log("Cargo Inválido!")
        process.exit(0)
}

novoSalario = salario + (porcentagem * salario);

//Saída
console.log(`\n${nome}, o seu Cargo é de ${nomeCargo} e o seu Salário Reajustado será R$${novoSalario.toFixed(2)}`)
