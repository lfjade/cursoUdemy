const form = document.querySelector('#formulario')

form.addEventListener('submit', function(e){
    e.preventDefault();
    // console.log("Evento previnido.")
    const inputPeso = e.target.querySelector('#input-peso')
    const inputAltura = e.target.querySelector('#input-altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)
    //setResultado(123) //< chamada da função setresultado com parâmetro = msg 
    if(!peso) return setResultado("Peso inválido.", false) 
    if(!altura) return setResultado("Altura inválida.", false)

    const imc = getImc(peso, altura)
    const nivelImc = getNivel(imc)

    const msg = `Seu IMC é ${imc} | ${nivelImc}`
    setResultado(msg, true)
})

function getNivel(imc){
    const nivel = ['Abaixo do peso', 'Peso """""normal"""""', 'Sobre gostosa', 'Ultra gostosa grau 1', 'Ultra gostosa grau 2', 'Ultra gostosa grau 3']

    if (imc>=39.9) return nivel[5]
    if (imc>=34.9) return nivel[4]
    if (imc>=29.9) return nivel[3]
    if (imc>=24.9) return nivel[2]
    if (imc>=18.5) return nivel[1]
    if (imc<18.5) return nivel[0]
    
}

function criaP () {
    const p = document.createElement('p') // "create element é as chavinhas <> ?"
    return p
}

function setResultado (msg, isValid){
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML=''
    const p = criaP()
    
    if(isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }
    p.innerHTML=msg
    resultado.appendChild(p)
} // essa função quando chamada com um argumento "msg" transforma toda a div de id 'resultado' em 'msg'.

function getImc (peso, altura){
    const imc = peso/(altura**2)
    return imc.toFixed(2)
}
/**
 * ações:
 * capturar entrada das variaveis do formulario
 * retornar valor da tabela conforme o resultado do imc
 */