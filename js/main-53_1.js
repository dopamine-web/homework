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
    return averageAge / users.length ;
}

console.log(getUserAverageAge(users));

// Задание 3.

function getAllAdmins(users) {
    return users.filter(user => user.isAdmin === true )
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

