let formOptions = document.getElementById("produto");
let selectedBtn = document.querySelector(".botao-adicionar");
let productParent = document.querySelector(".carrinho__produtos");

let sumTotalValues = [1400];

function gettingIndexForm() {
  let index = formOptions.selectedIndex;
  return index;
}

function gettingQuantity() {
  let quantity = document.querySelector("#quantidade").value;
  return quantity;
}

selectedBtn.addEventListener("click", gettingIndexForm);
selectedBtn.addEventListener("click", gettingQuantity);

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === 13) {
    event.preventDefault();
    selectedBtn.click();
  }
});

let headphoneValue = 0;
let smartphoneValue = 0;
let vrHeadsetValue = 0;

let headphone = "Fone de Ouvido";
let smartphone = "Celular";
let vrHeadset = "Óculos VR";

function addValueProduct(value) {
  if (value === 0) {
    headphoneValue = 100;
    return headphoneValue;
  }

  if (value === 1) {
    smartphoneValue = 1400;
    return smartphoneValue;
  }

  if (value === 2) {
    vrHeadsetValue = 5000;
    return vrHeadsetValue;
  }
}

function calculation() {
  let productIndex = gettingIndexForm();
  let quantityValue = gettingQuantity();
  let values = addValueProduct(productIndex);
  let sum = 0;

  let calc = values * quantityValue;
  sumTotalValues.push(calc);

  for (let i = 0; i < sumTotalValues.length; i++) {
    sum += sumTotalValues[i];
  }
  return sum;
}

function changingTextTotal(tag, text) {
  let selectingTag = document.querySelector(tag);
  selectingTag.innerHTML = text;
}

function adicionar() {
  let total = calculation();
  creatingAnElement();
  changingTextTotal("#valor-total", `R$${total},00`);
}

function limpar() {
  changingTextTotal("#valor-total", `R$0`);
  sumTotalValues = [];

  document.getElementById("quantidade").value = 0;
  while (productParent.firstChild) {
    productParent.removeChild(productParent.firstChild);
  }
}

function creatingAnElement() {
  let quantity = gettingQuantity();
  let productIndex = gettingIndexForm();
  let lastNumber = sumTotalValues[sumTotalValues.length - 1];

  //Criando os elementos
  let newSection = document.createElement("section");
  newSection.classList.add("carrinho__produtos__produto");

  let spanQuantity = document.createElement("span");
  spanQuantity.classList.add("texto-azul");

  let spanTotalValue = document.createElement("span");
  spanTotalValue.classList.add("texto-azul");

  // Criando o conteúdo dos elementos
  let contentQuantity = document.createTextNode(`${quantity}x `);
  spanQuantity.appendChild(contentQuantity);
  newSection.appendChild(spanQuantity);

  if (productIndex == 0) {
    let contentHeadphone = document.createTextNode(headphone);
    newSection.appendChild(contentHeadphone);
  }

  if (productIndex == 1) {
    let contentSmartphone = document.createTextNode(smartphone);
    newSection.appendChild(contentSmartphone);
  }

  if (productIndex == 2) {
    let contentVR = document.createTextNode(vrHeadset);
    newSection.appendChild(contentVR);
  }

  let contentTotalValue = document.createTextNode(` R$${lastNumber},00`);
  spanTotalValue.appendChild(contentTotalValue);

  newSection.appendChild(spanTotalValue);
  document.getElementById("lista-produtos").appendChild(newSection);
}
