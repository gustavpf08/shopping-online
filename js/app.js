let formOptions = document.getElementById("produto");
let selectedBtn = document.querySelector(".botao-adicionar");

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

let headphoneValue = 0;
let smartphoneValue = 0;
let vrHeadset = 0;

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
    vrHeadset = 5000;
    return vrHeadset;
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
  console.log(sumTotalValues);
  console.log(total);

  changingTextTotal("#valor-total", `R$${total},00`);
}
