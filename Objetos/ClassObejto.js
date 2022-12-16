// classe
class Pessoa{
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }
     descrever(){
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
     }
}
//instancia de objeto
const usuario = new Pessoa("Clairton", 42)
const clairton = new Pessoa('Fabiane', 41)




usuario.descrever();
clairton.descrever()

console.log(clairton)