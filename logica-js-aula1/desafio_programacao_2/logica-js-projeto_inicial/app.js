//Desafio 1 - Verificação do dia da semana
dia_semana = prompt('Qual dia da semana é hoje?').toUpperCase();
console.log(dia_semana);

if (dia_semana == 'SABADO' || dia_semana == 'DOMINGO'){
    alert('Bom fim de semana!');
}else{
    alert('Boa Semana!');
}

//Desafio 2 - Verificação do número negativo ou positivo
numero = prompt('Digite um número aleatório:');
console.log(numero);

if (numero < 0){
    alert('O número digitado é negativo');
}else{
    alert('O número digitado é positivo');
}

//Desafio 3 - Sistema de Pontuação
pontuacao = prompt('Digite sua pontuação no jogo?');
console.log(pontuacao)

if (pontuacao >= 100){
    alert('Parabéns, você venceu!');
}else{
    alert('Tente novamente para ganhar');
}

//Desafio 4 - Mensagem do saldo
