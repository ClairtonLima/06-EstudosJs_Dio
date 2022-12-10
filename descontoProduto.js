// Desconto de Produto

const precoEtiqueta = 100;
const formaPagemento = 2;

function aplicarDesconto(valor, desconto){
    return valor - (valor * (desconto * 0.1))
}

function verificarDesconto(valor, desconto){
    if(formaPagemento === 1){
        console.log( aplicarDesconto(precoEtiqueta * 0.10))
    }else if(formaPagemento === 2){
        console.log( precoEtiqueta - (precoEtiqueta * 0.15))
    }else if(formaPagemento === 3){
        console.log(precoEtiqueta);
    }else if(formaPagemento){
        console.log( precoEtiqueta + (precoEtiqueta * 0.10))
    }
}

