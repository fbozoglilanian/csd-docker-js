import fs from "fs";
describe("Codebreaker", () => {
  it("muestra una bienvenida", () => {
    document.body.innerHTML = fs.readFileSync("codebreaker.html", "utf8");
    const h1 = document.querySelector("h1").innerHTML;
    expect(h1).toEqual("Codebreaker");
  });

  it("Arriesgo a ganador", () => {
    document.body.innerHTML = fs.readFileSync("codebreaker.html", "utf8");
    require("../codebreaker/presenter");
    arriesgo("5");
    const resultado = getResultado();
    expect(resultado).toEqual("Ganaste!");
  });

  function arriesgo(numero) {
    const numero_elem = document.querySelector("#numero");
    const boton_elem = document.querySelector("#arriesgo");
    numero_elem.value = numero;
    boton_elem.click();
  }
  function getResultado() {
    return document.querySelector("#resultado").innerHTML;
  }
});
