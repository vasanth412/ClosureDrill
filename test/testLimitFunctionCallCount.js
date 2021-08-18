let limitFunctionCallCount = require("../limitFunctionCallCount.js");

function callBack(testValue1, testValue2){
    let result = testValue1*testValue2;
    return result;
}

const n = 2
const getFunc = limitFunctionCallCount(callBack, n);
console.log(getFunc(2, 2, 3, 5));
console.log(getFunc(2, 5));
console.log(getFunc(2, 2));