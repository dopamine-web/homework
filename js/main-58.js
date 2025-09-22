// Reduce и Sort

const products = [
    { title: 'Ноутбук', price: 80000, quantity: 5 },
    { title: 'Смартфон', price: 50000, quantity: 10 },
    { title: 'Планшет', price: 30000, quantity: 7 },
    { title: 'Наушники', price: 7000, quantity: 15 },
    { title: 'Клавиатура', price: 5000, quantity: 8 },
]

// пример Reduce
const countOfProducts = products.reduce((acc, product) => {
    return acc + product.quantity;
}, 0)

console.log(countOfProducts); // 45


// пример Sort
const sortedProducts = products.tooSorted((a, b) => b.price - a.price);
console.log(sortedProducts);


// пример Sort

const names = ["John", "Bob", "Alex", "Ann"];

console.log(names.sort()) // сортирует элементы по алфавиту


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// пример Sort
console.log(
    numbers.sort((a, b) => {
        return a - b;
        //return b - a; // обратный порядок
    })
);

// пример Reduce
const sum = numbers.reduce(function (acc, number) {
    return acc + number;
}, 0);
// ||
// let sum = 0;
// numbers.forEach(function (number) {
//     sum = sum + number;
// })

console.log(sum); // 55