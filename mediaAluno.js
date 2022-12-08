let nota1 = 10
let nota2 = 10
let nota3 = 10

const media = (nota1 + nota2 + nota3)/3;

if(media <= 5 ){
    console.log("Reprovado")
}else if(media >= 6){
    console.log("recuperação")
}else if(media >= 7){
    console.log("Aprovado")
}else if(media >=8 && media <=10){
    console.log("Parabéns")
}

