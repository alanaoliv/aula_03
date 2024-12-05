const leia = require('readline-sync')

//Entrada 
let nome = leia.question("\nDigite seu nome: ")
let idade = leia.questionInt("\nDigite sua idade: ")

//Inicio do Laço Condicional
if ((idade <= 17) || (idade >= 70)){
    console.log(`\n${nome} não está apto(a) para doar sangue!`)
}else if(idade >= 60){
   let sim = true 
   let nao = false 
   console.log("\n1 - SIM \n2 - NAO")
   let novo = leia.question("\nJa foi doou sangue anteriormente? Digite o numero da sua resposta: ")
   if (novo == 1){
    console.log(`\n${nome} está apto(a) para doar sangue!`)
   }else if(novo == 2){
    console.log(`\n${nome} não está apto(a) para doar sangue!`)
   }else{
    console.log("Opção Inválida!")
    process.exit(0)
   }
}else{
    console.log(`\n${nome} está apto(a) para doar sangue!`)
}