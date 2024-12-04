const leia = require('readline-sync')

//Menu para o Switch
console.log("____Código do Produto__|______Produto_______|_____Preço Unitário____")
console.log("           1           | Cachorro-Quente    |      R$10.00          ")
console.log("           2           | X-Salada           |      R$15.00          ")
console.log("           3           | X-Bacon            |      R$18.00          ")
console.log("           4           | Bauru              |      R$12.00          ")
console.log("           5           | Refrigerante       |      R$8.00           ")
console.log("           6           | Suco de Laranja    |      R$13.00          ")

//Entrada dos Dados
let produto = leia.questionInt("\nDigite o codigo do produto escolhido: ");
let quantidade = leia.questionInt("\nDigite a quantidade desejada: ");
let preço;

//Laço Switch Case
switch(produto){
    case 1:
        preço = 10.00
        var nomeProduto = "Cachorro-Quente"
        break;
    case 2:
        preço = 15.00
        var nomeProduto = "X-Salada"
        break;
    case 3:
        preço = 18.00
        var nomeProduto = "X-Bacon"
        break;
    case 4:
        preço = 12.00
        var nomeProduto = "Bauru"
        break;
    case 5:
        preço = 8.00
        var nomeProduto = "Refrigerante"
        break;
    case 6:
        preço = 13.00
        var nomeProduto = "Suco de Laranja"
        break;
    default:
        console.log("Opção Inválida!")
        process.exit(0)
}

//Calculo do Valor Total
let total = quantidade * preço

//Saída
console.log(`\nProduto escolhido: ${nomeProduto} \nQuantidade: ${quantidade} \nO Valor Total da compra é: R$${total.toFixed(2)}.`);
console.log("\nAguarde a preparação do seu pedido.\nObrigado pela compra, volte sempre!")