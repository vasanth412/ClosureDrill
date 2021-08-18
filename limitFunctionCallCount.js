    // Should return a function that invokes `cb`.
    // The returned function should only allow `cb` to be invoked `n` times.
    // Returning null is acceptable if cb can't be returned

function limitFunctionCallCount(cb, n) {
    let check = 0;
    return function sayHi(a, b){
        if(check < n){
            check+=1;
        return cb(a, b);
     }
    }
}

module.exports = limitFunctionCallCount;
