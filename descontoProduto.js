const precoEtiqueta = 100;
const formaPagemento = 4;

if(formaPagemento === 1){
    console.log( precoEtiqueta - (precoEtiqueta * 0.10))
}else if(formaPagemento === 2){
    console.log( precoEtiqueta - (precoEtiqueta * 0.15))
}else if(formaPagemento === 3){
    console.log(precoEtiqueta);
}else if(formaPagemento){
    console.log( precoEtiqueta + (precoEtiqueta * 0.10))
}
