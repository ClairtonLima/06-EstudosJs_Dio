//Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 a 100
// Faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior valor
//sorteado
// dados de entrada:
/*
5-10-50-98-23
saida
98
*/

const  {gets,print} = require('./FuncoesAuxuliares');

/*print(gets());
print(gets());
print(gets());
print(gets());
print(gets());
*/
const numerosSorteados = [];
for (let i = 0; i < 5; i++) {
    const numerosSorteado = gets();
    numerosSorteados.push(numerosSorteado);
    
}
//print(numerosSorteados)
let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numerosSorteado = numerosSorteados[i];
    if(numerosSorteado > maiorValor){
        maiorValor = numerosSorteado;
    }
    
}

print(maiorValor)