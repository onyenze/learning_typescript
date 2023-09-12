"use strict";
const scores = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
identityThree(3);
identityThree("3");
function identityFour(val) {
    return val;
}
// identityFour<Bottle>({})
function getSomeProducts(products) {
    // do some database calculations
    return products[3];
}
const getMoreProducts = (products) => {
    // DO SOME DB CALCULATIONS
    return products[2];
};
function anotherFunction(val1, val2) {
    return {
        val1,
        val2
    };
}
anotherFunction(1, "3");
function anotherFunctional(val1, val2) {
    return {
        val1,
        val2
    };
}
anotherFunctional(1, { connection: "string",
    username: "string",
    password: "string" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
