// Lista de produtos disponíveis para compra
import products from './produtcs.js';
import { estabelecimento, cores } from './dados.js';
// Função para salvar o carrinho no cookie
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000); // Define a data de expiração
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${JSON.stringify(value)};${expires};path=/`; // Salva o cookie
}

// Função para ler cookies
function getCookie(name) {
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(name) === 0) {
      return JSON.parse(cookie.substring(name.length + 1)); // Retorna o valor do cookie
    }
  }
  return null;
}

// Função para limpar cookies
function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
}

// Função para renderizar a lista de produtos
function renderProducts() {
  const productList = document.getElementById("products-list");
  productList.innerHTML = ""; // Limpa a lista antes de renderizar novamente

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
            <img src=${product.img} alt=${product.name}>
            <h3>${product.name} - ${product.unid}</h3>
            <p>R$ ${product.price.toFixed(2)}</p>
            <button class="add-to-cart" data-id="${
              product.id
            }">Adicionar ao Carrinho</button>
        `;
    productList.appendChild(productDiv);
  });
}

// Função para adicionar um produto ao carrinho
function addToCart(productId) {
  const cart = loadCart();
  const product = products.find((p) => p.id === productId);

  if (product) {
    const cartItem = cart.find((item) => item.id === productId);
    if (cartItem) {
      cartItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  }

  saveCart(cart);
  renderCart();
}

// Função para salvar o carrinho no cookie
function saveCart(cart) {
  setCookie("cart", cart, 7); // Salva o carrinho por 7 dias
}

// Função para carregar o carrinho do cookie
function loadCart() {
  return getCookie("cart") || []; // Retorna o carrinho ou um array vazio se não houver cookie
}

// Função para renderizar o carrinho
function renderCart() {
  const cart = loadCart();
  const cartItems = document.getElementById("cart-items");
  const totalPrice = document.getElementById("total-price");

  cartItems.innerHTML = ""; // Limpa os itens do carrinho antes de renderizar novamente

  let total = 0;

  cart.forEach((item) => {
    const cartItem = document.createElement("li");
    
    cartItem.innerHTML = `${item.name} - ${item.unid} - ${item.quantity} - R$ ${(
      item.price * item.quantity
    ).toFixed(2)}`;
    cartItems.appendChild(cartItem);

    total += item.price * item.quantity;
  });

  totalPrice.innerText = total.toFixed(2);
}

// Função para limpar o carrinho
function clearCart() {
  deleteCookie("cart");
  renderCart();
}

// Função para exibir/ocultar o banner de cookies
function handleCookieConsent() {
  const cookieConsent = getCookie("cookieConsent");
  const cookieBanner = document.getElementById("cookie-banner");

  if (!cookieConsent) {
    cookieBanner.style.display = "block"; // Exibe o banner de cookies
  }

  // Ao clicar em "Aceitar", armazenamos a permissão de cookies
  document.getElementById("accept-cookies").addEventListener("click", () => {
    setCookie("cookieConsent", "true", 365); // Cookie válido por 365 dias
    cookieBanner.style.display = "none"; // Oculta o banner
  });

  // Ao clicar em "Recusar", não armazenamos nada
  document.getElementById("decline-cookies").addEventListener("click", () => {
    cookieBanner.style.display = "none"; // Oculta o banner
  });
}

// Inicializa a página
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  renderCart();
  handleCookieConsent();

  // Adicionar evento de clique nos botões "Adicionar ao Carrinho"
  document.getElementById("products-list").addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
      const productId = parseInt(e.target.getAttribute("data-id"));
      addToCart(productId);
    }
  });

  // Evento de limpar o carrinho
  document.getElementById("clear-cart").addEventListener("click", clearCart);
});
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("pedido-modal");
  const btnAbrir = document.getElementById("fazer-pedido");
  const btnFechar = document.querySelector(".close");
  const btnConfirmar = document.getElementById("confirmar-pedido");
  const btnCancelar = document.getElementById("cancelar-pedido");

  if (modal && btnAbrir && btnFechar && btnConfirmar && btnCancelar) {
    // Abrir o modal
    btnAbrir.addEventListener("click", function () {
      modal.style.display = "flex";
    });

    // Fechar modal ao clicar no X ou no botão cancelar
    function fecharModal() {
      modal.style.display = "none";
    }

    btnFechar.addEventListener("click", fecharModal);
    btnCancelar.addEventListener("click", fecharModal);

    // Fechar modal ao clicar fora da caixa
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        fecharModal();
      }
    });

    // Detectar se está no celular ou PC
    function isMobile() {
      return /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
    }

    // Capturar os dados ao confirmar o pedido e enviar via WhatsApp
    function getWhatsAppLink(numeroWhatsApp, mensagem) {
      const encodedMessage = encodeURIComponent(mensagem);

      if (isMobile()) {
        return `https://api.whatsapp.com/send/?phone=${numeroWhatsApp}&text=${encodedMessage}&type=phone_number&app_absent=0`;
      } else {
        return `https://web.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodedMessage}`;
      }
    }

    btnConfirmar.addEventListener("click", function () {
      let nome = document.getElementById("nome").value;
      let endereco = document.getElementById("endereco").value;
      let pagamento = document.getElementById("pagamento").value;
      let total = document.getElementById("total-price").textContent.trim();

      if (!nome || !endereco) {
        alert("Por favor, preencha todos os campos!");
        return;
      }

      // Capturar os itens do carrinho
      let itens = [];
      document.querySelectorAll("#cart-items li").forEach((item) => {
        const itemText = item.textContent.split(" - ");
        
        if (itemText.length !== 4) {
          console.error("Erro ao processar item do carrinho:", item.textContent);
          return;
        }

        const [name, unid, quantity, price] = itemText;

        const itemQuantity = parseInt(quantity) || 0; // Evitar NaN
        const itemPrice = parseFloat(price.replace("R$", "").trim()) || 0;

        const itemTotal = (itemPrice * itemQuantity).toFixed(2);

        itens.push(`${itemQuantity} ${unid} ${name} - R$ ${itemTotal}`);
      });

      // Montar a mensagem para o WhatsApp
      let mensagem = `📦 *Pedido Realizado!*\n\n👤 *Nome:* ${nome}\n🏠 *Endereço:* ${endereco}\n💳 *Forma de Pagamento:* ${pagamento}\n\n🛒 *Itens:* \n- ${itens.join("\n- ")}\n\n💰 *Total:* R$ ${total}\n\nObrigado pela compra!`;

      let numeroWhatsApp = "5532999253244"; // Seu número de WhatsApp com DDD

      // Gerar link do WhatsApp
      let linkWhatsApp = getWhatsAppLink(numeroWhatsApp, mensagem);

      // Caso o primeiro link falhe, usar api.whatsapp.com como fallback
      let fallbackLink = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

      // Tentar abrir o link principal, se falhar, abrir o fallback
      window.open(linkWhatsApp, "_blank") || window.open(fallbackLink, "_blank");

      // Fechar o modal após confirmar
      fecharModal();
    });
  } else {
    console.error("Erro: Um ou mais elementos do modal não foram encontrados.");
  }
});

