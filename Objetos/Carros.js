/*
Crie uma classe para representar carros
os carros possuem uma MARCA , COR E  gasto medio de combustivel por km
crie um metodo que dado a quantidade de quilometros e o preco do comustvel nos de o valor gasto
em reais para realizr um percuso
*/

class Carros{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoPercuso(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }


}


const uno = new Carros('Fiat', 'Prata', 1/12);
console.log(uno.calcularGastoPercuso(70, 5));

const palio = new Carros('Fiat', 'Preto', 1/10);
console.log(palio.calcularGastoPercuso(70, 5))

