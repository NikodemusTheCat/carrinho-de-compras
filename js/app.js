//Recuperar infos (nome, valor, qnt)
//calcular o preço (valor * qnt)
//adc ao carrinho
//atualizar valor total após uma adição ao carrinho
let totalCarrinho = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$0';

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');

    // Verificar se o produto e a quantidade são válidos
    if (!produto || produto.trim() === "") {
        alert("Selecione um produto em estoque.");
        return;
    }

    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    if(confirm(`Adicionar ${quantidade}x ${nomeProduto}ao carrinho?`)) {
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
        </section>`;

        totalCarrinho = totalCarrinho + preco;
        let totalImpresso = document.getElementById('valor-total');
        totalImpresso.textContent = `R$ ${totalCarrinho}`;

        document.getElementById('quantidade').value = '';
    }
}

function limpar() {
    totalCarrinho = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = 'R$0';
}