let itens = [];

document.querySelector('input[type=submit]').addEventListener('click', ()=>{
    let nomeProduto = document.querySelector('input[name=informacaoProduto]');
    let precoProduto = document.querySelector('input[name=informacaoPreco]');

    itens.push(
        {
            nome: nomeProduto.value,
            preco: precoProduto.value
        }
    )

    let listaProdutos = document.querySelector('.lista-produtos');
    let soma = 0;

    listaProdutos.innerHTML = "";
    itens.map((val)=>{
        soma+=parseFloat(val.preco);

        listaProdutos.innerHTML+=`
        <div class="produto">
            <div class="marcacao">
                <span class="material-icons ok">
                    check_circle_outline
                </span>
                <span class="material-icons delete">
                    delete
                </span>
            </div>
            <h3> ${val.nome} </h3>
            <h3 class="preco-produto"><span> R$ ${val.preco} </span></h3>
        </div>
        `
    })

    soma = soma.toFixed(2);
    nomeProduto.value = "";
    precoProduto.value = ""; 

    let elementoSoma = document.querySelector('.soma-produto h1');
    elementoSoma.innerHTML = `Total R$ ${soma}`;
    elementoSoma.style.display = "block";

})