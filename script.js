const inputIngreso = document.getElementById("txtIngreso");
const mensajeEncriptado = document.getElementById("txtEncriptado");
const btnEncriptation = document
  .getElementById("btnEncriptation")
  .addEventListener("click", function (e) {
    e.preventDefault();
  });
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

const btnEncriptarHandler = (e) => {
  console.log("hola");
  const encrypted = encriptar(inputIngreso.value);
  mensajeEncriptado.value = encrypted;
  mensajeEncriptado.style.backgroundImage = "none";
  inputIngreso.value = "";
  console.log("final");
};

const encriptar = (stringEncriptado) => {
  let arrayCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptado = stringEncriptado.toLowerCase();
  for (let i = 0; i < arrayCodigo.length; i++) {
    if (stringEncriptado.includes(arrayCodigo[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(
        arrayCodigo[i][0],
        arrayCodigo[i][1]
      );
    }
  }
  return stringEncriptado;
};

const copyText = () => {
    mensajeEncriptado.select();
    navigator.clipboard.writeText(mensajeEncriptado.value)
    mensajeEncriptado = "";
    alert("Mensaje Copiado");
}
