const valorDobro = document.getElementById("dobro");
const valorJantar = document.getElementById("jantar");
const valorPizza = document.getElementById("pizza");

//Abertura e fechamento do Modal
const Modal = {
  openDobro(){
      // Abrir modal
      // Adicionar a class active ao modal
      document
          .querySelector('.modal-overlay')
          .classList
          .add('active')

  },
  openDobro(){
      // Abrir modal
      // Adicionar a class active ao modal
      document
          .querySelector('.modal-overlay')
          .classList
          .add('active')

  },

  close(){
      // fechar o modal
      // remover a class active do modal
      document
          .querySelector('.modal-overlay')
          .classList
          .remove('active')
  },
}



// Elaborar um programa que leia um número e devolva para o usuário o dobro do número informado
function dobroNum() {
  let num = prompt("Digite o valor")
  let dobro = (num *= 2);

  if (num == 0) {
    return alert("Digite um valor válido");
  } else {
    alert(`O dobro do valor é igual a ${dobro}`);

    valorDobro.innerHTML = `<h1>Dobro</h1><hr><p>O dobro do valor é</p> <span>${dobro}<span>`;
  }
}

// Elabore um programa que calcule o valor do jantar, sendo o valor total do jantar composto pela conta junto com a taxa de atendimento do garçom.

function jantarValor() {
  let valor = prompt("Quanto ficou o valor do jantar?");

  if (valor == 0) {
    return alert("Digite um valor válido");
  } else {
    valor = parseFloat(valor)
    custoGarçom = 0.25 * valor;
    custoGarçom = parseFloat(custoGarçom);

    let custoComposto = valor + custoGarçom;
    custoComposto = parseFloat(custoComposto);

    alert("O valor final do jantar é de: " + "R$" + custoComposto);

    valorJantar.innerHTML = `<h1>Jantar</h1><hr><p>O valor final do jantar com 25% do valor é</p> <span>R$${custoComposto}<span>`;
  }
}
// Elabore um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser pago por cliente.
function contaPizza() {
  let valorTotal = prompt("Informe o valor total da conta");
  let pessoas = prompt("Informe a quantidade de pessoas");

  if(valorTotal == 0 || pessoas == 0) {
    return alert("Digite um valor válido");
  } else {

  valorTotal = parseFloat(valorTotal);
  pessoas = parseInt(pessoas);

  let valorPorPessoa = valorTotal / pessoas;
  valorPorPessoa = Math.round(valorPorPessoa);

  alert(`Cada pessoa pagará aproximadamente R$${valorPorPessoa}`);

  valorPizza.innerHTML = `<h1>Pizzaria</h1><hr><p>Cada pessoa deverá pagar aproximadamente</p> <span>R$${valorPorPessoa}<span>`;
  }
}

