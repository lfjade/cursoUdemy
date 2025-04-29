function meuEscopo(){
    // criando todo o código dentro de uma função, podemos prevenir que haja conflito de variáveis.
    
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')
    const pessoas = []
    function recebeEventoForm(evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        const pessoa = criaPessoas(nome.value, sobrenome.value, peso.value, altura.value)
        pessoas.push(pessoa)
        console.log(pessoas)
        resultado.innerHTML+= `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }


    function criaPessoas(nome, sobrenome, peso, altura){
        return {nome, sobrenome, peso, altura}
    }

    form.addEventListener('submit', recebeEventoForm)


}

meuEscopo(); // é preciso executar a função pra que os scripts funcionem.