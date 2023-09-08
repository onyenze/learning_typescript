// Typescript throws an error immediately you try to access a property that doesn't existΩ
let user = {name : "Chibueze", age : 10}

// let email = user.email
let newName = user.name


// Typescript still lets you carry out some expressions when you haven't fully declared the type
let numberOne = 3

let numberTwo = "3"

let sum = numberOne + numberTwo



console.log("Chibueze");

console.log(user.name)


export {}

