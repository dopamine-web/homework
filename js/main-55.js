// Map и Filter

// 1 пример Map
const numbers = [1, 2, 3, 4, 5, 6];

const newNumbers = numbers.map(function (number) {
    return number * 2; // каждое число умножает на 2
})

console.log(newNumbers);

// 2 пример Map
let users = [
    { name: 'Alex', age: 24, isAdmin: false },
    { name: 'Bob', age: 13, isAdmin: false },
    { name: 'John', age: 31, isAdmin: true },
    { name: 'Jane', age: 20, isAdmin: false },
]

users = users.map((user) => {
    user.isAdmin = true;
    return users;
})
console.log(users); // все стали админами

// 1 пример Filter
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

// 2 пример Filter
const admins = users.filter(user => user.isAdmin);
console.log(admins);