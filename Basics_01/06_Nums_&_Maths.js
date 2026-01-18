const age = 21;
console.log(age)

const num = new Number(100)
console.log(num)

console.log(num.toString().length)
console.log(num.toFixed(2))

const newNum = 23.456465
console.log(newNum.toPrecision(3))

const rupees = 1000000
console.log(rupees.toLocaleString('en-In'))

// MATHS

console.log(Math)
console.log(Math.abs(-5))
console.log(Math.round(4.5))
console.log(Math.ceil(4.9))
console.log(Math.floor(4.9))
console.log(Math.min(4,5,8,1))
console.log(Math.max(4,5,8,1))

console.log(Math.random())
console.log((Math.random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random()* (max - min + 1) * min))
