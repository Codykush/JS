const myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);


const myCreatedNEWdATE = new Date(2026,0,19)

console.log(myCreatedNEWdATE);
console.log(myCreatedNEWdATE.toString());
console.log(myCreatedNEWdATE.toLocaleString());

const newDate = new Date()

console.log(newDate)
console.log(newDate.getTime())
console.log(newDate.getMonth())
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

const S = `${newDate.getDay()} and the time is ${newDate.getTime()}`
console.log(S)

newDate.toLocaleString('default', {
    weekday: "long"
})
