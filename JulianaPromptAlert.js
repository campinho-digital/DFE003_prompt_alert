/* Elabore um programa que leia um número e devolva para o usuário o dobro do número informado com prompt()e alert();

  Entrada de dados: ler um número.
  Processamento: calcular o dobro.
  Saída: informar o resultado.*/

var numero = prompt("Por favor, digite um número:");
numero = parseInt(numero);
var dobro = numero * 2;
alert("O dobro de " + numero + " é " + dobro);


/*Elaborar um programa que calcule o valor do jantar, sendo o valor total do jantar composto pela conta junto com a taxa de atendimento do garçom com  prompt()e alert(); 

  Entrada de dados: ler o valor da conta.
  Processamento: calcular junto com o valor do custo do garçom.
  Saída: informar o resultado.*/




var valorConta = prompt("Por favor, digite o valor da conta do jantar:");
valorConta = parseFloat(valorConta);
var taxaGarcom = prompt("Por favor, digite a taxa de atendimento do garçom em porcentagem:");
taxaGarcom = parseFloat(taxaGarcom);
var valorTaxaGarcom = (taxaGarcom / 100) * valorConta;
var valorTotalJantar = valorConta + valorTaxaGarcom;

// Exibe o valor da taxa de atendimento e o valor total do jantar usando a função "alert()"
alert("A taxa de atendimento do garçom é: R$" + valorTaxaGarcom.toFixed(2));
alert("O valor total do jantar, incluindo a taxa de atendimento, é: R$" + valorTotalJantar.toFixed(2));



/*Elabore um programa para uma pizzaria, ou qual leia o valor total de uma conta e quantos clientes vão pagar. Calcule e informe o valor a ser pago por cliente com  prompt()e alert(); 

  Entrada de dados: ler o valor da conta e a quantidade de clientes.
  Processamento: calcular o valor a ser pago por cliente.
  Saída: informar o resultado.*/


var valorTotalConta = prompt("Por favor, digite o valor total da conta:");
valorTotalConta = parseFloat(valorTotalConta);
var quantidadeClientes = prompt("Por favor, digite a quantidade de clientes:");
quantidadeClientes = parseInt(quantidadeClientes);
var valorPorCliente = valorTotalConta / quantidadeClientes;
alert("Cada cliente deve pagar R$" + valorPorCliente.toFixed(2));