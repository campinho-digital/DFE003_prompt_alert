
// Elaborar um programa que leia um número e devolva para o usuário o dobro do número informado

/*
let num = prompt("Digite um número e então retornará o dobro");
let dobro = num*=2;
alert(`O dobro do valor é igual a ${dobro}`);
*/

// Elabore um programa que calcule o valor do jantar, sendo o valor total do jantar composto pela conta junto com a taxa de atendimento do garçom.

let valor = prompt("Quanto ficou o valor do jantar?");
valor = parseFloat(valor)

custoGarçom = 0.25 * valor;
custoGarçom = parseFloat(custoGarçom)

let custoComposto = valor + custoGarçom;
custoComposto = parseFloat(custoComposto);

alert("O valor final é de: " + "R$" + custoComposto)