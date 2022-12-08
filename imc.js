const peso = 87.50;
const altura = 1.70;
const imc = peso/ Math.pow(altura,2);
console.log(" Seu IMC é: " + imc.toFixed(2));

if (imc < 18.5){
    console.log("Seu IMC é:" + imc.toFixed(2) + " Clasificado como Abaixo do peso");
}else if(imc >= 18.5 && imc <= 25){
    console.log("Seu IMC é:" + imc.toFixed(2) + " Clasificado como Peso Normal");
}else if(imc >= 25 && imc <= 30){
    console.log("Seu IMC é:" + imc.toFixed(2) + " Clasificado como Acima do peso");
}else if (imc >= 30 && imc <= 40){
    console.log("Seu IMC é:" + imc.toFixed(2) + " Clasificado como Obeso");
}else if (imc > 40){
    console.log("Seu IMC é:" + imc.toFixed(2) + " Clasificado como Vá se tratar....oi. Você ainda ta ai...acho qeue ta morto!!!!");
}
    
