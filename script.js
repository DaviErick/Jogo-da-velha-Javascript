var numerosIndisponiveis = [];
function clicar(num, posicao) {
    num.innerHTML = 'X';
    numerosIndisponiveis.push(posicao)
    oponente();
}
console.log(numerosIndisponiveis);

function oponente(){
	var numeroAleatorio = Math.floor(Math.random() * 9) + 1;
	numerosIndisponiveis.push(numeroAleatorio);
	alert(numeroAleatorio);
	var o = document.querySelector('.n' + numeroAleatorio);
	o.innerHTML = 'O';

}