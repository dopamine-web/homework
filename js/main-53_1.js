// Задание 1.

const users = [
    { name: 'Alex', age: 24, isAdmin: false },
    { name: 'Bob', age: 13, isAdmin: false },
    { name: 'John', age: 31, isAdmin: true },
    { name: 'Jane', age: 20, isAdmin: false },
]

users.push(
    { name: 'Ann', age: 19, isAdmin: false },
    { name: 'Jack', age: 43, isAdmin: true }
)

console.log(users)

// Задание 2.

function getUserAverageAge(users) {
    let averageAge = 0;
    for (let i = 0; i < users.length; i++) {
        averageAge += users[i].age;
    } 

    // реализацуя препода
    //users.array.forEach(user => {
        //averageAge += user.age
    //});

    return averageAge / users.length ;
}

console.log(getUserAverageAge(users));

// Задание 3.

function getAllAdmins(users) {
    return users.filter(user => user.isAdmin === true )

    // реализацуя препода

    // const admins = [];
    //users.forEach(user => {
    //admins.push(user);
    //});
    //return admins;

    // скоращенный вариант 

    // const admins = [];
    //users.forEach(user => {
    //if (user.isAdmin) admins.push(user)
    //});
    //return admins;
}
console.log(getAllAdmins(users))

// Задание 4.

function first(arr, n) {
    if (n === 0) {
    return [];
    } else if (n === undefined) {
    return [arr[0]];
    } else {
    return arr.slice(0, n);
    }
}

let arr = [10, 20, 30, 40, 50];


console.log(first(arr, 0));
console.log(first(arr, 2));

// Задание 4.реализацуя препода

// function first(arr, n = 1) {
//     const arrLength = arr.length;
//     if (arrLength < n) {
//         console.error(`n(${n}) не может быть меньше длинны массива: ${arrLength}`);
//         return;
//     }

//     const newArr = new Array(n);
//     for (let i = 0; i < n; i++) {
//         newArr[i] = arr[i];
//     }
//     return newArr;
// }

// console.log(first([10, 15, 33, 50, 14], 3));