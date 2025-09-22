function sum(num1, num2) {
    // const sum = num1 + num2; -->
    return num1 + num2;
    // console.log(sum)
}   

// sumAndLog(10, 5);
// sumAndLog(20, 7);
// const result = sum(3, 4); --> так же можно не использовать переменную и сразу вывести в консоль
// console.log(result)

function isEven(num) {
    // if (num % 2 === 0) {
    //     return true;
    // } else {
    //     return false;
    // }   --> сокращённый вариант
    return num % 2 === 0;
}
// console.log(isEven(result)); --> можно так же использовать вызов функции внутри функции
console.log(isEven(sum(3, 4)));

//=============================

function getFactorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i; 
    }
    return factorial;
}

// console.log(getFactorial(5));
// console.log(getFactorial(1)); 
// console.log(getFactorial(3));
const factorial = getFactorial(1);

// стрелочнач функция

const getFactorial = (num) => {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i; 
    }
    return factorial;
}

const is0dd = num => {
    return num % 2 !== 0;
}
// const is0dd = num => num % 2 !== 0; --> ещё более сокращённый вариант

console.log(is0dd(factorial));

// IIFE - Immediately Invoked Function Expression
(function log(x) {
    console.log(x)
})  ("Log");  // немедленно вызываемая функция
