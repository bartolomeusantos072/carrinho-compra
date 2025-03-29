// Lista de produtos disponíveis para compra
const products = [
  { id: 1, name: 'Maçã Gala', img: 'img/maca-gala.jpg', price: 2.99 },
  { id: 2, name: 'Banana Nanica', img: 'img/banana-nanica.jpg', price: 1.99 },
  { id: 3, name: 'Laranja Pera', img: 'img/laranja-pera.jpg', price: 3.49 },
  { id: 4, name: 'Morango', img: 'img/morango.jpg', price: 5.99 },
  { id: 5, name: 'Uva Thompson', img: 'img/uva-thompson.jpg', price: 4.99 },
  { id: 6, name: 'Abacaxi', img: 'img/abacaxi.jpg', price: 6.99 },
  { id: 7, name: 'Melancia', img: 'img/melancia.jpg', price: 8.99 },
  { id: 8, name: 'Melão', img: 'img/melao.jpg', price: 7.49 },
  { id: 9, name: 'Manga', img: 'img/manga.jpg', price: 4.49 },
  { id: 10, name: 'Kiwi', img: 'img/kiwi.jpg', price: 6.49 },
  { id: 11, name: 'Limão', img: 'img/limao.jpg', price: 2.49 },
  { id: 12, name: 'Pêssego', img: 'img/pessego.jpg', price: 5.49 },
  { id: 13, name: 'Ameixa', img: 'img/ameixa.jpg', price: 4.79 },
  { id: 14, name: 'Pera', img: 'img/pera.jpg', price: 3.99 },
  { id: 15, name: 'Cereja', img: 'img/cereja.jpg', price: 9.99 },
  { id: 16, name: 'Framboesa', img: 'img/framboesa.jpg', price: 8.49 },
  { id: 17, name: 'Amora', img: 'img/amora.jpg', price: 7.99 },
  { id: 18, name: 'Mirtilo', img: 'img/mirtilo.jpg', price: 8.99 },
  { id: 19, name: 'Goiaba', img: 'img/goiaba.jpg', price: 3.79 },
  { id: 20, name: 'Maracujá', img: 'img/maracuja.jpg', price: 6.79 },
  { id: 21, name: 'Abacate', img: 'img/abacate.jpg', price: 5.79 },
  { id: 22, name: 'Coco', img: 'img/coco.jpg', price: 7.79 },
  { id: 23, name: 'Mamão', img: 'img/mamao.jpg', price: 6.29 },
  { id: 24, name: 'Romã', img: 'img/roma.jpg', price: 8.29 },
  { id: 25, name: 'Figo', img: 'img/figo.jpg', price: 7.29 },
  { id: 26, name: 'Tangerina', img: 'img/tangerina.jpg', price: 3.29 },
  { id: 27, name: 'Acerola', img: 'img/acerola.jpg', price: 6.99 },
  { id: 28, name: 'Carambola', img: 'img/carambola.jpg', price: 7.49 },
  { id: 29, name: 'Pitaya', img: 'img/pitaya.jpg', price: 9.49 },
  { id: 30, name: 'Caju', img: 'img/caju.jpg', price: 5.99 },
  { id: 31, name: 'Jaca', img: 'img/jaca.jpg', price: 8.99 },
  { id: 32, name: 'Graviola', img: 'img/graviola.jpg', price: 9.99 },
  { id: 33, name: 'Sapoti', img: 'img/sapoti.jpg', price: 6.49 },
  { id: 34, name: 'Nectarina', img: 'img/nectarina.jpg', price: 5.49 },
  { id: 35, name: 'Caqui', img: 'img/caqui.jpg', price: 6.99 },
  { id: 36, name: 'Pinhão', img: 'img/pinhao.jpg', price: 7.99 },
  { id: 37, name: 'Castanha do Pará', img: 'img/castanha-do-para.jpg', price: 12.99 },
  { id: 38, name: 'Noz', img: 'img/noz.jpg', price: 11.99 },
  { id: 39, name: 'Amêndoa', img: 'img/amendoa.jpg', price: 10.99 },
  { id: 40, name: 'Avelã', img: 'img/avela.jpg', price: 12.49 },
  { id: 41, name: 'Pistache', img: 'img/pistache.jpg', price: 13.49 },
  { id: 42, name: 'Cenoura', img: 'img/cenoura.jpg', price: 2.99 },
  { id: 43, name: 'Batata', img: 'img/batata.jpg', price: 2.49 },
  { id: 44, name: 'Cebola', img: 'img/cebola.jpg', price: 1.99 },
  { id: 45, name: 'Alho', img: 'img/alho.jpg', price: 3.49 },
  { id: 46, name: 'Tomate', img: 'img/tomate.jpg', price: 3.99 },
  { id: 47, name: 'Alface', img: 'img/alface.jpg', price: 2.79 },
  { id: 48, name: 'Rúcula', img: 'img/rucula.jpg', price: 3.29 },
  { id: 49, name: 'Espinafre', img: 'img/espinafre.jpg', price: 4.29 },
  { id: 50, name: 'Brócolis', img: 'img/brocolis.jpg', price: 5.29 },
  { id: 51, name: 'Couve-flor', img: 'img/couve-flor.jpg', price: 4.99 },
  { id: 52, name: 'Repolho', img: 'img/repolho.jpg', price: 3.79 },
  { id: 53, name: 'Couve', img: 'img/couve.jpg', price: 3.79 },
  { id: 54, name: 'Pepino', img: 'img/pepino.jpg', price: 2.29 },
  { id: 55, name: 'Abobrinha', img: 'img/abobrinha.jpg', price: 3.49 },
  { id: 56, name: 'Pimentão', img: 'img/pimentao.jpg', price: 4.49 },
  { id: 57, name: 'Quiabo', img: 'img/quiabo.jpg', price: 5.49 },
  { id: 58, name: 'Chuchu', img: 'img/chuchu.jpg', price: 2.99 },
  { id: 59, name: 'Vagem', img: 'img/vagem.jpg', price: 4.79 },
  { id: 60, name: 'Ervilha', img: 'img/ervilha.jpg', price: 6.29 },
  { id: 61, name: 'Milho', img: 'img/milho.jpg', price: 3.99 },
  { id: 62, name: 'Beterraba', img: 'img/beterraba.jpg', price: 3.79 },
  { id: 63, name: 'Nabo', img: 'img/nabo.jpg', price: 2.79 },
  { id: 64, name: 'Rabanete', img: 'img/rabanete.jpg', price: 3.29 },
  { id: 65, name: 'Acelga', img: 'img/acelga.jpg', price: 4.29 },
  { id: 66, name: 'Agrião', img: 'img/agriao.jpg', price: 5.29 },
  { id: 67, name: 'Almeirão', img: 'img/almeirao.jpg', price: 4.99 },
  { id: 68, name: 'Mostarda', img: 'img/mostarda.jpg', price: 3.79 },
  { id: 69, name: 'Salsão', img: 'img/salsao.jpg', price: 4.29 },
  { id: 70, name: 'Aspargo', img: 'img/aspargo.jpg', price: 8.29 },
  { id: 71, name: 'Alcachofra', img: 'img/alcachofra.jpg', price: 9.29 },
  { id: 72, name: 'Inhame', img: 'img/inhame.jpg', price: 5.79 },
  { id: 73, name: 'Mandioca', img: 'img/mandioca.jpg', price: 4.79 },
  { id: 74, name: 'Batata Doce', img: 'img/batata-doce.jpg', price: 3.79 },
  { id: 75, name: 'Gengibre', img: 'img/gengibre.jpg', price: 7.29 },
  { id: 76, name: 'Açafrão', img: 'img/acafrao.jpg', price: 8.29 },
  { id: 77, name: 'Coentro', img: 'img/coentro.jpg', price: 3.29 },
  { id: 78, name: 'Salsa', img: 'img/salsa.jpg', price: 3.29 },
  { id: 79, name: 'Cebolinha', img: 'img/cebolinha.jpg', price: 2.99 },
  { id: 80, name: 'Manjericão', img: 'img/manjericao.jpg', price: 4.49 },
  { id: 81, name: 'Alecrim', img: 'img/alecrim.jpg', price: 5.49 },
  { id: 82, name: 'Louro', img: 'img/louro.jpg', price: 6.49 },
  { id: 83, name: 'Orégano', img: 'img/oregano.jpg', price: 5.99 },
  { id: 84, name: 'Tomilho', img: 'img/tomilho.jpg', price: 6.99 },
  { id: 85, name: 'Hortelã', img: 'img/hortela.jpg', price: 4.99 },
  { id: 86, name: 'Sálvia', img: 'img/salvia.jpg', price: 5.49 },
  { id: 87, name: 'Endro', img: 'img/endro.jpg', price: 6.49 },
  { id: 88, name: 'Estragão', img: 'img/estragao.jpg', price: 7.49 },
  { id: 89, name: 'Pimenta', img: 'img/pimenta.jpg', price: 3.99 },
  { id: 90, name: 'Pimenta do Reino', img: 'img/pimenta-do-reino.jpg', price: 4.99 },
  { id: 91, name: 'Cominho', img: 'img/cominho.jpg', price: 5.99 },
  { id: 92, name: 'Canela', img: 'img/canela.jpg', price: 6.99 },
  { id: 93, name: 'Cravo', img: 'img/cravo.jpg', price: 7.99 },
  { id: 94, name: 'Noz Moscada', img: 'img/noz-moscada.jpg', price: 8.99 },
  { id: 95, name: 'Cardamomo', img: 'img/cardamomo.jpg', price: 9.99 },
  { id: 96, name: 'Anis Estrelado', img: 'img/anis-estrelado.jpg', price: 10.99 },
  { id: 97, name: 'Gergelim', img: 'img/gergelim.jpg', price: 6.49 },
  { id: 98, name: 'Linhaça', img: 'img/linhaca.jpg', price: 5.49 },
  { id: 99, name: 'Chia', img: 'img/chia.jpg', price: 7.49 },
  { id: 100, name: 'Quinoa', img: 'img/quinoa.jpg', price: 8.49 },
  { id: 101, name: 'Aveia', img: 'img/aveia.jpg', price: 4.99 },
  { id: 102, name: 'Arroz Integral', img: 'img/arroz-integral.jpg', price: 5.99 },
  { id: 103, name: 'Feijão', img: 'img/feijao.jpg', price: 3.99 },
  { id: 104, name: 'Lentilha', img: 'img/lentilha.jpg', price: 4.99 },
  { id: 105, name: 'Grão de Bico', img: 'img/grao-de-bico.jpg', price: 6.99 },
  { id: 106, name: 'Ervilha Seca', img: 'img/ervilha-seca.jpg', price: 5.99 },
  { id: 107, name: 'Soja', img: 'img/soja.jpg', price: 4.49 },
  { id: 108, name: 'Trigo', img: 'img/trigo.jpg', price: 3.49 },
  { id: 109, name: 'Cevada', img: 'img/cevada.jpg', price: 5.49 },
  { id: 110, name: 'Centeno', img: 'img/centeno.jpg', price: 6.49 },
  { id: 111, name: 'Milho de Pipoca', img: 'img/milho-de-pipoca.jpg', price: 4.79 },
  { id: 112, name: 'Amendoim', img: 'img/amendoim.jpg', price: 6.29 },
  { id: 113, name: 'Castanha de Caju', img: 'img/castanha-de-caju.jpg', price: 11.99 },
  { id: 114, name: 'Azeitona', img: 'img/azeitona.jpg', price: 7.79 },
  { id: 115, name: 'Picles', img: 'img/picles.jpg', price: 6.79 },
  { id: 116, name: 'Palmito', img: 'img/palmito.jpg', price: 9.79 },
  { id: 117, name: 'Cogumelo', img: 'img/cogumelo.jpg', price: 8.79 },
  { id: 118, name: 'Alcaparra', img: 'img/alcaparra.jpg', price: 7.99 },
  { id: 119, name: 'Tomate Seco', img: 'img/tomate-seco.jpg', price: 8.49 },
  { id: 120, name: 'Azeite de Oliva', img: 'img/azeite-de-oliva.jpg', price: 14.99 },
  { id: 121, name: 'Vinagre', img: 'img/vinagre.jpg', price: 4.49 },
  { id: 122, name: 'Mostarda (Condimento)', img: 'img/mostarda-condimento.jpg', price: 5.49 },
  { id: 123, name: 'Ketchup', img: 'img/ketchup.jpg', price: 3.99 },
  { id: 124, name: 'Maionese', img: 'img/maionese.jpg', price: 4.99 },
  { id: 125, name: 'Molho de Soja', img: 'img/molho-de-soja.jpg', price: 6.99 },
  { id: 126, name: 'Mel', img: 'img/mel.jpg', price: 9.99 },
  { id: 127, name: 'Geleia', img: 'img/geleia.jpg', price: 7.49 },
  { id: 128, name: 'Doce de Leite', img: 'img/doce-de-leite.jpg', price: 8.49 },
  { id: 129, name: 'Manteiga', img: 'img/manteiga.jpg', price: 6.29 },
  { id: 130, name: 'Queijo Minas', img: 'img/queijo-minas.jpg', price: 12.99 },
  { id: 131, name: 'Queijo Mussarela', img: 'img/queijo-mussarela.jpg', price: 13.99 },
  { id: 132, name: 'Queijo Parmesão', img: 'img/queijo-parmesao.jpg', price: 15.99 },
  { id: 133, name: 'Queijo Gouda', img: 'img/queijo-gouda.jpg', price: 14.49 },
  { id: 134, name: 'Queijo Provolone', img: 'img/queijo-provolone.jpg', price: 13.49 },
  { id: 135, name: 'Iogurte Natural', img: 'img/iogurte-natural.jpg', price: 5.79 },
  { id: 136, name: 'Leite', img: 'img/leite.jpg', price: 3.79 },
  { id: 137, name: 'Ovos', img: 'img/ovos.jpg', price: 6.99 },
  { id: 138, name: 'Pão Integral', img: 'img/pao-integral.jpg', price: 7.99 },
  { id: 139, name: 'Pão de Forma', img: 'img/pao-de-forma.jpg', price: 6.49 },
  { id: 140, name: 'Biscoito Integral', img: 'img/biscoito-integral.jpg', price: 8.99 },
  { id: 141, name: 'Barra de Cereal', img: 'img/barra-de-cereal.jpg', price: 4.29 },
  { id: 142, name: 'Suco de Laranja', img: 'img/suco-de-laranja.jpg', price: 6.99 },
  { id: 143, name: 'Suco de Maçã', img: 'img/suco-de-maca.jpg', price: 5.99 },
  { id: 144, name: 'Água de Coco', img: 'img/agua-de-coco.jpg', price: 7.49 },
  { id: 145, name: 'Chá Verde', img: 'img/cha-verde.jpg', price: 8.49 },
  { id: 146, name: 'Café', img: 'img/cafe.jpg', price: 10.99 },
  { id: 147, name: 'Cacau em Pó', img: 'img/cacau-em-po.jpg', price: 9.49 },
  { id: 148, name: 'Chocolate Amargo', img: 'img/chocolate-amargo.jpg', price: 11.49 },
  { id: 149, name: 'Chocolate ao Leite', img: 'img/chocolate-ao-leite.jpg', price: 10.49 },
  { id: 150, name: 'Farinha de Trigo Integral', img: 'img/farinha-de-trigo-integral.jpg', price: 6.79 }
];

// Função para salvar o carrinho no cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Define a data de expiração
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${JSON.stringify(value)};${expires};path=/`; // Salva o cookie
}

// Função para ler cookies
function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
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
    const productList = document.getElementById('products-list');
    productList.innerHTML = ''; // Limpa a lista antes de renderizar novamente

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src=${product.img} alt=${product.name}>
            <h3>${product.name}</h3>
            <p>R$ ${product.price.toFixed(2)}</p>
            <button class="add-to-cart" data-id="${product.id}">Adicionar ao Carrinho</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Função para adicionar um produto ao carrinho
function addToCart(productId) {
    const cart = loadCart();
    const product = products.find(p => p.id === productId);

    if (product) {
        const cartItem = cart.find(item => item.id === productId);
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
    setCookie('cart', cart, 7); // Salva o carrinho por 7 dias
}

// Função para carregar o carrinho do cookie
function loadCart() {
    return getCookie('cart') || []; // Retorna o carrinho ou um array vazio se não houver cookie
}

// Função para renderizar o carrinho
function renderCart() {
    const cart = loadCart();
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    
    cartItems.innerHTML = ''; // Limpa os itens do carrinho antes de renderizar novamente

    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `${item.name} x ${item.quantity} - R$ ${(item.price * item.quantity).toFixed(2)}`;
        cartItems.appendChild(cartItem);

        total += item.price * item.quantity;
    });

    totalPrice.innerText = total.toFixed(2);
}

// Função para limpar o carrinho
function clearCart() {
    deleteCookie('cart');
    renderCart();
}

// Função para exibir/ocultar o banner de cookies
function handleCookieConsent() {
    const cookieConsent = getCookie('cookieConsent');
    const cookieBanner = document.getElementById('cookie-banner');

    if (!cookieConsent) {
        cookieBanner.style.display = 'block'; // Exibe o banner de cookies
    }

    // Ao clicar em "Aceitar", armazenamos a permissão de cookies
    document.getElementById('accept-cookies').addEventListener('click', () => {
        setCookie('cookieConsent', 'true', 365); // Cookie válido por 365 dias
        cookieBanner.style.display = 'none'; // Oculta o banner
    });

    // Ao clicar em "Recusar", não armazenamos nada
    document.getElementById('decline-cookies').addEventListener('click', () => {
        cookieBanner.style.display = 'none'; // Oculta o banner
    });
}

// Inicializa a página
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderCart();
    handleCookieConsent();

    // Adicionar evento de clique nos botões "Adicionar ao Carrinho"
    document.getElementById('products-list').addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
        }
    });

    // Evento de limpar o carrinho
    document.getElementById('clear-cart').addEventListener('click', clearCart);
});