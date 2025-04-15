function criaPessoa (nome, sobrenome, idade){
    return {
        nome:nome,
        sobrenome:sobrenome,
        idade:idade
    }
}

const pessoa1 = criaPessoa ('Jade', 'Fernandes', 29)

console.log(pessoa1.nome)

const pessoa2 = {
    nome: "Johann",
    sobrenome: "Ossanes",
    idade: 30,

    fala (){
        console.log(`Olá, meu nome é ${this.nome}`)
    },

    incrementaIdade(){
        ++this.idade
    }
}

pessoa2.fala()
console.log(pessoa2.idade)
pessoa2.incrementaIdade()
console.log(pessoa2.idade)