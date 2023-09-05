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
      const cuponText = `<img src="./img/Logo - Grafica.png" alt="Logo Marca" class="logo-cupon" style="width: 35px"/> 
      <br><br>  
      <span style="font-size: 22px; padding-top: 20px;"><b>PROMOÇÃO DE NATAL</b></span>
      <hr>
      <br><br> 
      <span style="font-size: 22px; font-weight: bold;">Cliente: ${cliente} </span>
      <br><br><br> 
      <span style="font-size: 12px; margin-bottom: 10px;">Concorra a mil reais em impressões digitais</span>
      <br>
      <span style="font-size: 15px;"><b>DATA DO SORTEIO: 23/12/2023</b></span>`;
      storedCupons.push(cuponText);
    }

    // Adicionar uma classe à logo do formulário
    const formLogo = document.querySelector('.logo');
    formLogo.classList.add('logo-form');

    // Use CSS para ocultar a logo do formulário na página de impressão
    const styleSheet = document.styleSheets[0]; // Obtenha a primeira folha de estilo (pode precisar ajustar isso se tiver várias folhas de estilo)
    styleSheet.insertRule('@media print { .logo-form { display: none; } }', 0);


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

  // Ocultar o formulário (opcional, mas geralmente faz sentido)
  cuponForm.style.display = 'none';

  // Chamar a função de impressão
  window.print();

  // Restaurar a exibição normal após a impressão
  printCupons.style.display = 'none';
  printButton.style.display = 'block';
  cuponForm.style.display = 'block'; // Restaurar a exibição do formulário (opcional)
});

