let birthYear = prompt('Enter birth year:')
const now = new Date()
let age = now.getFullYear() - parseInt(birthYear)
age >= 18
    ? alert(`You are ${age}. You are old enough to drive`)
    : alert(`You are ${age}. You will be allowed to drive after ${18 - age} years.`)