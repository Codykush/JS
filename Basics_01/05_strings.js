const name = "Kushagra"
const age = 21

console.log(`My name is ${name} and my age is ${age}`)

const newName = new String('Kushagra')

console.log(newName[0])
console.log(newName.__proto__)

console.log(newName.length)
console.log(newName.toUpperCase)
console.log(newName.charAt(2))
console.log(newName.indexOf('s'))

const newString = newName.substring(0,5)
console.log(newString)

const newMyString = "  KSB  "
console.log(newMyString)
console.log(newMyString.trim())
console.log(newMyString.includes('SB'))

const url = "https://instagram.com/ksb@thakur2k7"

console.log(url.replace('@','_'))