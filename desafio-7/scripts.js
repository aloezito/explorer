const students = [
  {
    name: "Jessica",
    firstGrade: 8,
    secondGrade: 5.5,
    sex: "F",
  },
  {
    name: "Daniel",
    firstGrade: 9,
    secondGrade: 8,
    sex: "M",
  },
  {
    name: "Felipe",
    firstGrade: 6,
    secondGrade: 5,
    sex: "M",
  },
  {
    name: "Rafaela",
    firstGrade: 10,
    secondGrade: 8,
    sex: "F",
  },
]

let studentsNames = []
let studentsFirstGrade = []
let studentsSecondGrade = []
let studentsAverageGrade = []
let studentsIsApproved = []
let studentsSex = []

for (let student of students) {
  studentsNames.push(student.name)
  studentsFirstGrade.push(student.firstGrade)
  studentsSecondGrade.push(student.secondGrade)
  studentsSex.push(student.sex)
}

for (let index = 0; index < students.length; index++) {
  studentsAverageGrade[index] = (studentsFirstGrade[index] + studentsSecondGrade[index]) / 2
  if (studentsAverageGrade[index] >= 7) {
    studentsIsApproved[index] = true
  } else {
    studentsIsApproved[index] = false
  }
}

for (let index = 0; index < students.length; index++) {
  if (studentsIsApproved[index] == true) {
    if (studentsSex[index] == "M") {
      alert(`A média do aluno ${studentsNames[index]} é: ${studentsAverageGrade[index]}
Parabéns ${studentsNames[index]}, você foi aprovado!`)
    } else {
      alert(`A média da aluna ${studentsNames[index]} é: ${studentsAverageGrade[index]}
Parabéns ${studentsNames[index]}, você foi aprovada!`)
    }
  } else {
    if (studentsSex[index] == "M") {
      alert(`A média do aluno ${studentsNames[index]} é: ${studentsAverageGrade[index]}
Não foi dessa vez ${studentsNames[index]}, boa sorte na proxima vez!`)
    } else {
      alert(`A média da aluna ${studentsNames[index]} é: ${studentsAverageGrade[index]}
Não foi dessa vez ${studentsNames[index]}, boa sorte na proxima vez!`)
    }
  }
}
