let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function botao(){
    console.log('O botão foi clicado');
}

function alerta(){
    console.log('Eu amo JS');
}

function pedirCidade(){
   let cidade = prompt('Escreva o nome de uma cidade');
   alert(`Estive em ${cidade} e lembrei de você`);
}

function soma(){
    let num1 = Number(prompt('Escreva um número inteiro'));
    let num2 = Number(prompt("Escreva outro número inteiro"));
   
    alert(`A soma deu: ${num1 +  num2}`)
}