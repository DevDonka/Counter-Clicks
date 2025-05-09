let contador = 0;

const clickButton = document.getElementById('clickButton');
const contadorDisplay = document.getElementById('contador');

// Generar gotas de lluvia
function createRain() {
  const rainContainer = document.querySelector('.rain');
  const numberOfDrops = 100;

  for (let i = 0; i < numberOfDrops; i++) {
    const drop = document.createElement('div');
    drop.classList.add('drop');
    drop.style.left = `${Math.random() * window.innerWidth}px`;
    drop.style.animationDuration = `${Math.random() * 1.5 + 1}s`;
    rainContainer.appendChild(drop);
  }
}
window.onload = createRain;
clickButton.addEventListener('click', () => {
  contador++;
  contadorDisplay.textContent = `Número de clics: ${contador}`;
});
