let counterFactory = require("../counterFactory.js");

let getFunc = counterFactory();
console.log(getFunc.increment());
console.log(getFunc.decrement());