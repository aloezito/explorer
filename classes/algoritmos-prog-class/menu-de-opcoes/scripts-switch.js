let itemList = []
let listCount = 0
let userOption
let item

while (userOption != 3) {
  userOption = Number(
    prompt(`Olá usuário! Digite o número da opção desejada:

1. Cadastrar um item na lista
2. Mostrar itens cadastrados
3. Sair do programa`)
  )
  switch (userOption) {
    case 1:
      item = prompt(`Digite o item que deseja adicionar a sua lista:
> Digite 'Sair' para sair`)
      while (item != "sair" && item != "Sair") {
        itemList[listCount] = " " + item
        listCount++
        item = prompt(`Digite o item que deseja adicionar a sua lista:
> Digite 'Sair' para sair`)
      }
      break
    case 2:
      if (listCount == 0) {
        alert("Não existem itens cadastrados!")
      } else {
        alert(itemList)
      }
      break
    case 3:
      alert("Obrigado por usar a minha lista!")
      break
    default:
      alert("Opção Invalida!")
  }
}
