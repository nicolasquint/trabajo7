const contenedor = document.getElementById("contenedor-gatos");
const emojis = ["😺", "😸", "😹"];

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

function agregarGato(emoji) {
  const elementos = Array.from(contenedor.querySelectorAll(".gato"));

  const ultimos = elementos.slice(-5);
  const sonIguales = ultimos.every(el => el.textContent === emoji);

  if (ultimos.length === 5 && sonIguales) {
    
    for (let i = 0; i < 5; i++) {
      contenedor.removeChild(contenedor.lastElementChild);
    }

    
    const caja = document.createElement("span");
    caja.textContent = "📦";
    caja.classList.add("caja");

    
    contenedor.insertBefore(caja, contenedor.firstChild);

    
  } else {
    
    const nuevoGato = document.createElement("span");
    nuevoGato.textContent = emoji;
    nuevoGato.classList.add("gato");
    contenedor.appendChild(nuevoGato);
  }
}
btn1.addEventListener("click", () => agregarGato(emojis[0]));
btn2.addEventListener("click", () => agregarGato(emojis[1]));
btn3.addEventListener("click", () => agregarGato(emojis[2]));
