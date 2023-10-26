var createCounter = function(n) {
    return () => n ++;
}

const counter = createCounter(0);
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

function CounterFun(start)  {
    return function(n) {
        return start + n;  
    }
}

const counterFun = CounterFun(0);
console.log(counterFun(1)); // 1
console.log(counterFun(10)); // 10

const implictCounter = (n) => () => n++;

const counterFun2 = implictCounter(0);

console.log(counterFun2()); // 0
console.log(counterFun2()); // 1
