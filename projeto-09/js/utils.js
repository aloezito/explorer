export function notANumber(value) {
  return isNaN(value) || value == ""
}

export function IMC(weight, height) {
  return Number((weight / (height / 100) ** 2).toFixed(2))
}
