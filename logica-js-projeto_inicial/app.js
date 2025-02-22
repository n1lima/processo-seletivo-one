//Desafio 
//1. Criar uma função que exibe "Olá, mundo!" no console.
function exibirOlaMundo(){
    console.log('Olá, mundo!');
}
exibirOlaMundo();

//2. Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirNome(nome){
    console.log(`Olá, ${nome}`);
}
exibirNome('Eduarda')

//3. Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobro(num){
    console.log(num*2);
}
dobro(3);

//4. Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media(nums){
    let soma = 0;

    for (let i = 0; i < nums.length; i++) {
        soma +=  nums[i];
    }
    let media = soma/nums.length;
    console.log(media.toFixed(2));
}

lista = [2, 5, 7];
media(lista);

//5. Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNum(num1, num2){
    let maior = 0
    if (num1 > num2){
        maior = num1;
    }else{
        maior = num2;
    }
    console.log(maior);
}

maiorNum(4, 10);

//6. Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiNum(num){
    console.log(num*num);
}

multiNum(2);