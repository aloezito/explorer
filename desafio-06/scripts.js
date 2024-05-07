let numberOne = Number(prompt("Digite o primeiro numero"))
let numberTwo = Number(prompt("Digite o segundo numero"))
let numSum = numberOne + numberTwo
let numSub = numberOne - numberTwo
let numMult = numberOne * numberTwo
let numDiv = numberOne / numberTwo
let numRest = numberOne % numberTwo
let numEvenOdd
let numEquals

alert(`A soma dos dois números é: ${numSum}
A subtração dos dois números é: ${numSub}
A multiplicação dos dois números é: ${numMult}
A divisão dos dois números é: ${+numDiv.toFixed(2)}
O resto da divisão dos dois números é: ${numRest}
`)

if (numSum % 2 == 0) {
  numEvenOdd = true
} else {
  numEvenOdd = false
}

if (numEvenOdd == true) {
  alert(`A soma dos dois números resultou em: ${numSum}. Que é um número par!`)
} else {
  alert(`A soma dos dois números resultou em: ${numSum}. Que é um número ímpar!`)
}

if (numberOne == numberTwo) {
  numEquals = true
} else {
  numEquals = false
}

if (numEquals == true) {
  alert(`Os dois números inseridos (${numberOne} e ${numberTwo}) são iguais!`)
} else {
  alert(`Os dois números inseridos (${numberOne} e ${numberTwo}) são diferentes!`)
}
