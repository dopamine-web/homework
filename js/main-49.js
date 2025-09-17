// Массивы

const users = [

    {
        name: "Ivan",
        age: 15,
    },
    {
        name: "Alex",
        age: 20,
    },
    {
        name: "Bob",
        age: 35,
    },
]
    
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i].name); 
// }

function sumAllAge(users) {
    let sum = 0;
    for (let i = 0; i < users.length; i++) {
        sum += users[i].age;
    } 
    return sum;
}
console.log(sumAllAge(users));

const numbers = [1, 2, 3, 4, 5];

let sum = 0;

for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);

//  Методы массивов

const numbers2 = [1, 2, 3, 4, 5];

numbers2.slice() // Метод массива, который возвращает часть массива
numbers2.push(10) // добавляет элемент в конец массива
numbers2.pop(); // Удаляет последний элемент массива
numbers2.shift(); // Удаляет первый элемент массива
numbers2.unshift(15); // Добавляет элемент в начало массива
numbers2.at(2); // современный способ, работает так же, как arr[0], но удобнее для отрицательных индексов (arr.at(-1) даёт последний элемент).
// arr[0] — правильный и самый распространённый способ получить первый элемент.
numbers2.reverse(); // Переворачивает массив
// другой способ перебора массива
// function reverseAndLog(array) {
//     console.log(array.reverse());
// }
// reverseAndLog(numbers2);
// console.log(numbers2);

// let sum1 = 0;
// numbers2.forEach(function(number) {
// sum += number;
// }); // Перебирает массив и выполняет функцию для каждого элемента
// console.log(sum1);

// function forEach(array, callbackFunc) {
//     for (let i = 0; i < array.length; i++) {
//         callbackFunc(array[i], i, array);
//     }
// }

// forEach(numbers, function (number) {
//     sum += number;
// })

// console.log(sum)

function sumNumbers(number) {
    sum1 += number;
}
let sum1 = 0;

numbers2.forEach(sumNumbers); 

// .length возвращает количество элементов в массиве.
// способы, позволяющие объявить новый пустой массив.
// const arr = new Array(); || const arr = [];


