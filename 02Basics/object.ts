let user:object

user = {
    name : "chibu",
    email : "chibu@gmail.com",
    isActive : true
}

function createUser({name:string,isPaid:boolean}){}
let newUser = {name:"chibu",isPaid:false,email:"chibu@gmail.com"}
createUser(newUser)



function createCourse():{name:string,price:number}{
    return {name:"reactjs",price:300}
}

// type Aliasing
type newUser = {
    name:string
    email:string
    isActive:boolean
}

function createNewUser(user:newUser):{name:string,email:string,isActive:boolean}{
    return {name:"",email:"",isActive:false}
}

createNewUser({name:"",email:"",isActive:false})



type User = {
    readonly _id:string
    name:string
    email:string
    isActive:boolean
    creditCardDetails?:number
}

let myUser: User = {
    _id:"1234",
    name:"chibu",
    email:"chibu@gmail.com",
    isActive:false
}

type cardNumber = {
    cardnumber:string
}
type cardDate = {
    carddate:string
}

type cardDetails = cardNumber & cardDate & {
    cvv:string
}


myUser.email = "bub@gmail.com"
// myUser._id = "9090"

export{}