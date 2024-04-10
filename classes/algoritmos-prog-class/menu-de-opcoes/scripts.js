let itemList = []
let listCount = 0
let userOption = prompt(`Olá usuário! Digite o número da opção desejada:

1. Cadastrar um item na lista
2. Mostrar itens cadastrados
3. Sair do programa`)

while (userOption != 3) {
  if (userOption == 1) {
    let item = prompt(`Digite o item que deseja adicionar a sua lista:
> Digite 'Sair' para sair`)
    if (item != "Sair" || item != "sair") {
      itemList[listCount] = " " + item
      listCount++
    } else {
      userOption = prompt(`Digite o número da opção desejada:

1. Cadastrar um item na lista
2. Mostrar itens cadastrados
3. Sair do programa`)
    }
  } else if (userOption == 2) {
    if (listCount == 0) {
      alert("Não existem itens cadastrados!")
      userOption = prompt(`Digite o número da opção desejada:

1. Cadastrar um item na lista
2. Mostrar itens cadastrados
3. Sair do programa`)
    } else {
      alert(itemList)
      userOption = prompt(`Digite o número da opção desejada:

1. Cadastrar um item na lista
2. Mostrar itens cadastrados
3. Sair do programa`)
    }
  } else {
    alert("Opção Invalida!")
    userOption = prompt(`Digite o número da opção desejada:

1. Cadastrar um item na lista
2. Mostrar itens cadastrados
3. Sair do programa`)
  }
}
alert("Obrigado por usar a minha lista!")
