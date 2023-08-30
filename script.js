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
      const cuponText = `<b>Promoção de natal</b>: ${i}
      <hr>
      <span style="font-size: 16px; font-weight: bold;">Cliente: ${cliente} </span>
      <br>
      <span style="font-size: 10px;">Concorra a mil reais em impressões digitais</span>
      <br>
      <span style="font-size: 14px;">Data do sorteio: 23/12/2023</span>`;
      storedCupons.push(cuponText);
    }

    updateCuponsDisplay();
  }
});

function updateCuponsDisplay() {
  cuponsContainer.innerHTML = storedCupons.map(cupon => `<div class="cupon-card">${cupon}</div>`).join('');
}