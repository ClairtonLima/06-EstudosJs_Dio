//Comparar Pessoa
class pessoa{
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
function compararPessoa(p1, p2) {
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`)
    }
}

const clairton = new Pessoa('clairton', 42);
const fabiane = new Pessoa('Fabiane', 41);

compararPessoa(clairton, fabiane)