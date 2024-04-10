// Expressões e Operadores

/* 
- Expressions
- Operators
    Unary
    Binary
    Ternary
*/

{
  console.log("Activity 1")
  // Operators
  // Unary  |  Binary  |  Ternary
  let number = 5
  let bool = true
  // Unary - 1 valor ou elemento
  console.log(++number, --number)
  // Binary - 2 valores ou elementos
  console.log(number + 1, number - 1)
  // Ternary - 3 valores ou elementos
  console.log(bool ? "verdade" : "falso")
}
{
  console.log(" ")
  console.log("Activity 2")
  // Expression "New"
  let name = new String("Aloe")
  name.surName = "Youme"
  let age = new Number(23)
  let date = new Date("2000-04-14")
  console.log(name, name.surName, age, date)
}
{
  console.log(" ")
  console.log("Activity 3")
  // Unary Operators - "tipeof"  |  "delete"
  const person = {
    name: "Aloe",
    age: 23,
  }
  console.log(typeof person)
  console.log(person)
  delete person.age
  console.log(person)
}
{
  console.log(" ")
  console.log("Activity 4")
  // Operadores Aritiméticos
  // Multiplicação *
  console.log(3.2 * 5.5)
  // Divisão /
  console.log(12.5 / 2)
  // Soma +
  console.log(34.7 + 21.3)
  // Subtração -
  console.log(75.2 - 14.7)
  // Resto da divisão %
  let remainder
  remainder = 26 % 9
  console.log(remainder)
  // Incremento ++
  let increment = 0
  increment++
  console.log(increment)
  // Decremento --
  let decrement = 10
  decrement--
  console.log(decrement)
  // Exponencial **
  console.log(3 ** 3)
}
{
  console.log(" ")
  console.log("Activity 5")
  // Grouping operator ( )
  let total = (2 + 3) * 5
  console.log(total)
}
{
  console.log(" ")
  console.log("Activity 6")
  // Operadores de comparação
  let one = 1
  let two = 2
  // Igual a    ==
  console.log(two == 1)
  console.log(one == 1)
  // Diferente de   !=
  console.log(two != 1)
  console.log(one != 1)
}
{
  console.log(" ")
  console.log("Activity 7")
  // Comparação estrita
  let one = 1
  let two = 2
  // Estritamente igual a    ===
  console.log(one === "1")
  console.log(one === 1)
  // Estritamente diferente de    !==
  console.log(two !== "2")
  console.log(two !== 2)
}
{
  console.log(" ")
  console.log("Activity 8")
  // Comparação de diferença
  let one = 1
  let two = 2
  // Maior que    >
  console.log(one > 1)
  // Maior ou igual a    >=
  console.log(one >= 1)
  console.log(two >= 1)
  // Menor que    <
  console.log(one < 1)
  // Menor ou igual a    <=
  console.log(one <= 1)
  console.log(two <= 1)
}
{
  console.log(" ")
  console.log("Activity 9")
  // Operadores de atribuição (Assignment)
  let x
  // Assignment
  x = 1
  // Addition assignment
  // x = x + 2
  x += 2
  // Subtration assignment
  // x = x - 1
  x -= 1
  // Multiplication assignment
  // x = x * 2
  x *= 2
  // Division assigment
  // x = x / 2
  x /= 2
  //Remainder | Exponential
  // x %= 2
  // x **= 2

  console.log(x)
}
{
  console.log(" ")
  console.log("Activity 10")
  // Logical operators
  let pao = true
  let queijo = true
  // AND    &&
  console.log(pao && queijo)
  // OR    ||
  console.log(pao || queijo)
  // NOT    !
  // true vira false e false vira true
  console.log(!pao)
}
{
  console.log(" ")
  console.log("Activity 11")
  // Operador condicional (Ternary)
  // condition ? if : else
  // additionally you can do "elseif" using another condition on the "else" spot => condition ? if : elseif(condition) ? if : else
  // Exemplo 1 = Café da manhã
  let pao = true
  let queijo = true
  const niceBreakfast = pao && queijo ? "Café top" : pao || queijo ? "Café bom" : "Café ruim"
  console.log(niceBreakfast)

  // Exemplo 2 = Maior que 18
  let age = 16
  const canDrive = age >= 18 ? "Can drive" : "Can't Drive"
  console.log(canDrive)
}
{
  console.log(" ")
  console.log("Activity 12")
  // String operators
  // Comparison
  console.log("a" == "a")
  // Concatenation
  console.log("a" + "b")
}
{
  console.log(" ")
  console.log("Activity 13")
  // Type conversion vs Type coersion
  // FALSY
  // Quando um valor é considerado "false" em contextos onde um booleano é obrigatório
  let falsy = false // false | 0 | -0 | "" | null | undefined | NaN
  console.log(falsy ? "verdadeiro" : "falso")

  // TRUTHY
  // Quando um valor é considerado "true" em contextos onde um booleano é obrigatório
  let truthy = true // true | {} | [] | 1 | 3.23 | "stringComAlgoDentro" | "false" | -1 | Infinity | -Infinity
  console.log(truthy ? "verdadeiro" : "falso")
}
