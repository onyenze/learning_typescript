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
        this._courseCount = 1;
        this.city = "bomb";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than One");
        }
        this._courseCount = courseNum;
    }
}
class subUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCount() {
        this._courseCount = 0;
    }
}
const chibueze = new User("chibu", "boss@gmail.com");
// chibueze.deleteToken()
// chibueze.city = "ha"
