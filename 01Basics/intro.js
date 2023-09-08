// Typescript throws an error immediately you try to access a property that doesn't existΩ
var user = { name: "Chibueze", age: 10 };
// let email = user.email
var newName = user.name;
// Typescript still lets you carry out some expressions when you haven't fully declared the type
var numberOne = 3;
var numberTwo = "3";
var sum = numberOne + numberTwo;
console.log("Chibueze");
console.log(user.name);
