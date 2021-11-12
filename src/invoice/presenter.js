import invoice from "./invoice";

const price = document.querySelector("#price");
const qty = document.querySelector("#qty");
const form = document.querySelector("#invoice-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const priceNumber = Number.parseInt(price.value);
  let qtyNumber = 1;
  if (qty.value != "") {
    qtyNumber = Number.parseInt(qty.value);
  }
  div.innerHTML = "<p> Total= $" + invoice(priceNumber, qtyNumber) + "</p>";
});
