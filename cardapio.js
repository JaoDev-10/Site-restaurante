let carrinho = [];
let total = 0;

function adicionarCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  total += preco;
  atualizarCarrinho();
}

function removerItem(index) {
  total -= carrinho[index].preco;
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById("lista-carrinho");
  const totalEl = document.getElementById("total");
  const qtdItensEl = document.getElementById("quantidade-itens");

  lista.innerHTML = "";

  carrinho.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.nome} - R$ ${item.preco.toFixed(2)}
      <button onclick="removerItem(${index})">❌</button>
    `;
    lista.appendChild(li);
  });

  totalEl.textContent = total.toFixed(2);
  qtdItensEl.textContent = carrinho.length; // ATUALIZA A CONTAGEM DE ITENS
}

document.getElementById("finalizar").addEventListener("click", () => {
  if (carrinho.length === 0) {
    alert("O carrinho está vazio!");
    return;
  }

  let mensagem = "Olá! Gostaria de fazer o seguinte pedido:%0A";
  carrinho.forEach((item) => {
    mensagem += `- ${item.nome} - R$ ${item.preco.toFixed(2)}%0A`;
  });
  mensagem += `%0ATotal: R$ ${total.toFixed(2)}`;

  const telefone = "5599999999999"; // Coloque o número com DDI + DDD
  const url = `https://wa.me/${telefone}?text=${mensagem}`;

  window.open(url, "_blank");
});


 document.addEventListener("DOMContentLoaded", () => {
      const linksFiltro = {
        comida: document.getElementById('filtro-comida'),
        sobremesa: document.getElementById('filtro-sobremesa'),
        todos: document.getElementById('filtro-bebida'),
      };

      function atualizarAtivo(chaveAtiva) {
        for (const chave in linksFiltro) {
          if (chave === chaveAtiva) {
            linksFiltro[chave].classList.add('ativo');
          } else {
            linksFiltro[chave].classList.remove('ativo');
          }
        }
      }

      function filtrarItens(categoria) {
        const itens = document.querySelectorAll('.item-cardapio');

        itens.forEach(item => {
          if (categoria === 'todos') {
            item.style.display = 'block';
          } else {
            item.style.display = item.dataset.categoria === categoria ? 'block' : 'none';
          }
        });
      }

      linksFiltro.comida.addEventListener('click', e => {
        e.preventDefault();
        filtrarItens('comida');
        atualizarAtivo('comida');
      });

      linksFiltro.sobremesa.addEventListener('click', e => {
        e.preventDefault();
        filtrarItens('sobremesa');
        atualizarAtivo('sobremesa');
      });

      linksFiltro.todos.addEventListener('click', e => {
        e.preventDefault();
        filtrarItens('bebida');
        atualizarAtivo('bebida');
      });

      
      filtrarItens('comida');
      atualizarAtivo('comida');
    });

    document.getElementById('pesquisa').addEventListener('input', function () {
  const termo = this.value.toLowerCase();
  const itens = document.querySelectorAll('.item-cardapio');

  itens.forEach(item => {
    const nome = item.querySelector('h3').textContent.toLowerCase();
    if (nome.includes(termo)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});


    




