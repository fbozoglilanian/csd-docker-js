import invoice from "./invoice";

const price = document.querySelector("#price");
const form = document.querySelector("#invoice-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const priceNumber = Number.parseInt(price.value);

  div.innerHTML = "<p> Total= $" + invoice(priceNumber) + "</p>";
});
