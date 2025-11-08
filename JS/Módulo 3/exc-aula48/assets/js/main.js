// const data = new Date('10-7-2019 22:49:00')
// const texto = document.getElementById('texto')

// function diaSemanaTexto(diaSemana) {
//     switch (diaSemana){
//         case 0:
//             return `Domingo`
//             case 1:
//                 return `Segunda`
//                 case 2:
//                     return `Terça`
//         case 3:
//             return `Quarta`
//         case 4:
//             return `Quinta`
//         case 5:
//             return `Sexta`
//         case 6:
//             return `Sábado`
//         default:
//             return `<dia errado>`
//     }
// }

// function mesTexto (mes) {
//     switch(mes){
//         case 0:
//             return `Janeiro`
//         case 1:
//             return `Fevereiro`
//         case 2:
//             return `Março`
//         case 3:
//             return `Abril`
//         case 4:
//             return `Maio`
//         case 5:
//             return `Junho`
//         case 6:
//             return `Julho`
//         case 7:
//             return `Agosto`
//         case 8:
//             return `Setembro`
//         case 9:
//             return `Outubro`
//         case 10:
//             return `Novembro`
//         case 11:
//             return `Dezembro`
//         default:
//             return `<mês inválido>`
        
//     }
// }

// function criaData(data){

//     const diaSemana = data.getDay()
//     const diaMes = data.getDate()
//     const mes = data.getMonth()
//     const ano = data.getFullYear()
//     const hora = data.getHours()
//     const min = data.getMinutes()

//     const diaSemanaStr = diaSemanaTexto(diaSemana)
//     const mesStr = mesTexto(mes)

//     return (`${diaSemanaStr}, ${diaMes} de ${mesStr} de ${ano}.` + 
//         ` ${hora}:${min}`)
// }
// texto.textContent=criaData(data)

const texto = document.getElementById('texto')
const data = new Date('10-7-2019 22:49:00')

const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
}

texto.innerHTML=data.toLocaleString('pt-BR', opcoes)