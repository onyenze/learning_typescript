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

    protected _courseCount = 1

    readonly city:string = "bomb"
    constructor(
        public  name : string, 
        public email : string) {
    }


    private deleteToken(){
        console.log("Token deleted");
        
    }

    get getAppleEmail():string {
        return `apple${this.email}`}   
        
        
    get  courseCount():number {
        return this._courseCount
    }

    set courseCount(courseNum){
        if (courseNum <=1) {
           throw new Error("Course count should be more than One") 
        }
        this._courseCount= courseNum
    }
    }


class subUser extends User{
    isFamily : boolean = true
    changeCount (){
        this._courseCount = 0
    }
}


const chibueze = new User("chibu","boss@gmail.com")

// chibueze.deleteToken()

// chibueze.city = "ha"