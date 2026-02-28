const sinais = [
    {
        id: 1,
        nome: "Sinal de Igual (=)",
        preco: 9.99,
        descricao: "Nunca utilizado em uma P3 de cálculo.",
        imagem: "https://media.istockphoto.com/id/1298309734/pt/vetorial/equal-icon-equivalent-vector.jpg?s=612x612&w=0&k=20&c=lRIlKcawrx5cWdpANNCqUcvyODl0kUqv1rdJLSBR4X8=" 
    {
        id: 2,
        nome: "Sinal de Mais (+)",
        preco: 15.50,
        descricao: "Bom para encher linguiça na prova.",
        imagem: "https://static.vecteezy.com/ti/vetor-gratis/p1/9684280-vector-sinal-do-simbolo-mais-esta-isolado-em-um-fundo-branco-mais-icone-cor-editavel-vetor.jpg"
    },
    {
        id: 3,
        nome: "Sinal de Menos (-)",
        preco: 12.00,
        descricao: "Útil para chutar os mesmos valores só que com sinal trocado.",
        imagem: "https://static.vecteezy.com/ti/vetor-gratis/p1/2205870-icone-de-sinal-de-menos-vetor.jpg"
    },
    {
        id: 4,
        nome: "Sinal de Divisão (/)",
        preco: 42.00,
        descricao: "Faz você sentir que está perto da resposta certa (mesmo tendo errado a primeira linha).",
        imagem: "https://cdn-icons-png.flaticon.com/512/43/43694.png"
    }
];
let carrinhoCount = 0;
const cartElement = document.getElementById('cart-count');

function atualizarCarrinho(valor) {
    carrinhoCount += valor;
    if (carrinhoCount < 0) carrinhoCount = 0;
    cartElement.innerText = carrinhoCount;
}
let carrinhoCount = 0;
const cartElement = document.getElementById('cart-count');

function atualizarCarrinho(valor) {
    carrinhoCount += valor;
    if (carrinhoCount < 0) carrinhoCount = 0;
    cartElement.innerText = carrinhoCount;
}
const container = document.getElementById('product-container');

function renderizarProdutos() {
    sinais.forEach(sinal => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        card.innerHTML = `
            <img src="${sinal.imagem}" alt="${sinal.nome}">
            <h3>${sinal.nome}</h3>
            <p>${sinal.descricao}</p>
            <p class="price">R$ ${sinal.preco.toFixed(2)}</p>
            <button onclick="atualizarCarrinho(1)">Adicionar</button>
            <button onclick="atualizarCarrinho(-1)">Remover</button>
        `;
        
        container.appendChild(card);
    });
}