//Math.floor(Math.random() * 255); Chiffre en 1 et 255

function colorChange() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  //console.log(r, g, b);

  document.body.style.background = `rgb( ${r}, ${g}, ${b})`;

  let textBox = document.querySelector("p");
  textBox.innerHTML = `rgb(${r} , ${g} , ${b})`;

  //console.log(textBox);
}

setInterval(colorChange, 2000);
