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

{
    name = "Ksb",
    age = 21
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