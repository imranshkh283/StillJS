const createCounter = init => {
    const reset = init;
    return {
        increament  :   () => ++init,
        decreament  :   () => --init,
        reset       :   () => init = reset ,
    }
}

const counter = createCounter(10);
console.log(counter.increament()); // 11
console.log(counter.increament()); // 12
console.log(counter.increament()); // 13
console.log(counter.decreament()); // 12
console.log(counter.reset());      // 10
