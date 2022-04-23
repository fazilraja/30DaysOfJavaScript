//Day 3

3 == '3' //true
3 === '3' //false, === checks value and data type unlike == that check ==

//Tenary Operators, allows to write condition, like if else??

let isRaining = true
isRaining 
    ? console.log('You need a rain coat')
    : console.log("no need for raint coat")

isRaining = false

//so if true goes to ? line and if false goes to : line
isRaining 
    ? console.log('You need a rain coat')
    : console.log("no need for raint coat")

//prompt creates a box where user can enter data
let number = prompt('Enter number', 'number goes here')
console.log(number)

//The confirm() method displays a dialog box with a specified message,
//along with an OK and a Cancel button. A confirm box is often used to ask 
//permission from a user to execute something. Window confirm() takes a string as an argument. 
//Clicking the OK yields true value, whereas clicking the Cancel button yields false value.
const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // result will be true or false based on what you click on the dialog box

const now = new Date()
console.log(now) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)

console.log(now.getFullYear()) // 2020

console.log(now.getMonth()) // 0, because the month is January,  month(0-11)

console.log(now.getDate()) // 4, because the day of the month is 4th,  day(1-31)

console.log(now.getDay()) // 6, because the day is Saturday which is the 7th day
//  Sunday is 0, Monday is 1 and Saturday is 6
// Getting the weekday as a number (0-6)

const allSeconds = Date.now() //
console.log(allSeconds) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) // true

const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56