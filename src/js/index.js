console.log(document.getElementById("btn-avancar"));

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

btnAvancar.addEventListener("click", function(){
    const ehUltimoCartao = cartaoAtual ===cartoes.length -1;
    

    if(cartaoAtual === cartoes.length -1 ) return;
    
    
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado")
    
    
    
    cartaoAtual++;
    cartoes[cartaoAtual].classList.add("selecionado");

});

btnVoltar.addEventListener("click", function(){
    const ehPrimeiroCartao = cartaoAtual === 0;

    if(cartaoAtual === 0) return;
       
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado")
    
    
    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado");

});