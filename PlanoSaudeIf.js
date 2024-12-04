const leia = require('readline-sync')

//Entrada de Dados
let nome = leia.question("\nDigite o seu nome: ")
let idade = leia.questionInt("\nDigite a sua idade: ")

//Laço condicional
if (idade <= 0){
    console.log("Idade Inválida!");
    process.exit(0);
}else if (idade > 0 && idade <= 10){
    valor = 100.00;
}else if(idade > 10 && idade <= 29){
    valor = 200.00;
}else if(idade >29 && idade <= 45){
    valor = 300.00;
}else if(idade > 45 && idade <= 59){
    valor = 500.00;
}else if(idade > 59 && idade <= 65){
    valor = 600.00;
}else{
    valor = 1000.00;
}

//Saída
console.log(`\nO valor do Plano de Saúde do(a) ${nome} é de R$ ${valor.toFixed(2)}`)