// Find, FindIndex, Includes

// 1 пример Find
const numbers = [1, 2, 3, 4, 5, 6];

const number = numbers.find(number => {
    return number > 3;
});

if (number === undefined) {
    console.log("Число не найдуно");
} else {
    console.log(number);
}

let products = [
    { title: 'Ноутбук', price: 80000, quantity: 5 },
    { title: 'Смартфон', price: 50000, quantity: 10 },
    { title: 'Планшет', price: 30000, quantity: 7 },
    { title: 'Наушники', price: 7000, quantity: 15 },
    { title: 'Клавиатура', price: 5000, quantity: 8 },
]
// 2 пример Find
const laptop = products.find(function(product) {
    return product.title === "Ноутбук";
})

console.log(laptop);

// 1 пример FindIndex

const numbers2 = [2, 3, 543, 5, 6, 457];

// const numberIndex = numbers.findIndex(function(number) {
//     return number == 543;
// }); ищет индекс первого элемента массива, который удовлетворяет условию в функции. выводит позицию индекса 2
// const numberIndex = number.indexOf(5, 4); // ищем 4 начиная с индекса 4
console.log(numbers.includes(3)); // ищет элемент в массиве
console.log(numberIndex)



// Some и Every
let products2 = [
    { title: 'Ноутбук', price: 80000, quantity: 5 },
    { title: 'Смартфон', price: 50000, quantity: 10 },
    { title: 'Планшет', price: 30000, quantity: 7 },
    { title: 'Наушники', price: 7000, quantity: 15 },
    { title: 'Клавиатура', price: 5000, quantity: 8 },
]
// console.log(products2.some(product => {
//     product.title === 'Планшет';
// })
// ); поиск элмента в массиве

// console.log(products2.every(product => {
//     return product.quantity > 6;
// })
// ); проверка количества элемента в массиве