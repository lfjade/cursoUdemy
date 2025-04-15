const numero = Number(prompt("Digite um número: "))
const numeroTitulo = document.getElementById("numero-titulo")
const texto = document.getElementById("texto")
numeroTitulo.innerHTML = numero;

numeroTitulo.innerHTML = numero;
console.log('Número recebido:', numero);

texto.innerHTML = '';
texto.innerHTML += `<p>A raiz quadrada é ${Math.sqrt(numero)}</p>`;
texto.innerHTML += `<p>É inteiro: ${Number.isInteger(numero)}</p>`;
texto.innerHTML += `<p>${numero} é NaN: ${isNaN(numero)}</p>`;
texto.innerHTML += `<p>Arredondado pra baixo: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondado pra cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;