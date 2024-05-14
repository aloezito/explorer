import state from "./state.js"
import { controls } from "./elements.js"
import * as actions from "./actions.js"
import * as el from "./elements.js"
import { updateDisplay } from "./timer.js"

export function registerControls() {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action
    if (typeof actions[action] != "function") {
      return
    }

    actions[action]()
  })
}

export function setMinutes() {
  el.minutes.addEventListener("focus", () => {
    el.minutes.textContent = ""
  })

  el.minutes.onkeypress = (event) => /\d/.test(event.key)
  el.minutes.addEventListener("blur", (event) => {
    let mins = event.currentTarget.textContent
    mins = mins > 60 ? 60 : mins

    state.minutes = mins
    updateDisplay()
    el.minutes.removeAttribute("contenteditable")
    setSeconds()
  })
}

export function setSeconds() {
  el.seconds.addEventListener("focus", () => {
    el.seconds.textContent = ""
  })
  el.seconds.setAttribute("contenteditable", true)
  el.seconds.focus()

  el.seconds.onkeypress = (event) => /\d/.test(event.key)
  el.seconds.addEventListener("blur", (event) => {
    let secs = event.currentTarget.textContent
    secs = secs > 60 ? 60 : secs

    state.seconds = secs
    updateDisplay()
    el.minutes.removeAttribute("contenteditable")
  })
}
