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


class createCounter{

    constructor(init){
        this.init = init;
        this.presentCount = init;
    }
    increament() {
        this.presentCount += 1;
        return this.presentCount;
    }
    decrement(){
        this.presentCount -= 1;
        return this.presentCount;
    }
    initialDecreament() {
        return --this.init;
    }
    reset() {
        this.presentCount = this.init;
        return this.presentCount;
    }
}

const counter = new createCounter(5);
console.log(counter.increament());                //  6
console.log(counter.increament());                // 7
console.log(counter.initialDecreament());         // 4
console.log(counter.increament());                // 8
console.log(counter.increament());                // 9
console.log(counter.increament());                // 10
console.log(counter.increament());                // 11
console.log(counter.decrement());                 // 10
console.log(counter.initialDecreament());         // 3
