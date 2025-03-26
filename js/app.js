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

function calculation() {
  let quantityValue = gettingQuantity();
  let product = gettingIndexForm();

  console.log(product);
  console.log(quantityValue);
}

function adicionar() {
  calculation();
}
