{
  // Transformar string em number e vice-versa
  console.log("Activity 1")

  let string = "123"
  console.log(string)
  console.log(Number(string))
  let number = 456
  console.log(number)
  console.log(String(number))
}
{
  // Contar caracteres em uma palavra e digitos num numero
  console.log(" ")
  console.log("Activity 2")

  let word = "Pterodatilo"
  console.log(word.length)
  let number = 1234
  console.log(String(number).length)
}
{
  // Transformar numero quebrado para 2 casas decimais e trocar ponto por virgula
  console.log(" ")
  console.log("Activity 3")

  let number = 1234.56123456
  console.log(number.toFixed(2).replace(".", ","))
}
{
  // Transformar letras maiusculas em minusculas e vice-versa
  console.log(" ")
  console.log("Activity 4")

  let word = "Programar é muito bacana!"
  console.log(word.toUpperCase())
  console.log(word.toLowerCase())
}
{
  // Separe um texto que contem espaços em um array, onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque "_"
  console.log(" ")
  console.log("Activity 5")

  let phrase = "Eu quero viver o amor!"
  let myArray = phrase.split(" ")
  console.log(myArray)
  let phraseUnderscored = myArray.join("_")
  console.log(phraseUnderscored.toLowerCase())
}
{
  // Verificar se um texto contém a palavra "Amor"
  console.log(" ")
  console.log("Activity 6")

  let phrase = "Eu quero viver o Amor!"
  console.log(phrase.includes("Amor"))
}
{
  // Criar um array com constructor
  console.log(" ")
  console.log("Activity 7")

  let myArray = new Array("a", "b", "c")
  console.log(myArray)
}
{
  // Contar os elementos de um array
  console.log(" ")
  console.log("Activity 8")

  let myArray = ["a", "b", "c"]
  console.log(myArray.length)
}
{
  // Transformar uma cadeia de caracteres em elementos de um array
  let word = "manipulação"
  console.log(Array.from(word))
}
{
  // Manipulação de Arrays
  console.log(" ")
  console.log("Activity 9")
  let techs = ["html", "css", "js"]

  // Adicionar um item no fim
  techs.push("nodejs")
  // Adicionar um item no começo
  techs.unshift("sql")
  // Remover item do fim
  /* techs.pop() */
  // Remover item do começo
  /* techs.shift() */
  // Pegar somente alguns elementos do Array
  /* console.log(techs.slice(1, 3)) */
  // Remover 1 ou mais items em quaquer posição do Array
  /* techs.splice(0, 2) */
  // Encontrar a posição de um elemento no Array
  let index = techs.indexOf("css")

  console.log(techs)
}
