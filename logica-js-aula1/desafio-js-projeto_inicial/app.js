alert('Boas Vindas ao Jogo do Número Secreto');
let numeroMaximo = 3000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);

let resposta;
let tentativas = 1;


//enquanto a resposta não for igual ao número secreto
while (resposta != numeroSecreto){
    let resposta = prompt(`Escolha um número entre 1 a ${numeroMaximo}`);
    
    if(resposta == numeroSecreto){
        break;
    }else{
        if (resposta > numeroSecreto){
            alert(`O número secreto é menor que ${resposta}`);
        } else{
            alert(`O número secreto é maior que ${resposta}`);
        }
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentaiva'
alert(`Resposta Correta! o número secreto é ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
