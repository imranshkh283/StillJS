var createHelloWorld1 = function() {
    return function(...args){
        return `hello World`;
    }
}
const f = createHelloWorld1();
console.log(f());

const createHelloWorld2 = function (){
    return () => `Hello World`;
}

const f1 = createHelloWorld2();
console.log(f1());

const createHelloWorld3 = () => { return () => `Hello World`; }
const createHelloWorld4 = () => () => `Hello World`;

const f2 = createHelloWorld3();
console.log(f2());

const Closure = () => {
    const str = `Hello Wolrd`;

    return () => {
        return str
    }
}

const f3 = Closure();
console.log(f3());
