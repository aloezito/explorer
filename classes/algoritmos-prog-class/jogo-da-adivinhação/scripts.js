let result = prompt("Adivinhe o número que estou pensando. Está entre 0 e 10")
let randomNumber = Math.round(Math.random() * 10)

let tries = 1

if (randomNumber == 0) {
  randomNumber + 1
}

while (Number(result) != randomNumber) {
  alert(randomNumber)
  result = prompt("Errou! Tente novamente:")
  tries++
}

alert(`Parabens! Você acertou em ${tries} tentativas`)
