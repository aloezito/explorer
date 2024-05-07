const heading = document.querySelector(".title")
const cookieButtonImg = document.querySelector(".cookie")
const cookieOpenImg = document.querySelector(".open-cookie")
const cookiePhrase = document.querySelector(".cookie-phrase")
const playAgainButton = document.querySelector(".again")
var oldNumber
var phraseNumber

function openTheCookie() {
  heading.innerText = "Aqui está a sua sorte de hoje:"
  cookieButtonImg.classList.add("hide")
  cookieOpenImg.classList.add("open")
  cookiePhrase.classList.add("open")
  playAgainButton.classList.add("open")
}

function phraseRandomizer() {
  phraseNumber = Math.floor(Math.random() * 4)
  if (phraseNumber != oldNumber) {
    switch (phraseNumber) {
      case 0:
        cookiePhrase.innerText = "Não ser amado é falta de sorte, mas não amar é a própria infelicidade."
        break
      case 1:
        cookiePhrase.innerText = "Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar."
        break
      case 2:
        cookiePhrase.innerText = "Tente a sua sorte! A vida é feita de oportunidades. O homem que vai mais longe é aquele que tem coragem de arriscar."
        break
      case 3:
        cookiePhrase.innerText = "A perseverança é a mãe da boa sorte."
        break
    }
  } else {
    phraseRandomizer()
  }
}

function playAgain() {
  heading.innerText = "Qual é a sua sorte de hoje?"
  cookiePhrase.innerText = "Abra o biscoito e descubra!"
  cookieButtonImg.classList.remove("hide")
  cookieOpenImg.classList.remove("open")
  cookiePhrase.classList.remove("open")
  playAgainButton.classList.remove("open")
}

cookieButtonImg.onclick = () => {
  openTheCookie()
  phraseRandomizer()
}

playAgainButton.onclick = () => {
  playAgain()
  oldNumber = phraseNumber
}

function randomPhrase() {
  let phraseNumber = Math.floor(Math.random() * 4)

  switch (phraseNumber) {
    case 0:
  }
}
