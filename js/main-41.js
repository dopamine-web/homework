// Примитивы, Ссылки, Мутации

// const number = 10;
// // console.log(String(number));
// // //или 
// // console.log(typeof number.toString());

// function double(num) {
//     return num * 2;
// }

// double(number);

// const myObj = {
//     test: 123
// };

// function mutateObj(obj) {
//     const newObj = { ...obj };
//     newObj.test = "Hello"
//     console.log(newObj);
// }

// mutateObj(myObj);
// console.log(myObj);

// //===================//

// let myString = "Heelo1";

// function mutateString(str) {
//     str = "Hello2";
// }

// mutateString(myString);
// console.log(myString);


// Callback функции

"use strict";

// const myFunc = function (name) {
//     console.log(name + " func 1");
// };

// const myFunc2 = () => {
//     console.log("log2!");
// };

// function callFunc(func) {
//     const name = "Alex";
//     func(name);
// }

// callFunc(myFunc);
// callFunc(myFunc2);

function checkAge(age, callback) {
    if (age >= 18) {
        callback("Access granted");
    } else {
        callback("Access denied");
    }
} 

function showError() {
    console.error("Error!");
}

function showMessage(message) {
    console.log(message);
}

checkAge(20, showMessage);
checkAge(16, showError);