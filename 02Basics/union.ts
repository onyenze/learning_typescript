let bomb : string | number = 33

bomb = 33

bomb = "29"

type User = {
    name:string
    id:number
}
type Admin = {
    username:string
    id:number
}

let chibueze : User | Admin = {name:"chibu",id:123}
chibueze = {username:"bimb",id:123}


function getDbId(id:number | string){
    // making API calls
    console.log(`id is ${id}`);
}
getDbId(2)
getDbId("3")

function getBomb (id:number | string){
    if (typeof id === "string") {
        id.toLowerCase()
    }
}


// array
const data : number[]=[1,2,3]
const data1 : string[]=["1","2","3"]
const data2 : (number | string)[]=[1,"2","3"]



let seatAllotment : "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "frank"

export{}