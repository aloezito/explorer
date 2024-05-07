export const modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal h2"),
  buttonClose: document.querySelector(".modal button.close"),
  open() {
    modal.wrapper.classList.add("open")
  },
  close() {
    modal.wrapper.classList.remove("open")
  },
}

modal.buttonClose.onclick = () => {
  modal.close()
}

window.addEventListener("keydown", handleKeyDown)
function handleKeyDown(event) {
  if (event.key == "Escape") {
    modal.close()
  }
}
