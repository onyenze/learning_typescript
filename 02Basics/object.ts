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
type User = {
    name:string
    email:string
    isActive:boolean
}

function createNewUser(user:User):{name:string,email:string,isActive:boolean}{
    return {name:"",email:"",isActive:false}
}

createNewUser({name:"",email:"",isActive:false})

export{}