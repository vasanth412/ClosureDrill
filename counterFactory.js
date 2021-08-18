function counterFactory(){
    let count = 5;
    let obj = {
        increment(){
            return ++count;
        },
        decrement(){
            return --count;
        }
    }
    return obj;
}

module.exports = counterFactory;