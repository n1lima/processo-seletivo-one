//Desafios da aula 2 - Funções

/* 1- Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.*/

function imc(altura, peso){
    if(altura <= 0 || peso <= 0){
        return "Altura e peso devem ser maiores que zero!";
    }
    let calculo = peso / (altura*altura);
    return calculo.toFixed(2);
}

console.log(imc(1.62, 54));

/* 2- Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.*/

function fatorial(num){
    let calculo_fato = 1;
    for (let i = 1; i <= num ; i++) {
       calculo_fato *= i;
    }
    return calculo_fato;
}
console.log(fatorial(3))