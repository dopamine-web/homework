// Замыкание

// const x = 10;

// function func1() {
//     const x = 10;
//     return function () {
//         return x * 2;
//     };
// }

// function func2(funArg) {
//     const x = 20;
//     funArg();
// }

// func2(func1);

// const func2 = func1();
// console.log(func2());

//=====================//

const useCounter = () => {
    let count = 0;

    const increment = () => {
        return ++count;
    };

    const decrement = () => {
        return --count;
    };

    return {
        increment,
        decrement
    };
}

const counter = useCounter();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.increment());
