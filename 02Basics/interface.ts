interface User {
    readonly dbId:number
    name:string,
    userId:number,
    googleId?:number
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponName:string, value:number):number
}

// reopening interface
interface User {
    githubToken:string
}

// interface extension 
interface Admin extends User {
    role:"admin" | "labor" | "ta"
}



const chibueze : Admin = {dbId:23, name:"chibu",userId:123,githubToken:"git",role:"labor",
    startTrail:()=>{
        return "trial started"
    },
    getCoupon:(name:"hitesh",off:101)=>{
        return 6
    }
}

export{}