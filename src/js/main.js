// DIVs
const valorDobro = document.getElementById("dobro");
const valorJantar = document.getElementById("jantar");
const valorPizza = document.getElementById("pizza");

//dobro
var dobro = document. querySelector("#doubleValue");
//jantar
var specialDinner = document.querySelector("#specialDinner");
var valorPorcentagem = document.querySelector("#porcentagemAtendimento");

//pizzaria
var chequeTotal = document.querySelector("#chequeTotal");
var qtdPessoa = document.querySelector("#qtdPessoa");


const Modal = {
  open(){
      // Abrir modal
      // Adicionar a class active ao modal
      document
          .querySelector('.modal-overlay')
          .classList
          .add('active')
  },

  openDinner(){
      // Abrir modal
      // Adicionar a class active ao modal
      document
          .querySelector('.modal-overlay-dinner')
          .classList
          .add('active')
  },

  openPizza(){
      // Abrir modal
      // Adicionar a class active ao modal
      document
          .querySelector('.modal-overlay-pizza')
          .classList
          .add('active')
  },

  closeDouble(){
      // fechar o modal
      // remover a class active do modal
      document
          .querySelector('.modal-overlay')
          .classList
          .remove('active')
  },

  closeDinner(){
      // fechar o modal
      // remover a class active do modal
      document
          .querySelector('.modal-overlay-dinner')
          .classList
          .remove('active')
  },
  closePizza(){
      // fechar o modal
      // remover a class active do modal
      document
          .querySelector('.modal-overlay-pizza')
          .classList
          .remove('active')
  },

}

// Elaborar um programa que leia um número e devolva para o usuário o dobro do número informado
function dobroNum() {

    var numero = dobro.value;
    numero = parseInt(numero)
    var multiplicado = numero *= 2;

    Modal.closeDouble();

   valorDobro.innerHTML = `<h1>Dobro</h1><hr><p>O dobro do valor é</p> <span>${multiplicado}<span>`;
  }


// Elabore um programa que calcule o valor do jantar, sendo o valor total do jantar composto pela conta junto com a taxa de atendimento do garçom.

function jantarValor() {
  //console.log(specialDinner.value)
  var valorAtendimento = porcentagemAtendimento.value;
  var totalRefeicao = specialDinner.value;

  valorAtendimento = parseFloat(valorAtendimento)
  totalRefeicao = parseFloat(totalRefeicao)
  
  let porcentagem = (valorAtendimento/100) * 100;
  let preçoFinal = ((valorAtendimento/100) * totalRefeicao) + totalRefeicao;

  Modal.closeDinner();

   valorJantar.innerHTML = `<h1>Jantar</h1><hr><p>O valor FINAL  do jantar com ${porcentagem}% do valor é</p> <span>R$ ${preçoFinal}<span>`;
  }

// Elabore um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser pago por cliente.
function contaPizza() {
    var chequeFinal = chequeTotal.value;
    var pessoas = qtdPessoa.value;

    chequeFinal = parseFloat(chequeFinal)
    pessoas = parseInt(pessoas)

    let valorFinalPorPessoa = chequeFinal / pessoas;
    valorFinalPorPessoa = Math.round(valorFinalPorPessoa)

    Modal.closePizza();

    valorPizza.innerHTML = `<h1>Pizzaria</h1><hr><p>Cada pessoa deverá pagar aproximadamente</p> <span>R$${valorFinalPorPessoa}<span>`;
  }


