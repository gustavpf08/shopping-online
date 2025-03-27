let formOptions = document.getElementById("produto");
let selectedBtn = document.querySelector(".botao-adicionar");

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

  console.log(values);
  console.log(quantityValue);
}

function adicionar() {
  calculation();
}
