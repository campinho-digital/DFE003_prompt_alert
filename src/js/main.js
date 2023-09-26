const valorDobro = document.getElementById("dobro")
const valorJantar = document.getElementById("jantar")
const valorPizza = document.getElementById("pizza")

// Elaborar um programa que leia um número e devolva para o usuário o dobro do número informado
function dobroNum() {
  let num = prompt("Digite um número e então retornará o dobro");
  let dobro = (num *= 2);
  alert(`O dobro do valor é igual a ${dobro}`);

  
}

// Elabore um programa que calcule o valor do jantar, sendo o valor total do jantar composto pela conta junto com a taxa de atendimento do garçom.

function jantarValor() {
  
  let valor = prompt("Quanto ficou o valor do jantar?");
  valor = parseFloat(valor);
    
  custoGarçom = 0.25 * valor;
  custoGarçom = parseFloat(custoGarçom);

  let custoComposto = valor + custoGarçom;
  custoComposto = parseFloat(custoComposto);

  alert("O valor final do jantar é de: " + "R$" + custoComposto);
  
  valorJantar.innerHTML ="<h1>Valor total jantar</h1>" + "<hr>" + "R$" + custoComposto;
  
}

// Elabore um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser pago por cliente.
function contaPizza() {
  let valorTotal = prompt("Informe o valor total da conta");
  let pessoas = prompt("Informe a quantidade de pessoas");

  valorTotal = parseFloat(valorTotal);
  pessoas = parseInt(pessoas);

  let valorPorPessoa = valorTotal / pessoas;
  valorPorPessoa = Math.round(valorPorPessoa);

  alert(`Cada pessoa pagará aproximadamente R$${valorPorPessoa}`);
}
