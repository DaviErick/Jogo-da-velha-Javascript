var numerosIndisponiveis = [];
var posicaoX = [];
var posicaoY = [];

function clicar(num, posicao) {
  num.innerHTML = 'X';
  numerosIndisponiveis.push(posicao);
  posicaoX.push('.n' + posicao);
  if (numerosIndisponiveis.length < 9){
    oponente();
    verificaVitoria();
  } if((numerosIndisponiveis.length >= 9)) {
    verificaVitoria();
    empate();
  }
}

function oponente() {
  var numeroAleatorio;
  do {
    numeroAleatorio = Math.floor(Math.random() * 9) + 1;
  } while (numerosIndisponiveis.includes(numeroAleatorio));
  numerosIndisponiveis.push(numeroAleatorio);
  var o = document.querySelector('.n' + numeroAleatorio);
  o.innerHTML = 'O';
  posicaoY.push('.n' + numeroAleatorio);
}

function verificaVitoria() {
  if ((posicaoX.includes('.n1') && posicaoX.includes('.n2') && posicaoX.includes('.n3')) ||
     (posicaoX.includes('.n4') && posicaoX.includes('.n5') && posicaoX.includes('.n6')) ||
     (posicaoX.includes('.n7') && posicaoX.includes('.n8') && posicaoX.includes('.n9')) ||
     (posicaoX.includes('.n1') && posicaoX.includes('.n5') && posicaoX.includes('.n9')) ||
      (posicaoX.includes('.n1') && posicaoX.includes('.n4') && posicaoX.includes('.n7')) ||
      (posicaoX.includes('.n2') && posicaoX.includes('.n5') && posicaoX.includes('.n8')) ||
      (posicaoX.includes('.n3') && posicaoX.includes('.n5') && posicaoX.includes('.n7')) ||
       (posicaoX.includes('.n3') && posicaoX.includes('.n6') && posicaoX.includes('.n9'))) {
    alert('O X ganhou');
    empate(e);
  } if 
  ((posicaoY.includes('.n1') && posicaoY.includes('.n2') && posicaoY.includes('.n3')) ||
     (posicaoY.includes('.n4') && posicaoY.includes('.n5') && posicaoY.includes('.n6')) ||
     (posicaoY.includes('.n7') && posicaoY.includes('.n8') && posicaoY.includes('.n9')) ||
     (posicaoY.includes('.n1') && posicaoY.includes('.n5') && posicaoY.includes('.n9')) ||
      (posicaoY.includes('.n1') && posicaoY.includes('.n4') && posicaoY.includes('.n7')) ||
      (posicaoY.includes('.n2') && posicaoY.includes('.n5') && posicaoY.includes('.n8')) ||
      (posicaoY.includes('.n3') && posicaoY.includes('.n5') && posicaoY.includes('.n7')) ||
       (posicaoY.includes('.n3') && posicaoY.includes('.n6') && posicaoY.includes('.n9'))) {
    alert('O Y ganhou');
    empate(e);
  } 
  
}
function empate(e){
    alert('Empate')
    e.stopPropagation(e);
  }