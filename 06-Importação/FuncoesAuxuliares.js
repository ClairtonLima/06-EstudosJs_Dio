
const entradas = [5,10,23,50,98];
let i = 0;

function gets(){
    const valor = entradas[i];
    i++
    return valor;
}

function print (texto){
    console.log(texto);
}

//Para exportar alguma coisa

module.exports = {gets, print};

//molule.exports.gets = gets;
    
    
