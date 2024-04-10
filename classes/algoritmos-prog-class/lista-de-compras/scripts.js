let itemList = []

for (let item = 0; item < 10; item++) {
  let itemName = prompt("Digite o item " + (item + 1))

  itemList[item] = " " + itemName
}

alert(itemList)
