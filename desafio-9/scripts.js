// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
/* alert("Hello World") */

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
/* let n1 = Number(prompt("Digite o primeiro número"))
let n2 = Number(prompt("Digite o segundo número"))
function sum(num1, num2) {
  return num1 + num2
}
alert(`O resultado da soma é: ${sum(n1, n2)}`) */

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
// Metodo 1
/* let isNumber = typeof myNumber == "number" ? true : false
if (isNumber) {
  alert("É um número!")
} else {
  alert("Não é um número!")
} */
// Metodo 2
/* let myVar = prompt("Digite um número")
if (isNaN(myVar)) {
  alert(`"${myVar}" não é um número`)
} else {
  alert(`"${myVar}" é um número`)
} */

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
/* let myVar = "texto"
let isString = typeof myVar == "string" ? true : false
if (isString) {
  alert("É uma string")
} else {
  alert("Não é uma string")
} */

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
/* let myVar = false
let isBoolean = typeof myVar == "boolean" ? true : false
if (isBoolean) {
  alert("É um boolean")
} else {
  alert("Não é um boolean")
} */

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
/* let n1 = prompt("Digite o primeiro número")
let n2 = prompt("Digite o segundo número")
if (isNaN(n1) || isNaN(n2)) {
  alert("Digite somente números!")
} else {
  function sub(num1, num2) {
    return num1 - num2
  }
  alert(`O resultado da subtração entre ${n1} e ${n2} é ${sub(n1, n2)}`)
} */

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
/* let n1 = prompt("Digite o primeiro número")
let n2 = prompt("Digite o segundo número")
if (isNaN(n1) || isNaN(n2)) {
  alert("Digite somente números!")
} else {
  function mult(num1, num2) {
    return num1 * num2
  }
  alert(`O resultado da multiplicação entre ${n1} e ${n2} é ${mult(n1, n2)}`)
} */

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
/* let n1 = prompt("Digite o primeiro número")
let n2 = prompt("Digite o segundo número")
if (isNaN(n1) || isNaN(n2)) {
  alert("Digite somente números!")
} else {
  function div(num1, num2) {
    return num1 / num2
  }
  alert(`O resultado da divisão entre ${n1} e ${n2} é ${div(n1, n2)}`)
} */

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
/* let myVar = prompt("Digite um número")
if (isNaN(myVar)) {
  alert("Digite somente números!")
} else {
  let evenOrOdd = myVar % 2 == 0 ? true : false
  if (evenOrOdd) {
    alert(`${myVar} é um número par`)
  } else {
    alert(`${myVar} é um número ímpar`)
  }
} */

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
/* let myVar = prompt("Digite um número")
if (isNaN(myVar)) {
  alert("Digite somente números!")
} else {
  let evenOrOdd = myVar % 2 == 0 ? true : false
  if (evenOrOdd) {
    alert(`${myVar} é um número par`)
  } else {
    alert(`${myVar} é um número ímpar`)
  }
} */
