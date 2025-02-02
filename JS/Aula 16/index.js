/* Luiz Otávio Miranda tem 30 anos, pesa 84 kg
Tem 1,8 de altura e seu IMC é de 25.
Luiz Otávio nasceu em <ano de nascimento>* */
const nome = 'Luiz Otávio'
const sobrenome = 'Miranda'
const idade = 30
const peso = 84
const altura = 1.8
let IMC // peso/(altura*altura)
let anoNascimento // ano atual-idade

IMC = peso/(altura*altura)
anoNascimento = 2025-idade
 console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg.`)
 console.log(`Tem ${altura} e seu IMC é de ${IMC}.`)
 console.log(`${nome} nasceu em ${anoNascimento}.`)