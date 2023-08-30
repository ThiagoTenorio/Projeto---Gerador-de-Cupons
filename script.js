const cuponForm = document.getElementById('cuponForm');
const cuponsContainer = document.getElementById('cupons');
const printCupons = document.getElementById('printCupons');
let storedCupons = [];

cuponForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const cliente = document.getElementById('cliente').value;
  const quantidade = parseInt(document.getElementById('quantidade').value);

  if (!isNaN(quantidade)) {
    storedCupons = [];

    for (let i = 1; i <= quantidade; i++) {
      const cuponText = `<img src="./img/Logo - Grafica.png" alt="Logo Marca" class="logo" style="width: 25px"/> 
      <br> 
      <span style="font-size: 12px;"><b>Promoção de Natal:</b> ${i}</span>
      <hr>
      <span style="font-size: 12px; font-weight: bold;">Cliente: ${cliente} </span>
      <br>
      <span style="font-size: 7.5px;">Concorra a mil reais em impressões digitais</span>
      <br>
      <span style="font-size: 12px;">Data do sorteio: 23/12/2023</span>`;
      storedCupons.push(cuponText);
    }

    updateCuponsDisplay();

    printButton.style.display = 'block';
  }
});


function updateCuponsDisplay() {
  cuponsContainer.innerHTML = `<div class="cupon-container">${storedCupons
    .map(cupon => `<div class="cupon-card">${cupon}</div>`)
    .join('')}</div>`;
}

const printButton = document.getElementById('printButton');

printButton.addEventListener('click', function () {
  // Mostrar a div que contém os cupons a serem impressos
  printCupons.style.display = 'block';

  // Ocultar o botão de impressão para que ele não seja impresso
  printButton.style.display = 'none';

  // Chamar a função de impressão
  window.print();

  // Restaurar a exibição normal após a impressão
  printCupons.style.display = 'none';
  printButton.style.display = 'block';
});

