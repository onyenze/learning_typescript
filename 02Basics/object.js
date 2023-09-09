"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user;
user = {
    name: "chibu",
    email: "chibu@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "chibu", isPaid: false, email: "chibu@gmail.com" };
createUser(newUser);
function createCourse() {
    return { name: "reactjs", price: 300 };
}
function createNewUser(user) {
    return { name: "", email: "", isActive: false };
}
createNewUser({ name: "", email: "", isActive: false });
var myUser = {
    _id: "1234",
    name: "chibu",
    email: "chibu@gmail.com",
    isActive: false
};
myUser.email = "bub@gmail.com";
