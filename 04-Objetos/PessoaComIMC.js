//                                 DESAFIO
/*
crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso, altura
As pessoas devem ter a capacidade de dizer o valor de seu IMC
Instacie uma pessoa chamada Jose que tenha 70kg e 1.75 e peça para dizer o valor do seu IMC
*/

class Pessoa{
    nome;
    peso;
    altura;
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura);
    }
    classificarImc(){
        this.calcularImc();
        const imc = this.calcularImc();
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
}

const jose = new Pessoa('José', 70, 1.75)
console.log(jose.calcularImc().toFixed(2));

const clairton = new Pessoa("Clairton", 72, 1.70);
console.log(clairton.classificarImc());

