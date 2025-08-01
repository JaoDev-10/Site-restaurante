 let carrinho = [];
  let total = 0;

  function adicionarCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarCarrinho();
  }

  function atualizarCarrinho() {
  const lista = document.getElementById('lista-carrinho');
  const totalEl = document.getElementById('total');
  const contador = document.getElementById('contador-carrinho');

  lista.innerHTML = '';
  carrinho.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${item.nome} - R$ ${item.preco.toFixed(2)}
      <button onclick="removerItem(${index})" class="btn-remover">❌</button>
    `;
    lista.appendChild(li);
  });

  totalEl.textContent = total.toFixed(2);
  contador.textContent = carrinho.length;
}


  function toggleCarrinho() {
    const dropdown = document.getElementById('carrinho-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  }


  window.addEventListener('click', function (e) {
    const cart = document.querySelector('.cart-container');
    if (!cart.contains(e.target)) {
      document.getElementById('carrinho-dropdown').style.display = 'none';
    }
  });

  function removerItem(index) {
  total -= carrinho[index].preco;
  carrinho.splice(index, 1);
  atualizarCarrinho();
}
