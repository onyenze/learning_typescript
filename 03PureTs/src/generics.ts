const scores : Array<number> = []
const names : Array<string> = []

function identityOne(val:boolean | number):boolean|number{
    return val
}

function identityTwo(val:any):any {
    return val
}

function identityThree<Type>(val:Type):Type{
    return val
}

identityThree(3)
identityThree("3")

function identityFour<T>(val:T):T{
    return val
}

interface Bootle {
    brand:string,
    type:number
}

// identityFour<Bottle>({})

function getSomeProducts<T>(products:T[]):T{
    // do some database calculations
    return products[3]
}

const getMoreProducts = <T>(products:T[]):T => {
    // DO SOME DB CALCULATIONS
    return products[2]
}


function anotherFunction<T,U extends string>(val1 : T, val2:  U):object{
    return{
        val1,
        val2
    }
}

anotherFunction(1,"3")

interface Database {
    connection : string
    username :  string
    password :  string 
}

function anotherFunctional<T,U extends Database>(val1 : T, val2:  U):object{
    return{
        val1,
        val2
    }
}

anotherFunctional(1,{ connection : "string",
    username :  "string",
    password :  "string" })




interface Quiz {
    name:string
    type : string
}

interface Course {
    name : string
    author : string
    subject : string
}

class Sellable<T>{
    public cart : T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}