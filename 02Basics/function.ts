function addTwo(num:number):number{
    return num + 2
    // return "Hello"
}
let newValue = addTwo(2)

console.log(newValue);


function getUpper(val:string){
    return val.toUpperCase()
}
getUpper("chibu")




function signUp(name:string, email:string, isPaid:boolean){}
signUp("chibu","chibu@gmail.com",false)



function loginUser(name:string,email:string,isPaid:boolean=false){}
loginUser("me","me@gmail.com")


// function getVal(val:number):string {
//     if(val > 5){
//         return true;
//     }
//     return "200 ok"
// }



const getHello = (s:string):string => {
    return ""
}


const heros = ["thor","spiderman","ironman"]

let me = heros.map((hero):string => {
    return `my favorite is ${hero}`
    // return 2
})
console.log(me);



function consoleError(errMsg:string):void{
    console.log(errMsg);  
}


function handleError(msg:string):never{
    throw new Error(`${msg}`)
}

export{}