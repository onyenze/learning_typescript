"use strict";
// class User {
//     name :string
//     email:string
//     private readonly city:string = "bomb"
//     constructor(name : string, email : string) {
//         this.name = name
//         this.email = email  
//         this.city = "come"
//     }
// }
// const chibueze = new User("chibu","boss@gmail.com")
// chibueze.city = "ha"
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this._coursecount = 1;
        this.city = "bomb";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get coursecount() {
        return this._coursecount;
    }
    set coursecount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than One");
        }
        this._coursecount = courseNum;
    }
}
const chibueze = new User("chibu", "boss@gmail.com");
// chibueze.deleteToken()
// chibueze.city = "ha"
