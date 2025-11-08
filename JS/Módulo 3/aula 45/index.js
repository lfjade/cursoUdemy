const pontuacaoUsuario = 100
// if (pontuacaoUsuario >= 1000){
//     console.log("Usuario vip")
// } else {
//     console.log("Usuario normal")
// }

const nivelUsuario = pontuacaoUsuario>=1000 ? 'Usuário vip.' : 'Usuário normal.'

const corUsuario = 'Pink'

const corPadrao = corUsuario || 'Preta'

console.log(nivelUsuario, corPadrao)