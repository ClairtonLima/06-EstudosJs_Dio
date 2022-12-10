//Escreva uma função para saber se você é maior de idade
// 1- se sua idade for menor de 18 anos
// 2 - se for maior de 18 anos

function saberMaioridde(idade){
    if(idade <= 17 ){
        return 'Você é memor de 18 ano. Não pode beber.';
    }else if ( idade >= 18){
        return 'Você é maior de idade. Pode beber';
    }
}
(function (){
    const idade = 16;
    console.log("Sua idade é " + idade + " anos");
    console.log(saberMaioridde(idade));
})();