
// IMC COM FUNÇÕES
function calcularImc(peso, altura){
    return peso/ Math.pow(altura,2);
}
function classificarImc(imc){
    if (imc < 18.5){
        return   'Clasificado como Abaixo do peso';
    }else if(imc >= 18.5 && imc <= 25){
        return  'Clasificado como Peso Normal';
    }else if(imc >= 25 && imc <= 30){
        return  'Clasificado como Acima do peso';
    }else if (imc >= 30 && imc <= 40){
        return  'Clasificado como Obeso';
    }else if (imc > 40){
        return  'Obesidade Grave';
    }return
}
(function (){//função anonima
    const peso = 75;
    const altura = 1.75;
    const imc = calcularImc(peso, altura);
    console.log("Seu IMC é: " + imc.toFixed(2));
    console.log(classificarImc(imc));
})();//função imediatamente invocada

