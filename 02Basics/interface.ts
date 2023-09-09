interface User {
    readonly dbId:number
    name:string,
    userId:number,
    googleId?:number
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponName:string, value:number):number
}

const chibueze :User = {dbId:23, name:"chibu",userId:123,
    startTrail:()=>{
        return "trial started"
    },
    getCoupon:(name:"hitesh",off:101)=>{
        return 6
    }
}