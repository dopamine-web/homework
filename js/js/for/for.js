// Задача 1

// for (i = 1; i <= 20; i++) {
//   if (i % 4 === 0) {
//     continue;
// }
// console.log(i);
// }

// Задача 2
// С помощью цикла for вычислите факториал числа (произведение всех чисел от 1 до заданного числа). Используйте prompt для получение начального значения.

// let n = +prompt("Введите число");
// let result = 1;

// for (let i = 1; i <= n; i++) {
//   result *= i;
// }
// alert(result);

// Задача 3.
// *Задача 3.
// Выведите в консоль шахматную доску размером 8x8, где символы чередуются (например, # и пробел). Начинайте с # в первой ячейке первой строки.
// const boarSize = 8;
// let board = "";

// for (let i = 1; i <=boarSize; i++) {
//     let row = "";
//     for (let j =1; j <= boarSize; j++) {
//         row += ( i + j ) % 2 === 0 ? "# " : "  "
//     }
//     board += row + "\n";
// }

// console.log(board);

// 1. Сумма только чётных
// Пользователь вводит число n.
// Нужно найти сумму только чётных чисел от 1 до n.

// const input = prompt("vvedite tsislo");
// const number = Number(input);

// let sum = 0;

// for (let i = 1; i <= number; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// 2. Подсчёт цифр в числе
// Пользователь вводит число.
// Нужно посчитать, сколько в нём цифр.

// const input = prompt("Введите число");
// let number = Number(input);

// if (number < 0) {
//   number = -number; // просто убираем минус
// }

// let count = 0;

// if (number === 0) {
//   count = 1;
// } else {
//   while (number > 0) {
//     number = (number - number % 10) / 10;
//     count++;
//   }
// }

// console.log(count);

// let secret = Math.floor(Math.random() * 20) + 1;
// let attempts = 0;
// let guess = 0;

// while (guess !== secret) {
//   guess = Number(prompt("Угадай число от 1 до 20"));
//   attempts++;
// }
// if (guess > secret) {
//   console.log("Меньше");
// } else if (guess < secret) {
//   console.log("Больше");
// } else {
//   console.log("Ты угадал!");
//   console.log("Попыток:", attempts);
// }

let secret = Math.floor(Math.random() * 20) + 1;
let attempts = 0;

const input = document.getElementById("input");
const button = document.getElementById("btn");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");

button.addEventListener("click", function () {
  const guess = Number(input.value);
  attempts++;

  if (guess > secret) {
    message.textContent = "Меньше";
  } else if (guess < secret) {
    message.textContent = "Больше";
  } else {
    message.textContent = "Ты угадал!";
    attemptsText.textContent = "Попыток:" + attempts;
  }

  input.value = ""
});
