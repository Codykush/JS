// Primitive DataTypes

// 7 Types: Number, String, Boolean, null, Undefined, Symbol, BigInt

const num = 10
const numV = 10.0;
const isValue = true

const isValueTemp = null
let UserMail;

const Id = Symbol('123')
const AnotherId = Symbol('123')

console.log(Id == AnotherId)
console.log(Id === AnotherId)

const bigNum = 21454531354154n

// Reference ( Non- Primitives)

// Arrays,  Objects, Functions


// Arrays
const Name = ["KSB", "Kushagra"];

// Objects

let obj = {
    name: "Ksb",
    age: 21
}

// OR 

let myObj = 
{
    nameO : "Ksb",
    ageO : 21
}

// Functions

const myFunction = function(){
    console.log("Kushagra")
}

console.log(typeof BigInt)
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof bigNum)



// Stack ( Primitive ) ; Heap ( Non-Primitive)

let name = "Kushagra"

let anotherName = name

anotherName = "KSB"
console.log(name)
console.log(anotherName)

let myName=
{
    name : "Kushagra",
    age : 21,
    email : "abc@123"
}

let anotherObj = myName

anotherObj.email = "thakurksb29@gmail.com"

console.log(myName.email)
console.log(anotherObj.email)