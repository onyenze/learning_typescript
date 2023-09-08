"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "Hello"
}
var newValue = addTwo(2);
console.log(newValue);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("chibu");
function signUp(name, email, isPaid) { }
signUp("chibu", "chibu@gmail.com", false);
function loginUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}
loginUser("me", "me@gmail.com");
// function getVal(val:number):string {
//     if(val > 5){
//         return true;
//     }
//     return "200 ok"
// }
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
var me = heros.map(function (hero) {
    return "my favorite is ".concat(hero);
});
console.log(me);
