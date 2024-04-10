const patients = [
  {
    name: "Felipe",
    age: 22,
    height: 190,
    weight: 80,
    sex: "M",
  },
  {
    name: "Amanda",
    age: 23,
    height: 165,
    weight: 55,
    sex: "F",
  },
  {
    name: "Daniel",
    age: 26,
    height: 185,
    weight: 80,
    sex: "M",
  },
]

let patientsNames = []
let patientsAges = []
let patientsHeights = []
let patientsWeights = []
let patientsSex = []
let patientsIMC = []

for (let patient of patients) {
  patientsNames.push(patient.name)
  patientsAges.push(patient.age)
  patientsHeights.push(patient.height)
  patientsWeights.push(patient.weight)
  patientsSex.push(patient.sex)
  patientsIMC.push((patient.weight / (patient.height / 100) ** 2).toFixed(2))
}

/* for (let index = 0; index < patients.length; index++) {
  if (patientsSex[index] == "F") {
    alert(`A paciente ${patientsNames[index]} tem ${patientsAges[index]} anos, mede ${patientsHeights[index]}cm de altura e pesa ${patientsWeights[index]}kg.`)
  } else {
    alert(`O paciente ${patientsNames[index]} tem ${patientsAges[index]} anos, mede ${patientsHeights[index]}cm de altura e pesa ${patientsWeights[index]}kg.`)
  }
} */

for (let index = 0; index < patients.length; index++) {
  if (patientsSex[index] == "F") {
    alert(`O IMC da paciente ${patientsNames[index]} é ${patientsIMC[index]}.`)
  } else {
    alert(`O IMC do paciente ${patientsNames[index]} é ${patientsIMC[index]}.`)
  }
}
