let contador = 0;

const clickButton = document.getElementById('clickButton');
const contadorDisplay = document.getElementById('contador');

// Generar gotas de lluvia
function createRain() {
  const rainContainer = document.querySelector('.rain');
  const numberOfDrops = 100; // Número de gotas de lluvia

  for (let i = 0; i < numberOfDrops; i++) {
    const drop = document.createElement('div');
    drop.classList.add('drop');
    drop.style.left = `${Math.random() * window.innerWidth}px`; // Posición horizontal aleatoria
    drop.style.animationDuration = `${Math.random() * 1.5 + 1}s`; // Duración aleatoria para las gotas
    rainContainer.appendChild(drop);
  }
}

// Iniciar lluvia al cargar la página
window.onload = createRain;

// Incrementar contador al hacer clic
clickButton.addEventListener('click', () => {
  contador++;
  contadorDisplay.textContent = `Número de clics: ${contador}`;
});
