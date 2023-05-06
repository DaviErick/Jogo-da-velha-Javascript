var numerosIndisponiveis = [];

function clicar(num, posicao) {
  num.innerHTML = 'X';
  oponente();
}

function oponente(){
	var numeroAleatorio = Math.floor(Math.random() * 9) + 1;
	numerosIndisponiveis.push(numeroAleatorio);
	alert(numeroAleatorio);
	o.innerHTML = 'O';

function oponente() {
  var numeroAleatorio;
  do {
    numeroAleatorio = Math.floor(Math.random() * 9) + 1;
  } while (numerosIndisponiveis.includes(numeroAleatorio));
  
  numerosIndisponiveis.push(numeroAleatorio);
  alert(numeroAleatorio);
  var o = document.querySelector('.n' + numeroAleatorio);
  o.innerHTML = 'O';
}