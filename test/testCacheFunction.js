let cacheFunction = require("../cacheFunction.js");

function callBack(a,b, ...args){
    return a*b;
}

let getFunc = cacheFunction(callBack);
getFunc(2, 3);
getFunc(3, 3);
getFunc(1, 3, 8 ,9);
getFunc(2, 4);
getFunc(5, 3);
console.log(getFunc(3, 3));