let contador = 0;

const clickButton = document.getElementById('clickButton');
const contadorDisplay = document.getElementById('contador');

clickButton.addEventListener('click', () => {
  contador++;
  contadorDisplay.textContent = `Número de clics: ${contador}`;
});
