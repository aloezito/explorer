const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnInput = document.querySelector("#btn-input")
const btnReset = document.querySelector("#btn-reset")

let randomNumber = Math.round(Math.random() * 10)
let attempts = 1
console.log(randomNumber)

function handleValue(event) {
  event.preventDefault()

  const inputValue = document.querySelector("#inputValue")
  console.log(inputValue.value)

  if (Number(inputValue.value) == randomNumber) {
    screen1.classList.add("hide")
    screen2.classList.remove("hide")
    if (attempts == 1) {
      screen2.querySelector("h2").innerText = `Acertou de primeira!`
    } else {
      screen2.querySelector("h2").innerText = `Acertou em ${attempts} tentativas!`
    }
  }
  document.querySelector("#inputValue").value = ""
  attempts++
}

function playAgain() {
  screen1.classList.remove("hide")
  screen2.classList.add("hide")
  attempts = 1
  randomNumber = Math.round(Math.random() * 10)
  console.log(randomNumber)
}

btnInput.addEventListener("click", handleValue)
btnReset.addEventListener("click", playAgain)
