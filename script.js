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
      const cuponText = `<span style="font-size: 14px;"><b>Promoção de natal</b>: ${i}</span>
      <hr>
      <span style="font-size: 12px; font-weight: bold;">Cliente: ${cliente} </span>
      <br>
      <span style="font-size: 7.5px;">Concorra a mil reais em impressões digitais</span>
      <br>
      <span style="font-size: 12px;">Data do sorteio: 23/12/2023</span>`;
      storedCupons.push(cuponText);
    }

    updateCuponsDisplay();
  }
});

function updateCuponsDisplay() {
  cuponsContainer.innerHTML = `<div class="cupon-container">${storedCupons
    .map(cupon => `<div class="cupon-card">${cupon}</div>`)
    .join('')}</div>`;
}

