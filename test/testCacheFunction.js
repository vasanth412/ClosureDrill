let cacheFunction = require("../cacheFunction.js");

function callBack(a,b, ...args){
    return a*b;
}

let getFunc = cacheFunction(callBack);
console.log(getFunc(2, 3));
console.log(getFunc(3, 3));
console.log(getFunc(1, 3, 8 ,9));
console.log(getFunc(3, 3));
console.log(getFunc(5, 3));
console.log(getFunc(3, 3));