/*
1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça {

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?
*/

let indice = 13
let soma = 0
let k = 0

while (k < indice) {
    k = k +1

    soma = soma + k
}

console.log(soma)

// R = a resposta do valor da variavel no final do processamento será 91