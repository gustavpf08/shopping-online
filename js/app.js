let formOptions = document.getElementById("produto");
let selectedBtn = document.querySelector(".botao-adicionar");
let productParent = document.querySelector(".carrinho__produtos");

let sumTotalValues = [1400];

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === 13) {
    event.preventDefault();
    selectedBtn.click();
  }
});

function gettingProductName() {
  let productName = formOptions.value.split("-")[0];
  return productName;
}

function gettingProductValue() {
  let productValue = formOptions.value.split("$")[1];
  return productValue;
}

function gettingQuantity() {
  let quantity = document.querySelector("#quantidade").value;
  return quantity;
}

function calculation() {
  let value = gettingProductValue();
  let quantityValue = gettingQuantity();
  let sum = 0;

  let calc = value * quantityValue;
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
  let name = gettingProductName();
  let lastNumber = sumTotalValues[sumTotalValues.length - 1];

  let creatingElements = document.getElementById("lista-produtos");

  creatingElements.innerHTML += `<section class="carrinho__produtos__produto">
      <span class="texto-azul"> ${quantity}x</span> ${name}<span class="texto-azul">R$${lastNumber}</span>
   </section>`;
}
